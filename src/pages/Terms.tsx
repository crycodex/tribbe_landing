import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FileText, Users, Shield, AlertTriangle, Scale, Mail } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Términos de{" "}
              <span className="text-primary">
                Servicio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Al usar Tribbe, aceptas estos términos. Te recomendamos leerlos cuidadosamente 
              para entender tus derechos y responsabilidades.
            </p>
            <p className="text-sm text-muted-foreground">
              Última actualización: 2 de noviembre de 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Aceptación de términos */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Aceptación de Términos</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Al acceder y usar Tribbe, aceptas estar sujeto a estos Términos de Servicio y 
                      todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno 
                      de estos términos, no debes usar nuestro servicio.
                    </p>
                    <p>
                      Nos reservamos el derecho de actualizar estos términos en cualquier momento. 
                      Te notificaremos sobre cambios significativos a través de la app o por email.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Descripción del servicio */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Descripción del Servicio</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Tribbe es una red social fitness que permite a los usuarios:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <p>Registrar y hacer seguimiento de entrenamientos</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <p>Compartir fotos y progreso con otros usuarios</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <p>Participar en competencias y mantener rachas</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <p>Conectar con gimnasios y comunidades locales</p>
                      </div>
                    </div>
                    <p>
                      El servicio se proporciona "tal como está" y puede incluir funcionalidades 
                      en desarrollo o versiones beta.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Cuentas de usuario */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Cuentas de Usuario</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Registro</h3>
                      <p>Debes proporcionar información precisa y completa al crear tu cuenta. Eres responsable de mantener la confidencialidad de tu contraseña.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Elegibilidad</h3>
                      <p>Debes tener al menos 13 años para usar Tribbe. Los menores de 18 años necesitan consentimiento parental.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Una Cuenta por Persona</h3>
                      <p>Solo puedes tener una cuenta personal. Las cuentas comerciales o de gimnasios requieren autorización previa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contenido y conducta */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contenido y Conducta</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Contenido Permitido</h3>
                      <p>Puedes compartir fotos, videos y texto relacionados con fitness, entrenamientos y bienestar.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Contenido Prohibido</h3>
                      <div className="space-y-2">
                        <p>No está permitido contenido que sea:</p>
                        <ul className="space-y-1 ml-4">
                          <li>• Ofensivo, discriminatorio o que promueva odio</li>
                          <li>• Sexualmente explícito o inapropiado</li>
                          <li>• Spam, publicidad no autorizada o contenido comercial</li>
                          <li>• Información médica incorrecta o peligrosa</li>
                          <li>• Violación de derechos de autor o propiedad intelectual</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Moderación</h3>
                      <p>Nos reservamos el derecho de revisar, editar o eliminar contenido que viole estos términos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Propiedad intelectual */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Propiedad Intelectual</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Tu Contenido</h3>
                      <p>Mantienes la propiedad de todo el contenido que publicas. Al usar Tribbe, nos otorgas una licencia para mostrar, distribuir y promocionar tu contenido dentro de la plataforma.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Nuestro Contenido</h3>
                      <p>Tribbe, su logo, diseño y funcionalidades son propiedad de Tribbe App. No puedes usar nuestros elementos sin autorización.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Limitaciones y responsabilidades */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Limitaciones y Responsabilidades</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Uso Bajo tu Propio Riesgo</h3>
                      <p>Tribbe es una herramienta de seguimiento y social. No proporcionamos consejos médicos. Consulta con profesionales antes de comenzar cualquier programa de ejercicios.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Disponibilidad del Servicio</h3>
                      <p>Nos esforzamos por mantener el servicio disponible, pero no garantizamos acceso ininterrumpido. Podemos realizar mantenimiento o actualizaciones que afecten temporalmente el servicio.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Limitación de Responsabilidad</h3>
                      <p>No somos responsables por daños indirectos, incidentales o consecuentes que puedan surgir del uso de Tribbe.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Terminación */}
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex p-3 rounded-lg bg-primary/10">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Terminación</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Puedes cancelar tu cuenta en cualquier momento desde la configuración de la app. 
                      Podemos suspender o terminar tu cuenta si violas estos términos.
                    </p>
                    <p>
                      Al terminar tu cuenta, tu contenido público puede permanecer visible hasta que 
                      sea eliminado, pero tu información personal será eliminada según nuestra 
                      Política de Privacidad.
                    </p>
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
                <h2 className="text-2xl font-bold mb-4">¿Preguntas sobre los Términos?</h2>
                <p className="text-muted-foreground mb-6">
                  Si tienes preguntas sobre estos términos de servicio o necesitas aclaraciones, 
                  estamos aquí para ayudarte.
                </p>
                <a 
                  href="mailto:legal@tribbe.app" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all"
                >
                  <Mail className="h-4 w-4" />
                  legal@tribbe.app
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

export default Terms;