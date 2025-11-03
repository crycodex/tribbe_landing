import { Instagram, Twitter, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 border-t">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">
              Tribbe
            </div>
            <p className="text-sm text-muted-foreground">
              La red social fitness que transforma entrenamientos en experiencias compartidas.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Producto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/#features" className="hover:text-primary transition-colors">Características</a></li>
              <li><a href="/#pricing" className="hover:text-primary transition-colors">Precios</a></li>
              <li><Link to="/roadmap" className="hover:text-primary transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Compañía</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><a href="mailto:hello@tribbe.app" className="hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacidad</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Términos</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © 2025 Tribbe App. Desarrollado con 💪 por Cristhian Recalde
          </p>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a href="https://instagram.com/tribbe.app" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a href="https://twitter.com/tribbe_app" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a href="https://github.com/cristhianrecalde/tribbe" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a href="mailto:hello@tribbe.app">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
