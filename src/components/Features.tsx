import { Camera, Flame, MessageCircle, Trophy, Users, Dumbbell } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Camera,
    title: "Posts con Fotos",
    description: "Comparte tus entrenamientos con fotos estilo Instagram. Muestra tu progreso al mundo."
  },
  {
    icon: Flame,
    title: "Rachas Semanales",
    description: "Mantén tu racha activa entrenando de lunes a domingo. Personaje dinámico que evoluciona contigo."
  },
  {
    icon: Users,
    title: "Red Social Fitness",
    description: "Sigue amigos, comparte logros y mantente motivado con la comunidad más activa."
  },
  {
    icon: Dumbbell,
    title: "Tracking Completo",
    description: "Registra series, peso, repeticiones y tiempo. Biblioteca de 50+ ejercicios organizados."
  },
  {
    icon: MessageCircle,
    title: "Mensajería Temporal",
    description: "Chats privados que expiran en 7 días. Conecta con tu tribu sin saturar tu bandeja."
  },
  {
    icon: Trophy,
    title: "Competencias",
    description: "Compite en rankings por gimnasio. Logros, badges y premios por tu esfuerzo."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Todo lo que necesitas para{" "}
            <span className="text-primary">
              dominar el gym
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Funcionalidades diseñadas para que nunca entrenes solo, aunque lo hagas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
