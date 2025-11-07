import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import logo_light from "@/assets/icon/remove.png";
import logo_dark from "@/assets/icon/remove_dark.png";
import { gsap } from "gsap";
import type { CSSProperties } from "react";
import { Github } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  
  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLAnchorElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);

  const allNavItems = useMemo(() => [
    { 
      label: "Inicio", 
      href: "/",
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    { 
      label: "Características", 
      href: "/#features",
      rotation: 8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    { 
      label: "Precios", 
      href: "/#pricing",
      rotation: -8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    { 
      label: "Roadmap", 
      href: "/roadmap",
      rotation: 8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    { 
      label: "Nosotros", 
      href: "/about",
      rotation: -8,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    },
  ], []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  const handleNavigation = (href: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2);
      
      if (location.pathname === "/") {
        scrollToSection(sectionId);
      } else {
        navigate(`/#${sectionId}`);
      }
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };
  
  const handleToggle = () => {
    const nextState = !isOpen;
    if (nextState) setShowOverlay(true);
    setIsOpen(nextState);
  };

  // Efecto para manejar el scroll cuando se navega a la página principal con hash
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const sectionId = location.hash.substring(1);
      
      if (!scrollToSection(sectionId)) {
        const timeoutId = setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
        
        return () => clearTimeout(timeoutId);
      }
    }
  }, [location.pathname, location.hash]);

  // Animación del menú con GSAP
  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);
    if (!overlay || !bubbles.length) return;

    if (isOpen) {
      gsap.set(overlay, { display: 'flex', opacity: 0 });
      gsap.killTweensOf([...bubbles, ...labels, overlay]);
      gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%' });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      // Animar el fondo con blur
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      bubbles.forEach((bubble, i) => {
        const delay = i * 0.12 + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });
        tl.to(bubble, {
          scale: 1,
          duration: 0.5,
          ease: 'back.out(1.5)'
        });
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.5,
              ease: 'power3.out'
            },
            '-=0.45'
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels, overlay]);
      
      // Animar el fondo desapareciendo
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      });
      
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power3.in'
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setShowOverlay(false);
        }
      });
    }
  }, [isOpen, showOverlay]);

  // Manejar rotación en resize
  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;
        bubbles.forEach((bubble, i) => {
          const item = allNavItems[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, allNavItems]);

  const menuBg = theme === 'light' ? '#ffffff' : '#1f2937';
  const menuContentColor = theme === 'light' ? '#111111' : '#f3f4f6';
  const ariaPressed = isOpen;
  const ariaHidden = !isOpen;

  return (
    <>
      <style>{`
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):nth-last-child(2) {
          margin-left: calc(100% / 6);
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):last-child {
          margin-left: calc(100% / 3);
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-link {
            transform: rotate(var(--item-rot));
          }
          .bubble-menu-items .pill-link:hover {
            transform: rotate(var(--item-rot)) scale(1.06);
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
          .bubble-menu-items .pill-link:active {
            transform: rotate(var(--item-rot)) scale(.94);
          }
        }
        @media (max-width: 899px) {
          .bubble-menu-items {
            padding-top: 120px;
            align-items: flex-start;
          }
          .bubble-menu-items .pill-list {
            row-gap: 16px;
          }
          .bubble-menu-items .pill-list .pill-col {
            flex: 0 0 100% !important;
            margin-left: 0 !important;
            overflow: visible;
          }
          .bubble-menu-items .pill-link {
            font-size: clamp(1.2rem, 3vw, 4rem);
            padding: clamp(1rem, 2vw, 2rem) 0;
            min-height: 80px !important;
          }
          .bubble-menu-items .pill-link:hover {
            transform: scale(1.06);
            background: var(--hover-bg);
            color: var(--hover-color);
          }
          .bubble-menu-items .pill-link:active {
            transform: scale(.94);
          }
        }
      `}</style>

      <nav className="bubble-menu fixed left-0 right-0 top-8 flex items-center justify-between gap-4 px-8 pointer-events-none z-[1001]">
        {/* Logo Bubble */}
        <Link 
          to="/"
          className="bubble logo-bubble inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-[0_4px_16px_rgba(0,0,0,0.12)] pointer-events-auto h-12 md:h-14 px-4 md:px-8 gap-2 will-change-transform"
          style={{ background: menuBg }}
        >
          <img 
            src={theme === 'light' ? logo_light : logo_dark} 
            alt="Tribbe" 
            className="h-8 md:h-10 object-contain"
          />
        </Link>

        {/* Right side controls */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Theme Toggle Bubble */}
          <button
            type="button"
            onClick={toggleTheme}
            className="bubble inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-[0_4px_16px_rgba(0,0,0,0.12)] w-12 h-12 md:w-14 md:h-14 border-0 cursor-pointer p-0 will-change-transform hover:scale-110 transition-transform"
            style={{ background: menuBg }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          {/* github bubble */}
          <button
            type="button"
            className="bubble inline-flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-[0_4px_16px_rgba(0,0,0,0.12)] w-12 h-12 md:w-14 md:h-14 border-0 cursor-pointer p-0 will-change-transform hover:scale-110 transition-transform"
            style={{ background: menuBg }}
            aria-label="GitHub"
            onClick={() => window.open('https://github.com/crycodex/tribbe_landing', '_blank')}
          >
            <Github className="h-5 w-5" />
          </button>

          {/* Menu Toggle Bubble */}
          <button
            type="button"
            className={`bubble toggle-bubble menu-btn ${isOpen ? 'open' : ''} inline-flex flex-col items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-[0_4px_16px_rgba(0,0,0,0.12)] w-12 h-12 md:w-14 md:h-14 border-0 cursor-pointer p-0 will-change-transform hover:scale-110 transition-transform`}
            onClick={handleToggle}
            aria-label="Toggle menu"
            {...(ariaPressed ? { 'aria-pressed': 'true' } : { 'aria-pressed': 'false' })}
            style={{ background: menuBg }}
          >
            <span
              className="menu-line block mx-auto rounded-[2px]"
              style={{
                width: 26,
                height: 2,
                background: menuContentColor,
                transform: isOpen ? 'translateY(4px) rotate(45deg)' : 'none'
              }}
            />
            <span
              className="menu-line short block mx-auto rounded-[2px]"
              style={{
                marginTop: '6px',
                width: 26,
                height: 2,
                background: menuContentColor,
                transform: isOpen ? 'translateY(-4px) rotate(-45deg)' : 'none'
              }}
            />
          </button>
        </div>
      </nav>

      {/* Bubble Menu Overlay */}
      {showOverlay && (
        <div
          ref={overlayRef}
          className="bubble-menu-items fixed inset-0 flex items-center justify-center pointer-events-none z-[1000] backdrop-blur-xl bg-background/30"
          {...(ariaHidden ? { 'aria-hidden': 'true' } : { 'aria-hidden': 'false' })}
        >
          <ul
            className="pill-list list-none m-0 px-6 w-full max-w-[1600px] mx-auto flex flex-wrap gap-x-0 gap-y-1 pointer-events-auto"
            role="menu"
            aria-label="Menu links"
          >
            {allNavItems.map((item, idx) => (
              <li
                key={idx}
                role="none"
                className="pill-col flex justify-center items-stretch [flex:0_0_calc(100%/3)] box-border"
              >
                <a
                  role="menuitem"
                  href={item.href}
                  aria-label={item.label}
                  onClick={(e) => handleNavigation(item.href, e)}
                  className="pill-link w-full rounded-[999px] no-underline bg-white dark:bg-gray-800 text-inherit shadow-[0_4px_14px_rgba(0,0,0,0.10)] flex items-center justify-center relative transition-[background,color] duration-300 ease-in-out box-border whitespace-nowrap overflow-hidden"
                  style={
                    {
                      ['--item-rot']: `${item.rotation ?? 0}deg`,
                      ['--pill-bg']: menuBg,
                      ['--pill-color']: menuContentColor,
                      ['--hover-bg']: item.hoverStyles?.bgColor || '#f3f4f6',
                      ['--hover-color']: item.hoverStyles?.textColor || menuContentColor,
                      background: 'var(--pill-bg)',
                      color: 'var(--pill-color)',
                      minHeight: 'var(--pill-min-h, 160px)',
                      padding: 'clamp(1.5rem, 3vw, 8rem) 0',
                      fontSize: 'clamp(1.5rem, 4vw, 4rem)',
                      fontWeight: 400,
                      lineHeight: 0,
                      willChange: 'transform',
                      height: 10
                    } as CSSProperties
                  }
                  ref={el => {
                    if (el) bubblesRef.current[idx] = el;
                  }}
                >
                  <span
                    className="pill-label inline-block"
                    style={{
                      willChange: 'transform, opacity',
                      height: '1.2em',
                      lineHeight: 1.2
                    }}
                    ref={el => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
