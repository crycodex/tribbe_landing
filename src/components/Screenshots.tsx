import { Card } from "@/components/ui/card";

const screenshots = [
  {
    title: "Feed Social",
    description: "Posts con fotos y ejercicios overlay",
    emoji: "📱"
  },
  {
    title: "Registro de Entrenamientos",
    description: "Timer en vivo y agregar ejercicios",
    emoji: "🏋️"
  },
  {
    title: "Rachas Semanales",
    description: "Visualiza tu progreso semanal",
    emoji: "🔥"
  },
  {
    title: "Perfil de Usuario",
    description: "Stats y grid de entrenamientos",
    emoji: "👤"
  },
  {
    title: "Rankings por Gimnasio",
    description: "Compite con tu comunidad",
    emoji: "🏆"
  },
  {
    title: "Mensajería Temporal",
    description: "Chats que expiran en 7 días",
    emoji: "💬"
  }
];

export const Screenshots = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Explora{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              la app
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Diseño intuitivo que hace el tracking divertido
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Screenshot placeholder */}
              <div className="relative aspect-[9/16] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                  {screenshot.emoji}
                </div>
                {/* Overlay con título */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{screenshot.title}</h3>
                  <p className="text-sm text-white/80">{screenshot.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Disponible próximamente en App Store y Google Play
          </p>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
              <div className="text-2xl mb-1">🍎</div>
              <div className="text-xs text-muted-foreground">iOS 14+</div>
            </div>
            <div className="px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
              <div className="text-2xl mb-1">🤖</div>
              <div className="text-xs text-muted-foreground">Android 8+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
