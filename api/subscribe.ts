import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface SubscribeRequestBody {
  email: string;
  name?: string;
}

// Template de email inline (HTML simple)
function getWelcomeEmailHTML(email: string, name?: string): string {
  const displayName = name || email.split('@')[0];
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #0a0a0a;">
    <tr>
      <td style="padding: 40px 20px;">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #FFD700;">
          <h1 style="font-size: 36px; font-weight: bold; color: #FFD700; margin: 0 0 8px 0;">Tribbe</h1>
          <p style="color: #888; font-size: 14px; margin: 0;">Tu red social fitness</p>
        </div>

        <!-- Main Content -->
        <div style="background-color: #1a1a1a; border-radius: 12px; padding: 32px; margin-bottom: 24px;">
          <h2 style="color: #ffffff; font-size: 28px; font-weight: bold; margin-top: 0; margin-bottom: 24px;">
            ¡Hola ${displayName}! 👋
          </h2>
          
          <p style="color: #cccccc; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            ¡Bienvenido a la <strong>Tribu</strong>! 🎉
          </p>

          <p style="color: #cccccc; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            Gracias por unirte a nuestra lista de espera. Eres parte de una comunidad exclusiva que será de las primeras en experimentar la red social fitness más innovadora.
          </p>

          <!-- Features Box -->
          <div style="background-color: #0a0a0a; border-radius: 8px; padding: 24px; margin: 24px 0; border: 1px solid #FFD700;">
            <h3 style="color: #FFD700; font-size: 20px; font-weight: bold; margin-top: 0; margin-bottom: 16px;">
              ¿Qué puedes esperar?
            </h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
              <li style="color: #cccccc; font-size: 15px; line-height: 1.8; margin-bottom: 12px;">
                🏋️ <strong>Compite</strong> con amigos en desafíos épicos
              </li>
              <li style="color: #cccccc; font-size: 15px; line-height: 1.8; margin-bottom: 12px;">
                📊 <strong>Rastrea</strong> tu progreso de forma visual
              </li>
              <li style="color: #cccccc; font-size: 15px; line-height: 1.8; margin-bottom: 12px;">
                🌟 <strong>Motívate</strong> con una comunidad activa
              </li>
              <li style="color: #cccccc; font-size: 15px; line-height: 1.8; margin-bottom: 12px;">
                🎯 <strong>Alcanza</strong> tus objetivos fitness
              </li>
            </ul>
          </div>

          <p style="color: #cccccc; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            Te mantendremos informado sobre la fecha de lanzamiento y beneficios exclusivos para early adopters.
          </p>

          <!-- CTA Button -->
          <div style="text-align: center; margin-top: 32px;">
            <a href="https://tribbe.app" style="display: inline-block; background-color: #FFD700; color: #0a0a0a; font-size: 16px; font-weight: bold; padding: 14px 32px; border-radius: 8px; text-decoration: none;">
              Visitar Tribbe.app
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding-top: 24px; border-top: 1px solid #333;">
          <p style="color: #888; font-size: 14px; margin: 8px 0;">
            © 2025 Tribbe. Todos los derechos reservados.
          </p>
          <p style="color: #888; font-size: 14px; margin: 8px 0;">
            <a href="https://tribbe.app/privacy" style="color: #FFD700; text-decoration: none;">Política de Privacidad</a>
            •
            <a href="https://tribbe.app/terms" style="color: #FFD700; text-decoration: none;">Términos de Servicio</a>
          </p>
          <p style="color: #666; font-size: 12px; margin: 16px 0 0 0;">
            Recibiste este email porque te uniste a la lista de espera de Tribbe.
          </p>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
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
        from: 'Tribbe <recaldecd@gmail.com>', // Cambiar cuando verifiques tu dominio
        to: email,
        subject: '¡Bienvenido a la Tribu! 🎉',
        html: getWelcomeEmailHTML(email, name),
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
