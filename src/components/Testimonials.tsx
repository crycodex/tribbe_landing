import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Atleta Amateur",
    avatar: "👨‍🦱",
    rating: 5,
    comment: "Tribbe cambió completamente mi motivación. Ver el progreso de mis amigos me empuja a superarme cada día. Las rachas semanales son adictivas!",
    gym: "PowerGym Ciudad"
  },
  {
    name: "Ana Rodríguez",
    role: "Entrenadora Personal",
    avatar: "👩‍🦰",
    rating: 5,
    comment: "Como entrenadora, Tribbe me permite seguir el progreso de mis clientes de forma sencilla. El feed social hace que la comunidad se mantenga motivada.",
    gym: "FitClub Elite"
  },
  {
    name: "Miguel Santos",
    role: "Competidor",
    avatar: "👨",
    rating: 5,
    comment: "Las competencias por gimnasio son increíbles. Finalmente puedo ver cómo me comparo con otros atletas de mi nivel. Premium vale cada centavo.",
    gym: "Iron Temple"
  },
  {
    name: "Laura Vega",
    role: "Principiante",
    avatar: "👩",
    rating: 5,
    comment: "Nunca había sido constante en el gym hasta que descubrí Tribbe. El sistema de rachas y el apoyo de la comunidad me mantienen enfocada.",
    gym: "Fitness Zone"
  },
  {
    name: "Diego Martínez",
    role: "CrossFitter",
    avatar: "👨‍🦲",
    rating: 5,
    comment: "Perfecto para crossfit! Puedo registrar mis WODs, competir con mi box y compartir PRs. La interfaz es súper intuitiva.",
    gym: "CrossFit Urban"
  },
  {
    name: "Sofia Torres",
    role: "Atleta Fitness",
    avatar: "👱‍♀️",
    rating: 5,
    comment: "Me encanta poder compartir mis entrenamientos con fotos. Es como Instagram pero solo para gente que realmente entiende el esfuerzo.",
    gym: "GymX Premium"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Lo que dice{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              la tribu
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Miles de atletas ya entrenan con Tribbe cada día
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-muted-foreground">"{testimonial.comment}"</p>

                {/* Gym */}
                <div className="pt-2 border-t border-border/50">
                  <div className="text-xs text-muted-foreground">📍 {testimonial.gym}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
