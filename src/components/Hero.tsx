import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import Ballpit from "@/components/Ballpit";
import CountUp from "@/components/CountUp";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Ballpit Background */}
      <div className="absolute inset-0 w-full h-full">
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.99}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>
      
      <div className="container px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 backdrop-blur-md bg-background/50 p-8 rounded-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium text-muted-foreground">Encuentra tu tribu</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Entrena,{" "}
              <span className="text-primary">
                Compite y
              </span>{" "}
              Conecta.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              La app social fitness que convierte cada entrenamiento en una experiencia compartida. 
              Registra tus workouts con fotos, compite con amigos y mantén rachas semanales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg group">
                <Download className="mr-2 h-5 w-5" />
                Descargar App
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t">
              <div>
                <div className="text-2xl font-bold text-primary">
                  <CountUp from={0} to={100} duration={2} separator="," />+
                </div>
                <div className="text-sm text-muted-foreground">Usuarios Activos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  <CountUp from={0} to={100} duration={2} separator="," />+
                </div>
                <div className="text-sm text-muted-foreground">Entrenamientos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">
                  <CountUp from={0} to={89} duration={2} />%
                </div>
                <div className="text-sm text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right content - App mockup */}
          <div className="relative">
            <img 
              src={appMockup} 
              alt="Tribbe App Interface" 
              className=" max-w-md max-h-[75vh] mx-auto border-2 border-gray-200 rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
