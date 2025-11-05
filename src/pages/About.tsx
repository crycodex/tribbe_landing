import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Zap, Mail, Github, Calendar, MapPin, Coffee, Code, Dumbbell, TrendingUp } from "lucide-react";

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

const stats = [
  { label: "Usuarios Activos", value: "100+", icon: Users },
  { label: "Entrenamientos Registrados", value: "100+", icon: Dumbbell },
  { label: "Gimnasios Conectados", value: "15+", icon: MapPin },
  { label: "Crecimiento Mensual", value: "2%", icon: TrendingUp }
];


const team = [
  {
    name: "Cristhian Recalde",
    role: "Founder & Full Stack Developer",
    bio: "Desarrollador Flutter apasionado por el fitness. Creé Tribbe porque no encontraba una app que combinara social + tracking de forma simple.",
    location: "Ecuador",
    experience: "5+ años",
    skills: ["Flutter", "Firebase", "UI/UX", "Product Design", "DevOps"]
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border mb-4">
              <span className="text-sm font-medium text-muted-foreground">🇪🇨 Construido con pasión desde Ecuador</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold">
              Sobre{" "}
              <span className="text-primary">
                Tribbe
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              La red social fitness que convierte cada entrenamiento en una experiencia compartida. 
              Nacimos para eliminar la soledad del gimnasio y hacer que el progreso sea visible y social.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>

          {/* Mission */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Misión</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Hacer que el fitness sea social, divertido y verificable. Queremos que cada 
                  entrenamiento sea una victoria compartida con tu tribu, no un número perdido 
                  en una hoja de Excel.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Eliminar la soledad del gimnasio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Hacer visible el progreso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-muted-foreground">Crear comunidades fitness reales</span>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-secondary/20">
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "El fitness no es solo sobre números y repeticiones. Es sobre comunidad, 
                  motivación y celebrar cada pequeña victoria juntos."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-semibold">Cristhian Recalde</div>
                    <div className="text-sm text-muted-foreground">Founder</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

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
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              El{" "}
              <span className="text-primary">
                Equipo
              </span>
            </h2>
            <div className="max-w-3xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="p-8">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <p className="text-muted-foreground mb-4">{member.bio}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{member.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Code className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{member.experience}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact */}
          <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-secondary/20">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Quieres saber más?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estamos siempre abiertos a escuchar ideas, sugerencias o simplemente charlar sobre fitness. 
              Tu feedback es lo que hace que Tribbe sea mejor cada día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Envíanos un email
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Github className="mr-2 h-5 w-5" />
                Ver en GitHub
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                También puedes encontrarnos en nuestras redes sociales o unirte a nuestra comunidad de Discord
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
