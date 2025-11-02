import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart, Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Comunidad Primero",
    description: "Creemos que el fitness es mejor cuando se comparte. Nuestra plataforma pone la comunidad en el centro de todo."
  },
  {
    icon: Target,
    title: "Objetivos Reales",
    description: "No vendemos sueños imposibles. Ayudamos a establecer metas alcanzables y medibles con progreso verificable."
  },
  {
    icon: Users,
    title: "Transparencia Total",
    description: "Código abierto, roadmap público y comunicación directa con nuestra comunidad. Sin secretos."
  },
  {
    icon: Zap,
    title: "Innovación Constante",
    description: "Escuchamos a nuestra tribu y evolucionamos rápido. Las mejores ideas vienen de quienes usan la app."
  }
];

const team = [
  {
    name: "Cristhian Recalde",
    role: "Founder & Lead Developer",
    avatar: "👨‍💻",
    bio: "Desarrollador Flutter apasionado por el fitness. Creé Tribbe porque no encontraba una app que combinara social + tracking de forma simple."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Sobre{" "}
              <span className="text-primary">
                Tribbe
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nacimos de una frustración simple: las apps de fitness eran o demasiado complicadas 
              o demasiado solitarias. Queríamos algo que fuera tan fácil como Instagram pero 
              tan útil como una bitácora de entrenamiento profesional.
            </p>
          </div>

          {/* Mission */}
          <Card className="max-w-4xl mx-auto p-8 mb-16">
            <div className="text-center space-y-4">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Nuestra Misión</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hacer que el fitness sea social, divertido y verificable. Queremos que cada 
                entrenamiento sea una victoria compartida con tu tribu, no un número perdido 
                en una hoja de Excel.
              </p>
            </div>
          </Card>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nuestros{" "}
              <span className="text-primary">
                Valores
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">
              El{" "}
              <span className="text-primary">
                Equipo
              </span>
            </h2>
            <div className="max-w-2xl mx-auto">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">{member.avatar}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary mb-4">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Story */}
          <Card className="max-w-4xl mx-auto p-8 bg-secondary/20">
            <h2 className="text-3xl font-bold mb-6 text-center">
              La{" "}
              <span className="text-primary">
                Historia
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Tribbe nació en octubre de 2024, cuando un desarrollador frustrado con las apps 
                de fitness existentes decidió crear algo diferente. El objetivo era simple: 
                combinar la adictividad de Instagram con la utilidad de un tracker profesional.
              </p>
              <p>
                Después de meses de desarrollo, pruebas con beta testers y feedback constante 
                de la comunidad fitness, Tribbe evolucionó en una plataforma completa que incluye 
                fotos de entrenamientos, rachas semanales, mensajería temporal y competencias por gimnasio.
              </p>
              <p>
                Hoy, miles de atletas usan Tribbe diariamente para mantenerse motivados, competir 
                con amigos y llevar su progreso al siguiente nivel. Y esto es solo el comienzo.
              </p>
            </div>
          </Card>

          {/* Contact */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">¿Quieres saber más?</h3>
            <p className="text-muted-foreground mb-6">
              Estamos siempre abiertos a escuchar ideas, sugerencias o simplemente charlar sobre fitness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:cristhian@tribbe.app"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all"
              >
                Envíanos un email
              </a>
              <a
                href="https://github.com/tu-usuario/tribbe_app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary border rounded-lg font-medium hover:bg-secondary/80 transition-all"
              >
                Ver en GitHub
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
