import { Card } from "@/components/ui/card";
import { Camera, Timer, Flame, User, Trophy, MessageCircle } from "lucide-react";

const features = [
  {
    title: "Feed Social",
    description: "Posts con fotos y ejercicios overlay",
    icon: Camera
  },
  {
    title: "Registro de Entrenamientos",
    description: "Timer en vivo y agregar ejercicios",
    icon: Timer
  },
  {
    title: "Rachas Semanales",
    description: "Visualiza tu progreso semanal",
    icon: Flame
  },
  {
    title: "Perfil de Usuario",
    description: "Stats y grid de entrenamientos",
    icon: User
  },
  {
    title: "Rankings por Gimnasio",
    description: "Compite con tu comunidad",
    icon: Trophy
  },
  {
    title: "Mensajería Temporal",
    description: "Chats que expiran en 7 días",
    icon: MessageCircle
  }
];

export const Screenshots = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Explora{" "}
            <span className="text-primary">
              la app
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Diseño intuitivo que hace el tracking divertido
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
