import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Clock, Mail, Calendar, Target } from "lucide-react";

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
      
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
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
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex p-2 rounded-full bg-primary/10 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
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
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/50 to-gray-300 dark:to-gray-600 h-full"></div>
              
              {/* Phase Cards */}
              <div className="space-y-24">
                {phases.map((phase, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <div key={index} className="relative">
                      {/* Central milestone marker */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className={`w-16 h-16 rounded-full border-4 border-background shadow-lg flex items-center justify-center ${
                          phase.status === "completed" ? "bg-green-500" :
                          phase.status === "in-progress" ? "bg-primary animate-pulse" :
                          "bg-gray-300 dark:bg-gray-600"
                        }`}>
                          {getStatusIcon(phase.status)}
                        </div>
                      </div>

                      {/* Phase card - alternating sides */}
                      <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-full max-w-md ${isEven ? 'pr-12' : 'pl-12'}`}>
                          <Card className={`p-6 shadow-xl ${
                            phase.status === "in-progress" ? "ring-2 ring-primary ring-opacity-50" : ""
                          }`}>
                            <div className="space-y-4">
                              {/* Header */}
                              <div className="flex items-center gap-3">
                                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(phase.status)}`}>
                                  {getStatusLabel(phase.status)}
                                </span>
                                <span className="text-sm text-muted-foreground flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {phase.period}
                                </span>
                              </div>
                              
                              <div>
                                <h3 className="font-bold text-xl mb-2">{phase.phase}</h3>
                                <p className="text-muted-foreground mb-4">{phase.description}</p>
                              </div>
                              
                              {/* Progress indicator */}
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Target className="h-4 w-4" />
                                {phase.items.length} funcionalidades
                              </div>
                              
                              {/* Key features preview */}
                              <div className="space-y-2">
                                <h4 className="text-sm font-medium">Funcionalidades principales:</h4>
                                <div className="grid gap-1">
                                  {phase.items.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm">
                                      <div className={`mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                                        phase.status === "completed" ? "bg-green-500" :
                                        phase.status === "in-progress" ? "bg-primary" :
                                        "bg-gray-300 dark:bg-gray-600"
                                      }`} />
                                      <span className={
                                        phase.status === "completed" ? "text-muted-foreground line-through" :
                                        "text-foreground"
                                      }>
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                  {phase.items.length > 3 && (
                                    <div className="text-sm text-muted-foreground ml-4">
                                      +{phase.items.length - 3} funcionalidades más
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {/* Expandable full list */}
                              <details className="group">
                                <summary className="cursor-pointer text-sm text-primary hover:underline font-medium">
                                  Ver todas las funcionalidades
                                </summary>
                                <div className="mt-3 space-y-1 max-h-40 overflow-y-auto border-t pt-3">
                                  {phase.items.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm">
                                      <div className={`mt-2 h-1 w-1 rounded-full flex-shrink-0 ${
                                        phase.status === "completed" ? "bg-green-500" :
                                        phase.status === "in-progress" ? "bg-primary" :
                                        "bg-gray-300 dark:bg-gray-600"
                                      }`} />
                                      <span className={
                                        phase.status === "completed" ? "text-muted-foreground line-through" :
                                        "text-foreground"
                                      }>
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
          <div className="text-center mt-16 space-y-6">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-2">¿Tienes sugerencias?</h3>
              <p className="text-muted-foreground mb-4">
                Tu feedback es valioso para nosotros. Comparte tus ideas para mejorar Tribbe.
              </p>
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Contactar Equipo
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmap;
