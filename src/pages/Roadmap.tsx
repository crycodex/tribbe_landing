import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock, Mail, Calendar, Target, Sparkles, Zap, TrendingUp } from "lucide-react";
import Squares from "@/components/Squares";

const phases = [
  {
    phase: "MVP - Fundación",
    period: "Q1 2025",
    status: "completed",
    description: "Base sólida de la aplicación con funcionalidades esenciales",
    items: [
      "Setup del proyecto Flutter con Firebase",
      "Autenticación completa (Email/Password + Google)",
      "Onboarding interactivo con stepper",
      "Perfil de usuario completo",
      "Biblioteca de 50+ ejercicios organizados",
      "Sistema de registro de entrenamientos",
      "Timer con pausa/reanudar",
      "Historial de entrenamientos",
      "UI/UX profesional Material Design 3"
    ]
  },
  {
    phase: "Social Features",
    period: "Q2 2025",
    status: "completed",
    description: "Transformando entrenamientos en experiencias sociales",
    items: [
      "Sistema de seguidores/siguiendo en tiempo real",
      "Feed estilo Instagram con fotos",
      "Posts con caption y likes",
      "Sistema de comentarios",
      "Mensajería temporal (7 días)",
      "Reacciones con emojis",
      "Búsqueda de usuarios",
      "Perfiles públicos con grid"
    ]
  },
  {
    phase: "Gamificación",
    period: "Q3 2025",
    status: "in-progress",
    description: "Motivación a través de juegos y recompensas",
    items: [
      "Sistema de rachas semanales (Lun-Dom)",
      "Personaje dinámico que evoluciona",
      "Compartir racha y personaje",
      "Tarjeta de perfil compartible",
      "Animaciones de celebración",
      "Sistema de logros básicos"
    ]
  },
  {
    phase: "Gimnasios & Competencias",
    period: "Q4 2025",
    status: "planned",
    description: "Conectando comunidades físicas con competencias digitales",
    items: [
      "Sistema de gimnasios con códigos QR",
      "Verificación por geolocalización",
      "Rankings por gimnasio en tiempo real",
      "Competencias temporales",
      "Subgrupos por nivel de experiencia",
      "Estadísticas comparativas",
      "Badges y premios exclusivos"
    ]
  },
  {
    phase: "Optimización & Premium",
    period: "Q1 2026",
    status: "planned",
    description: "Funcionalidades avanzadas y modelo de negocio sostenible",
    items: [
      "Modo offline con sincronización",
      "Estadísticas avanzadas con gráficos",
      "Integración Apple Health / Google Fit",
      "Sistema premium (Freemium)",
      "Analytics avanzados",
      "Widget iOS para rachas",
      "Notificaciones push personalizadas"
    ]
  }
];

const stats = [
  { label: "Fases Completadas", value: "2/5", icon: CheckCircle2 },
  { label: "En Desarrollo", value: "1", icon: Clock },
  { label: "Funcionalidades", value: "40+", icon: Target }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="h-6 w-6 text-accent" />;
    case "in-progress":
      return <Clock className="h-6 w-6 text-primary" />;
    default:
      return <Circle className="h-6 w-6 text-muted-foreground" />;
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "completed":
      return "Completado";
    case "in-progress":
      return "En Desarrollo";
    default:
      return "Planeado";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800";
    case "in-progress":
      return "bg-primary/10 text-primary border-primary/30";
    default:
      return "bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800/50 dark:text-gray-400 dark:border-gray-700";
  }
};

