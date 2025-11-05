import { Card } from "@/components/ui/card";
import { Camera, Timer, Flame, User, Trophy, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";

const features = [
  {
    title: "Feed Social",
    description: "Posts con fotos y ejercicios overlay",
    icon: Camera,
    color: "purple",
    gradient: "from-purple-600 via-purple-500 to-pink-500"
  },
  {
    title: "Registro de Entrenamientos",
    description: "Timer en vivo y agregar ejercicios",
    icon: Timer,
    color: "blue",
    gradient: "from-blue-600 via-blue-500 to-cyan-500"
  },
  {
    title: "Rachas Semanales",
    description: "Visualiza tu progreso semanal",
    icon: Flame,
    color: "orange",
    gradient: "from-orange-600 via-orange-500 to-red-500"
  },
  {
    title: "Perfil de Usuario",
    description: "Stats y grid de entrenamientos",
    icon: User,
    color: "green",
    gradient: "from-green-600 via-green-500 to-emerald-500"
  },
  {
    title: "Rankings por Gimnasio",
    description: "Compite con tu comunidad",
    icon: Trophy,
    color: "yellow",
    gradient: "from-yellow-600 via-yellow-500 to-amber-500"
  },
  {
    title: "Mensajería Temporal",
    description: "Chats que expiran en 7 días",
    icon: MessageCircle,
    color: "indigo",
    gradient: "from-indigo-600 via-indigo-500 to-purple-500"
  }
];

const ScreenshotCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;
  const animationDelay = `${index * 0.15}s`;

  return (
    <div 
      className="relative group animate-slide-in-scale"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-700 group-hover:blur-xl`} />
      
      <Card className="relative h-full p-8 text-center bg-card/80 backdrop-blur-sm border-2 hover:border-transparent transition-all duration-500 overflow-hidden">
        {/* Particulas decorativas en las esquinas */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
        </div>
        
        {/* Gradiente de fondo que aparece en hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
        
        {/* Contenedor del ícono con efectos 3D */}
        <div className="relative mb-6 flex justify-center">
          <div className={`relative transform transition-all duration-500 ${isHovered ? 'scale-110 -translate-y-2' : ''}`}>
            {/* Círculo de fondo con gradiente */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-full blur-lg opacity-50 scale-150`} />
            
            {/* Ícono principal */}
            <div className={`relative inline-flex p-5 rounded-full bg-gradient-to-br ${feature.gradient} shadow-lg`}>
              <Icon className="h-8 w-8 text-white relative z-10" />
              
              {/* Anillo animado en hover */}
              {isHovered && (
                <>
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse" />
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Contenido de texto */}
        <div className="relative space-y-3">
          <h3 className={`text-xl font-bold transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
            {feature.title}
          </h3>
          <p className={`text-muted-foreground transition-all duration-300 ${isHovered ? 'text-foreground/80' : ''}`}>
            {feature.description}
          </p>
        </div>

        {/* Línea decorativa inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
          <div className={`h-full bg-gradient-to-r ${feature.gradient} transform origin-left transition-transform duration-700 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
        </div>

        {/* Efecto de esquinas brillantes */}
        <div className={`absolute top-0 left-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-br-full transition-opacity duration-500`} />
        <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-tl-full transition-opacity duration-500`} />
      </Card>
    </div>
  );
};

export const Screenshots = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interfaz Moderna</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
            Explora{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/70">
                la app
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent blur-xl" />
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground animate-fade-in-up-delay">
            Diseño intuitivo que hace el tracking divertido
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScreenshotCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-scale {
          animation: slideInScale 0.7s ease-out both;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out both;
        }
        
        .animate-fade-in-up-delay {
          animation: fadeInUp 0.8s ease-out 0.1s both;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse 5s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite;
        }
      `}</style>
    </section>
  );
};
