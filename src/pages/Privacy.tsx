import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Eye, Lock, Database, Users, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Política de{" "}
              <span className="text-primary">
                Privacidad
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tu privacidad es importante para nosotros. Aquí te explicamos cómo recopilamos, 
              usamos y protegemos tu información personal.
            </p>
            <p className="text-sm text-muted-foreground">
              Última actualización: 2 de noviembre de 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Información que recopilamos */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Información que Recopilamos</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Información de Cuenta</h3>
                      <p>Nombre, email, foto de perfil y preferencias de entrenamiento que proporcionas al registrarte.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Datos de Entrenamientos</h3>
                      <p>Ejercicios, series, repeticiones, peso, tiempo y fotos que registras en tus sesiones de entrenamiento.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Información Social</h3>
                      <p>Conexiones con otros usuarios, likes, comentarios y mensajes que envías dentro de la app.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Datos de Uso</h3>
                      <p>Información sobre cómo usas la app, incluyendo funciones utilizadas y tiempo de uso.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Cómo usamos tu información */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Cómo Usamos tu Información</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Proporcionar y mejorar nuestros servicios de tracking y red social fitness</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Personalizar tu experiencia y mostrar contenido relevante</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Facilitar conexiones sociales con otros usuarios</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Enviar notificaciones importantes sobre tu cuenta y entrenamientos</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p>Analizar el uso de la app para mejorar funcionalidades</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Compartir información */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Compartir Información</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">No vendemos tu información personal.</strong> Solo compartimos información en estas situaciones:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <p><strong className="text-foreground">Con otros usuarios:</strong> Información de perfil público, entrenamientos y estadísticas que eliges compartir</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <p><strong className="text-foreground">Proveedores de servicios:</strong> Firebase y otros servicios técnicos necesarios para operar la app</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <p><strong className="text-foreground">Requerimientos legales:</strong> Cuando sea requerido por ley o para proteger derechos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Seguridad */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Seguridad de Datos</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Implementamos medidas de seguridad técnicas y organizacionales para proteger tu información:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Técnicas</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Encriptación de datos en tránsito y reposo</li>
                          <li>• Autenticación segura con Firebase</li>
                          <li>• Acceso limitado a datos personales</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Organizacionales</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Políticas internas de privacidad</li>
                          <li>• Capacitación en protección de datos</li>
                          <li>• Auditorías regulares de seguridad</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tus derechos */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Tus Derechos</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p><strong className="text-foreground">Acceso:</strong> Solicitar una copia de tu información personal</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p><strong className="text-foreground">Corrección:</strong> Actualizar información incorrecta o incompleta</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p><strong className="text-foreground">Eliminación:</strong> Solicitar la eliminación de tu cuenta y datos</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <p><strong className="text-foreground">Portabilidad:</strong> Obtener tus datos en formato exportable</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contacto */}
            <Card className="p-8 bg-secondary/20">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">¿Preguntas sobre Privacidad?</h2>
                <p className="text-muted-foreground mb-6">
                  Si tienes preguntas sobre esta política de privacidad o cómo manejamos tus datos, 
                  no dudes en contactarnos.
                </p>
                <a 
                  href="mailto:privacy@tribbe.app" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all"
                >
                  <Mail className="h-4 w-4" />
                  privacy@tribbe.app
                </a>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;