const Roadmap = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="relative pt-24 pb-16 overflow-hidden">
        {/* Squares Background */}
        <div className="absolute inset-0 w-full h-full opacity-40">
          <Squares 
            speed={0.5} 
            squareSize={40}
            direction='diagonal'
            borderColor='hsl(var(--primary))'
            hoverFillColor='hsl(var(--primary) / 0.2)'
          />
        </div>

        <div className="container px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Desarrollo transparente</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold">
              Roadmap{" "}
              <span className="text-primary">
                Público
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparencia total sobre nuestro desarrollo y próximas funcionalidades
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group">
                    <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/40">
                      <div className="inline-flex p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 mb-3 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Roadmap Path */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Path */}
            <div className="relative">
              {/* Central path line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gradient-to-b from-primary via-primary/50 to-gray-300 dark:to-gray-600 h-full rounded-full shadow-sm"></div>
              
              {/* Phase Cards */}
              <div className="space-y-24">
                {phases.map((phase, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Central milestone marker */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className={`relative w-20 h-20 rounded-full border-4 border-background shadow-2xl flex items-center justify-center transition-all duration-300 ${
                          phase.status === "completed" ? "bg-gradient-to-br from-green-400 to-green-600" :
                          phase.status === "in-progress" ? "bg-gradient-to-br from-primary to-primary/80 animate-pulse" :
                          "bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"
                        }`}>
                          {phase.status === "in-progress" && (
                            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                          )}
                          <div className="relative z-10 bg-white dark:bg-gray-900 rounded-full p-2">
                            {getStatusIcon(phase.status)}
                          </div>
                        </div>
                      </div>

                      {/* Phase card - alternating sides */}
                      <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-full max-w-md ${isEven ? 'pr-12' : 'pl-12'}`}>
                          <Card className={`group p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 ${
                            phase.status === "in-progress" 
                              ? "ring-2 ring-primary ring-opacity-50 border-primary bg-gradient-to-br from-background via-background to-primary/5" 
                              : phase.status === "completed"
                              ? "border-green-200 dark:border-green-800 hover:border-green-300 dark:hover:border-green-700"
                              : "hover:border-primary/40"
                          }`}>
                            <div className="space-y-4">
                              {/* Header */}
                              <div className="flex items-center gap-3 flex-wrap">
                                <span className={`px-4 py-1.5 text-xs font-semibold rounded-full border-2 ${getStatusColor(phase.status)}`}>
                                  {getStatusLabel(phase.status)}
                                </span>
                                <span className="text-sm text-muted-foreground flex items-center gap-1.5 font-medium">
                                  <Calendar className="h-4 w-4" />
                                  {phase.period}
                                </span>
                              </div>
                              
                              <div>
                                <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">{phase.phase}</h3>
                                <p className="text-muted-foreground text-base leading-relaxed">{phase.description}</p>
                              </div>
                              
                              {/* Progress indicator */}
                              <div className="flex items-center gap-2 text-sm font-medium px-3 py-2 bg-primary/5 rounded-lg border border-primary/10">
                                <Target className="h-4 w-4 text-primary" />
                                <span className="text-primary">{phase.items.length} funcionalidades</span>
                              </div>
                              
                              {/* Key features preview */}
                              <div className="space-y-3 pt-2">
                                <h4 className="text-sm font-semibold flex items-center gap-2">
                                  <Sparkles className="h-4 w-4 text-primary" />
                                  Funcionalidades principales:
                                </h4>
                                <div className="grid gap-2.5">
                                  {phase.items.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 group/item">
                                      <div className={`mt-1.5 h-2 w-2 rounded-full flex-shrink-0 ${
                                        phase.status === "completed" ? "bg-green-500" :
                                        phase.status === "in-progress" ? "bg-primary" :
                                        "bg-gray-400 dark:bg-gray-500"
                                      }`} />
                                      <span className={`text-sm leading-relaxed ${
                                        phase.status === "completed" ? "text-muted-foreground line-through" :
                                        "text-foreground group-hover/item:text-primary transition-colors"
                                      }`}>
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                  {phase.items.length > 3 && (
                                    <div className="text-sm text-muted-foreground ml-5 italic">
                                      +{phase.items.length - 3} funcionalidades más
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {/* Expandable full list */}
                              <details className="group/details mt-2">
                                <summary className="cursor-pointer text-sm text-primary hover:text-primary/80 font-semibold flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-primary/5 transition-all">
                                  <Zap className="h-4 w-4" />
                                  Ver todas las funcionalidades
                                </summary>
                                <div className="mt-4 space-y-2 max-h-60 overflow-y-auto border-t border-primary/10 pt-4 pr-2 custom-scrollbar">
                                  {phase.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 group/item">
                                      <div className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                                        phase.status === "completed" ? "bg-green-500" :
                                        phase.status === "in-progress" ? "bg-primary" :
                                        "bg-gray-400 dark:bg-gray-500"
                                      }`} />
                                      <span className={`text-sm leading-relaxed ${
                                        phase.status === "completed" ? "text-muted-foreground line-through" :
                                        "text-foreground group-hover/item:text-primary transition-colors"
                                      }`}>
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </details>
                            </div>
                          </Card>
                        </div>
                      </div>

                      {/* Connecting line to next phase */}
                      {index < phases.length - 1 && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-20">
            <Card className="max-w-2xl mx-auto p-8 md:p-12 text-center border-2 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5 shadow-xl">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-3">¿Tienes sugerencias?</h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-md mx-auto">
                Tu feedback es valioso para nosotros. Comparte tus ideas para mejorar Tribbe.
              </p>
              <Button size="lg" className="text-base font-semibold px-8 shadow-lg hover:shadow-xl transition-all">
                <Mail className="mr-2 h-5 w-5" />
                Contactar Equipo
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Respuesta en menos de 24 horas
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmap;
