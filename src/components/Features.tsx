import { Camera, Flame, MessageCircle, Trophy, Users, Dumbbell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const features = [
  {
    icon: Camera,
    title: "Posts con Fotos y Entrenamientos",
    description: "Comparte tus entrenamientos con fotos. Muestra tu progreso al mundo.",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Flame,
    title: "Rachas Semanales",
    description: "Mantén tu racha activa entrenando de lunes a domingo. Personaje dinámico que evoluciona contigo.",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10"
  },
  {
    icon: Users,
    title: "Red Social Fitness",
    description: "Sigue amigos, comparte logros y mantente motivado con la comunidad más activa.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Dumbbell,
    title: "Tracking Completo",
    description: "Registra series, peso, repeticiones y tiempo. Biblioteca de 50+ ejercicios organizados.",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    icon: MessageCircle,
    title: "Mensajería Temporal",
    description: "Chats privados que expiran en 7 días. Conecta con tu tribu sin saturar tu bandeja.",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-500/10 to-purple-500/10"
  },
  {
    icon: Trophy,
    title: "Competencias",
    description: "Compite en rankings por gimnasio. Logros, badges y premios por tu esfuerzo.",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <Card 
      className="relative p-8 group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Gradiente de fondo animado */}
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Efecto de brillo en hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Ícono con gradiente y animación */}
        <div className="flex justify-center mb-6">
          <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} transform transition-transform duration-500 ${isHovered ? 'rotate-6 scale-110' : ''}`}>
            <Icon className="h-8 w-8 text-white" />
            {/* Efecto de pulso */}
            {isHovered && (
              <div className="absolute inset-0 rounded-2xl bg-white/30 animate-ping" />
            )}
          </div>
        </div>
        
        {/* Contenido */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>

        {/* Indicador decorativo */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform origin-left transition-transform duration-500 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />
      </div>
    </Card>
  );
};

export const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Todo lo que necesitas para{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              dominar el gym
            </span>
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-delay">
            Funcionalidades diseñadas para que nunca entrenes solo, aunque lo hagas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
};
