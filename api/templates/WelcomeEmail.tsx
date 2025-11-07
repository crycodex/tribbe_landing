import React from 'react';

interface WelcomeEmailProps {
  email: string;
  name?: string;
}

const WelcomeEmail = ({ 
  email, 
  name 
}: WelcomeEmailProps) => {
  const displayName = name || email.split('@')[0];

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={styles.body}>
        <table style={styles.container} cellPadding="0" cellSpacing="0">
          <tr>
            <td style={styles.content}>
              {/* Header */}
              <div style={styles.header}>
                <h1 style={styles.logo}>Tribbe</h1>
                <p style={styles.tagline}>Tu red social fitness</p>
              </div>

              {/* Main Content */}
              <div style={styles.main}>
                <h2 style={styles.title}>
                  ¡Hola {displayName}! 👋
                </h2>
                
                <p style={styles.text}>
                  ¡Bienvenido a la <strong>Tribu</strong>! 🎉
                </p>

                <p style={styles.text}>
                  Gracias por unirte a nuestra lista de espera. Eres parte de una comunidad 
                  exclusiva que será de las primeras en experimentar la red social fitness 
                  más innovadora.
                </p>

                {/* Features Box */}
                <div style={styles.featuresBox}>
                  <h3 style={styles.featuresTitle}>
                    ¿Qué puedes esperar?
                  </h3>
                  <ul style={styles.featuresList}>
                    <li style={styles.featureItem}>
                      🏋️ <strong>Compite</strong> con amigos en desafíos épicos
                    </li>
                    <li style={styles.featureItem}>
                      📊 <strong>Rastrea</strong> tu progreso de forma visual
                    </li>
                    <li style={styles.featureItem}>
                      🌟 <strong>Motívate</strong> con una comunidad activa
                    </li>
                    <li style={styles.featureItem}>
                      🎯 <strong>Alcanza</strong> tus objetivos fitness
                    </li>
                  </ul>
                </div>

                <p style={styles.text}>
                  Te mantendremos informado sobre:
                </p>

                <ul style={styles.updatesList}>
                  <li style={styles.updateItem}>
                    📱 Fecha de lanzamiento
                  </li>
                  <li style={styles.updateItem}>
                    🎁 Beneficios exclusivos para early adopters
                  </li>
                  <li style={styles.updateItem}>
                    ✨ Nuevas funcionalidades
                  </li>
                </ul>

                <p style={styles.text}>
                  Mientras tanto, síguenos en redes sociales para no perderte ninguna novedad.
                </p>

                {/* CTA Button */}
                <div style={styles.buttonContainer}>
                  <a 
                    href="https://tribbe.app" 
                    style={styles.button}
                  >
                    Visitar Tribbe.app
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div style={styles.footer}>
                <p style={styles.footerText}>
                  © 2025 Tribbe. Todos los derechos reservados.
                </p>
                <p style={styles.footerText}>
                  <a href="https://tribbe.app/privacy" style={styles.link}>
                    Política de Privacidad
                  </a>
                  {' • '}
                  <a href="https://tribbe.app/terms" style={styles.link}>
                    Términos de Servicio
                  </a>
                </p>
                <p style={styles.footerSmall}>
                  Recibiste este email porque te uniste a la lista de espera de Tribbe.
                </p>
              </div>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
};

// Estilos inline para compatibilidad con clientes de email
const styles = {
  body: {
    backgroundColor: '#0a0a0a',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    margin: 0,
    padding: 0,
  },
  
  container: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#0a0a0a',
  },
  
  content: {
    padding: '40px 20px',
  },
  
  header: {
    textAlign: 'center' as const,
    marginBottom: '40px',
    paddingBottom: '20px',
    borderBottom: '2px solid #FFD700',
  },
  
  logo: {
    fontSize: '36px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 0 8px 0',
  },
  
  tagline: {
    color: '#888',
    fontSize: '14px',
    margin: 0,
  },
  
  main: {
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '32px',
    marginBottom: '24px',
  },
  
  title: {
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: '24px',
  },
  
  text: {
    color: '#cccccc',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '16px',
  },
  
  featuresBox: {
    backgroundColor: '#0a0a0a',
    borderRadius: '8px',
    padding: '24px',
    margin: '24px 0',
    border: '1px solid #FFD700',
  },
  
  featuresTitle: {
    color: '#FFD700',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: '16px',
  },
  
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  
  featureItem: {
    color: '#cccccc',
    fontSize: '15px',
    lineHeight: '1.8',
    marginBottom: '12px',
  },
  
  updatesList: {
    listStyle: 'none',
    padding: 0,
    margin: '16px 0',
  },
  
  updateItem: {
    color: '#cccccc',
    fontSize: '15px',
    lineHeight: '1.8',
    marginBottom: '8px',
  },
  
  buttonContainer: {
    textAlign: 'center' as const,
    marginTop: '32px',
  },
  
  button: {
    display: 'inline-block',
    backgroundColor: '#FFD700',
    color: '#0a0a0a',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '14px 32px',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
  },
  
  footer: {
    textAlign: 'center' as const,
    paddingTop: '24px',
    borderTop: '1px solid #333',
  },
  
  footerText: {
    color: '#888',
    fontSize: '14px',
    margin: '8px 0',
  },
  
  footerSmall: {
    color: '#666',
    fontSize: '12px',
    margin: '16px 0 0 0',
  },
  
  link: {
    color: '#FFD700',
    textDecoration: 'none',
  },
};

export default WelcomeEmail;

