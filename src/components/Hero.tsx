import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/hero-workout.jpg";
import appMockup from "@/assets/app-mockup.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24">
      <div className="container px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-muted-foreground">Instagram para el Gimnasio</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Entrena.{" "}
              <span className="text-primary">
                Compite.
              </span>{" "}
              Conecta.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              La red social fitness que convierte cada entrenamiento en una experiencia compartida. 
              Registra tus workouts con fotos, compite con amigos y mantén rachas semanales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg group">
                <Download className="mr-2 h-5 w-5" />
                Descargar App
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t">
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Usuarios Activos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">500K+</div>
                <div className="text-sm text-muted-foreground">Entrenamientos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right content - App mockup */}
          <div className="relative">
            <img 
              src={appMockup} 
              alt="Tribbe App Interface" 
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
