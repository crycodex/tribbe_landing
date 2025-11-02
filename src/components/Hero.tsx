import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-workout.jpg";
import appMockup from "@/assets/app-mockup.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">{/* Added pt-16 for navbar space */}
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm font-medium text-muted-foreground">Instagram para el Gimnasio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Entrena.{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Compite.
              </span>{" "}
              Conecta.
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              La red social fitness que convierte cada entrenamiento en una experiencia compartida. 
              Registra tus workouts con fotos, compite con amigos y mantén rachas semanales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg group bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Download className="mr-2 h-5 w-5" />
                Descargar App
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-border hover:bg-card/50">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Usuarios Activos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">500K+</div>
                <div className="text-sm text-muted-foreground">Entrenamientos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right content - App mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10">
              <img 
                src={appMockup} 
                alt="Tribbe App Interface" 
                className="w-full max-w-md mx-auto drop-shadow-2xl animate-float"
              />
            </div>
            {/* Glow effect behind phone */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
