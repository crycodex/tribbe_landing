import { Card } from "@/components/ui/card";
import { Flame, Calendar } from "lucide-react";

const weekDays = ["L", "M", "X", "J", "V", "S", "D"];
const completedDays = [true, true, false, true, true, false, false];

export const Streaks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Streak visualization */}
          <div className="animate-slide-up">
            <Card className="p-8 bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm border-border/50 shadow-card">
              <div className="space-y-6">
                {/* Streak header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-gradient-primary">
                      <Flame className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Racha Actual</div>
                      <div className="text-3xl font-bold">4 días</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Esta Semana</div>
                    <div className="text-2xl font-bold text-accent">4/7</div>
                  </div>
                </div>

                {/* Week visualization */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Lun - Dom</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {weekDays.map((day, index) => (
                      <div key={index} className="text-center space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">{day}</div>
                        <div 
                          className={`w-full aspect-square rounded-lg flex items-center justify-center transition-all duration-300 ${
                            completedDays[index]
                              ? "bg-gradient-primary shadow-glow scale-110"
                              : "bg-muted/30 border border-border/50"
                          }`}
                        >
                          {completedDays[index] && (
                            <span className="text-2xl">✓</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Character evolution preview */}
                <div className="pt-6 border-t border-border/50">
                  <div className="text-center space-y-2">
                    <div className="text-6xl animate-float">💪</div>
                    <p className="text-sm text-muted-foreground">
                      Tu personaje evoluciona con cada entrenamiento
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Description */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-accent/20">
              <Flame className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Gamificación</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold">
              Mantén tu{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                racha activa
              </span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Entrena de lunes a domingo y mantén viva tu racha semanal. 
                Cada día completado es un paso más hacia tus objetivos.
              </p>
              <p>
                Tu personaje evoluciona según tus logros: desde novato hasta 
                atleta legendario. Comparte tu progreso y compite con amigos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
                <div className="text-3xl font-bold text-primary">7</div>
                <div className="text-sm text-muted-foreground">Días consecutivos</div>
              </Card>
              <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/50">
                <div className="text-3xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground">Semanas completas</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
