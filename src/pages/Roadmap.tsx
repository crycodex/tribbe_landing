import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const phases = [
  {
    phase: "Fase 1: MVP",
    period: "Q1 2025",
    status: "completed",
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
    phase: "Fase 2: Social Features",
    period: "Q2 2025",
    status: "completed",
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
    phase: "Fase 3: Gamificación",
    period: "Q3 2025",
    status: "in-progress",
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
    phase: "Fase 4: Gimnasios & Competencias",
    period: "Q4 2025",
    status: "planned",
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
    phase: "Fase 5: Optimización",
    period: "Q1 2026",
    status: "planned",
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
      return "bg-accent/10 text-accent border-accent/30";
    case "in-progress":
      return "bg-primary/10 text-primary border-primary/30";
    default:
      return "bg-muted/10 text-muted-foreground border-muted/30";
  }
};

const Roadmap = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Roadmap{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Público
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparencia total sobre nuestro desarrollo y próximas funcionalidades
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-8">
            {phases.map((phase, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-6">
                  {getStatusIcon(phase.status)}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{phase.phase}</h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(phase.status)}`}>
                        {getStatusLabel(phase.status)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.period}</p>
                  </div>
                </div>

                <ul className="space-y-3 ml-10">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-1 h-2 w-2 rounded-full ${
                        phase.status === "completed" ? "bg-accent" :
                        phase.status === "in-progress" ? "bg-primary" :
                        "bg-muted-foreground/30"
                      }`} />
                      <span className={
                        phase.status === "completed" ? "text-muted-foreground line-through" :
                        "text-foreground"
                      }>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              ¿Tienes sugerencias para el roadmap?
            </p>
            <a
              href="mailto:cristhian@tribbe.app"
              className="text-primary hover:underline font-medium"
            >
              Contáctanos →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmap;
