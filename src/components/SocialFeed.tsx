import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockPosts = [
  {
    id: 1,
    user: "Carlos M.",
    avatar: "👨‍🦱",
    time: "Hace 2h",
    caption: "Día de piernas 🦵 3x12 sentadillas",
    exercises: ["Sentadillas", "Prensa", "Extensiones"],
    likes: 47,
    comments: 12
  },
  {
    id: 2,
    user: "Ana R.",
    avatar: "👩‍🦰",
    time: "Hace 4h",
    caption: "Nueva PR en bench press! 💪",
    exercises: ["Bench Press", "Incline Press", "Flyes"],
    likes: 89,
    comments: 23
  },
  {
    id: 3,
    user: "Miguel S.",
    avatar: "👨",
    time: "Hace 6h",
    caption: "Cardio matutino antes del trabajo 🏃",
    exercises: ["Running", "Burpees", "Jump Rope"],
    likes: 34,
    comments: 8
  }
];

export const SocialFeed = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Feed Social{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              en Tiempo Real
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada entrenamiento es una historia. Comparte tu progreso, inspira a otros.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {mockPosts.map((post, index) => (
            <Card 
              key={post.id}
              className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Post header */}
              <div className="flex items-center gap-3 p-4 border-b border-border/50">
                <div className="text-3xl">{post.avatar}</div>
                <div className="flex-1">
                  <div className="font-semibold">{post.user}</div>
                  <div className="text-sm text-muted-foreground">{post.time}</div>
                </div>
              </div>

              {/* Post image placeholder */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🏋️</div>
                </div>
                {/* Exercise overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex flex-wrap gap-2">
                    {post.exercises.map((exercise, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-card/50 backdrop-blur-sm border border-primary/30"
                      >
                        {exercise}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Post caption */}
              <div className="p-4 space-y-3">
                <p className="text-sm">{post.caption}</p>
                
                {/* Actions */}
                <div className="flex items-center gap-4 pt-2">
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
                    <Heart className="h-5 w-5" />
                    <span>{post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 hover:text-accent">
                    <MessageCircle className="h-5 w-5" />
                    <span>{post.comments}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 ml-auto hover:text-primary">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
