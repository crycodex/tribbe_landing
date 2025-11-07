import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import WelcomeEmail from './templates/WelcomeEmail';

interface SubscribeRequestBody {
  email: string;
  name?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Configurar headers CORS y Content-Type
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Solo permitir POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Método no permitido',
      message: 'Solo se permiten solicitudes POST' 
    });
  }

  // Verificar que las variables de entorno estén configuradas
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY no está configurada');
    return res.status(500).json({
      error: 'Error de configuración',
      message: 'El servicio no está configurado correctamente. Por favor contacta al administrador.',
    });
  }

  if (!AUDIENCE_ID) {
    console.error('RESEND_AUDIENCE_ID no está configurada');
    return res.status(500).json({
      error: 'Error de configuración',
      message: 'El servicio no está configurado correctamente. Por favor contacta al administrador.',
    });
  }

  const resend = new Resend(RESEND_API_KEY);

  try {
    const { email, name } = req.body as SubscribeRequestBody;

    // Validar email
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ 
        error: 'Email inválido',
        message: 'Por favor proporciona un email válido' 
      });
    }

    // 1. Agregar a Resend Audience
    const audienceResponse = await resend.contacts.create({
      email,
      firstName: name || '',
      unsubscribed: false,
      audienceId: AUDIENCE_ID,
    });

    if (audienceResponse.error) {
      // Si el contacto ya existe, devolver un mensaje amigable
      if (audienceResponse.error.message?.includes('already exists')) {
        return res.status(200).json({
          success: true,
          message: '¡Ya estás en la lista de espera! Te notificaremos pronto.',
        });
      }
      
      console.error('Error al agregar a audiencia:', audienceResponse.error);
      throw new Error('Error al agregar el contacto a la lista');
    }

    // 2. Enviar email de bienvenida
    try {
      const emailResponse = await resend.emails.send({
        from: 'Tribbe <onboarding@resend.dev>', // Cambiar a tu dominio verificado: onboarding@tribbe.app
        to: email,
        subject: '¡Bienvenido a la Tribu! 🎉',
        react: WelcomeEmail({ email, name }),
      });

      if (emailResponse.error) {
        console.error('Error al enviar email:', emailResponse.error);
        // No fallar si el email no se envía, pero loguearlo
      } else {
        console.log('Email enviado exitosamente:', emailResponse.data?.id);
      }
    } catch (emailError) {
      console.error('Excepción al enviar email:', emailError);
      // Continuar aunque falle el email
    }

    return res.status(200).json({
      success: true,
      message: '¡Te has unido exitosamente! Revisa tu email.',
      data: {
        contactId: audienceResponse.data?.id,
      }
    });

  } catch (error) {
    console.error('Error en subscribe:', error);
    
    // Asegurar que siempre devolvemos JSON
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    
    return res.status(500).json({
      success: false,
      error: 'Error del servidor',
      message: 'Hubo un problema al procesar tu solicitud. Por favor intenta de nuevo.',
      details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
    });
  }
}

// Función auxiliar para validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
