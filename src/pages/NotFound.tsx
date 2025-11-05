import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, Dumbbell, TrendingUp, Users } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const handleNavigateHome = () => {
    navigate("/");
  };

  const quickLinks = [
    { label: "Características", href: "/#features", icon: TrendingUp },
    { label: "Precios", href: "/#pricing", icon: Dumbbell },
    { label: "Nosotros", href: "/about", icon: Users },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="container px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          {/* Animated 404 */}
          <div className="mb-8">
            <div className="relative inline-block">
              <h1 className="text-9xl font-bold text-primary/20 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <Dumbbell className="h-24 w-24 text-primary animate-pulse" />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              ¡Ups! Página no encontrada
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Parece que te has salido del camino. Esta página no existe o fue removida.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Search className="h-4 w-4" />
              <code className="px-2 py-1 bg-secondary rounded text-xs">
                {location.pathname}
              </code>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              onClick={handleNavigateHome}
              className="text-lg group"
            >
              <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Volver al Inicio
            </Button>

            {/* Quick Links */}
            <div className="pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                O explora estas secciones:
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Button
                      key={link.label}
                      variant="outline"
                      onClick={() => {
                        if (link.href.startsWith("/#")) {
                          navigate("/");
                          setTimeout(() => {
                            const sectionId = link.href.substring(2);
                            const element = document.getElementById(sectionId);
                            element?.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        } else {
                          navigate(link.href);
                        }
                      }}
                      className="group"
                    >
                      <Icon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      {link.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 flex justify-center gap-8 opacity-30">
            <div className="h-16 w-1 bg-primary rounded-full animate-pulse [animation-delay:0s]" />
            <div className="h-20 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.2s]" />
            <div className="h-12 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.4s]" />
            <div className="h-20 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.6s]" />
            <div className="h-16 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.8s]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
