import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-10 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card/90 to-secondary/80 backdrop-blur-xl border-border/50 shadow-card">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Smartphone className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Próximamente en iOS y Android</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold">
                Únete a la{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Tribu
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Sé de los primeros en experimentar la red social fitness más innovadora. 
                Regístrate para acceso anticipado.
              </p>
            </div>

            {/* Waitlist form */}
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="tu@email.com"
                  className="bg-background/50 border-border/50 text-lg py-6"
                />
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8">
                  Unirme
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                No spam. Solo actualizaciones importantes sobre el lanzamiento.
              </p>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2,000+</div>
                <div className="text-sm text-muted-foreground">En lista de espera</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">4.9/5</div>
                <div className="text-sm text-muted-foreground">Beta testers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Gratis</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
