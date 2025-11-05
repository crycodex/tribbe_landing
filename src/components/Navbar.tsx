import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import logo_light from "@/assets/icon/remove.png";
import logo_dark from "@/assets/icon/remove_dark.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Características", href: "/#features" },
    { label: "Precios", href: "/#pricing" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Nosotros", href: "/about" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2); // Remover "/#"
      
      // Si estamos en la página principal, hacer scroll inmediatamente
      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        // Si estamos en otra página, navegar con el hash
        navigate(`/#${sectionId}`);
      }
    }
    setIsOpen(false);
  };

  // Efecto para manejar el scroll cuando se navega a la página principal con hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.substring(1);
      
      // Intentar hacer scroll inmediatamente
      if (!scrollToSection(sectionId)) {
        // Si no funciona, intentar después de un breve delay
        const timeoutId = setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
        
        return () => clearTimeout(timeoutId);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <div className="bg-background/95 backdrop-blur-md border rounded-full shadow-lg">
        <div className="flex items-center justify-between h-14 px-6">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary">
            <img 
            src={theme === 'light' ? logo_light : logo_dark} alt="Tribbe" className="h-10 " />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              item.href.startsWith("/#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.href);
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-1 rounded-full hover:bg-secondary/50"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors px-3 py-1 rounded-full hover:bg-secondary/50 ${
                    location.pathname === item.href
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>

            <Button size="sm" className="hidden md:flex rounded-full">
              Descargar
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-md rounded-b-2xl">
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                item.href.startsWith("/#") ? (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-secondary/50"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-colors px-3 py-2 rounded-lg hover:bg-secondary/50 ${
                      location.pathname === item.href
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Button size="sm" className="w-full mt-2 rounded-full">
                Descargar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
