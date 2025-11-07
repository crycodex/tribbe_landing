import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { WelcomeEmail } from './templates/WelcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

// ID de tu audiencia en Resend (lo obtienes desde el dashboard)
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '';

interface SubscribeRequestBody {
  email: string;
  name?: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Solo permitir POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Método no permitido',
      message: 'Solo se permiten solicitudes POST' 
    });
  }

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
    const emailResponse = await resend.emails.send({
      from: 'Tribbe <onboarding@tribbe.app>',
      to: email,
      subject: '¡Bienvenido a la Tribu! 🎉',
      react: WelcomeEmail({ email, name }),
    });

    if (emailResponse.error) {
      console.error('Error al enviar email:', emailResponse.error);
      // No fallar si el email no se envía, pero loguearlo
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
    
    return res.status(500).json({
      error: 'Error del servidor',
      message: 'Hubo un problema al procesar tu solicitud. Por favor intenta de nuevo.',
    });
  }
}

// Función auxiliar para validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

