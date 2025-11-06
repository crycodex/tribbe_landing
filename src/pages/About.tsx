import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Zap, Mail, Github, Dumbbell, TrendingUp, MapPin } from "lucide-react";
import me from "@/assets/about/me.png";
import Aurora from "@/components/Aurora";
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



const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0 opacity-60">
        <Aurora
          colorStops={["#3A29FF", "#FFFFFF", "#3A29FF"]}
          blend={0.3}
          speed={1}
        />
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-24 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary to-secondary/50 border border-primary/20 mb-4 hover:scale-105 transition-transform">
              <span className="text-sm font-medium text-muted-foreground">🇪🇨 Construido con pasión desde Ecuador</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Sobre{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Tribbe
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              La red social fitness que convierte cada entrenamiento en una{" "}
              <span className="text-foreground font-semibold">experiencia compartida</span>. 
              Nacimos para eliminar la soledad del gimnasio y hacer que el progreso sea visible y social.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-b from-secondary/20 to-background border-primary/10"
                >
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </Card>
              );
            })}
          </div>

          {/* Mission */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 mb-2">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Nuestra{" "}
                  <span className="text-primary">Misión</span>
                </h2>
                <p className="text-lg md:text-xl leading-relaxed">
                  Hacer que el fitness sea social, divertido y verificable. Queremos que cada 
                  entrenamiento sea una victoria compartida con tu tribu, no un número perdido 
                  en una hoja de Excel.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      Eliminar la soledad del gimnasio
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      Hacer visible el progreso
                    </span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      Crear comunidades fitness reales
                    </span>
                  </div>
                </div>
              </div>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/20 border-primary/20 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
                    <img 
                      src={me} 
                      alt="Cristhian Recalde" 
                      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-lg" 
                    />
                  </div>
                  <div className="mb-6">
                    <div className="font-bold text-xl mb-1">Cristhian Recalde</div>
                    <div className="text-sm text-primary font-medium">Founder & Developer</div>
                  </div>
                  <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                    "El fitness no es solo sobre números y repeticiones. Es sobre comunidad, 
                    motivación y celebrar cada pequeña victoria juntos."
                  </blockquote>
                </div>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Nuestros{" "}
              <span className="text-primary">
                Valores
              </span>
            </h2>
            <p className="text-center mb-12 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada línea de código en Tribbe
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 border-primary/10 hover:border-primary/30"
                  >
                    <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 via-secondary/20 to-primary/5 border-primary/20 hover:shadow-2xl transition-all duration-300">
            <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">¿Quieres saber más?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Estamos siempre abiertos a escuchar ideas, sugerencias o simplemente charlar sobre fitness. 
              Tu feedback es lo que hace que Tribbe sea mejor cada día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg hover:scale-105 transition-transform">
                <Mail className="mr-2 h-5 w-5" />
                Envíanos un email
              </Button>
              <Button size="lg" variant="outline" className="text-lg hover:scale-105 transition-transform border-primary/30">
                <Github className="mr-2 h-5 w-5" />
                Ver en GitHub
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground">
                También puedes encontrarnos en nuestras redes sociales o unirte a nuestra comunidad de Discord
              </p>
            </div>
          </Card>
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default About;
