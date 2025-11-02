import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Tribbe es gratis?",
    answer: "Sí! Tribbe tiene un plan gratuito completo que incluye registro de entrenamientos, feed social, rachas semanales y hasta 5 amigos. El plan Premium ($4.99/mes) desbloquea funciones avanzadas como amigos ilimitados, múltiples gimnasios y estadísticas avanzadas."
  },
  {
    question: "¿Cómo funciona el sistema de rachas?",
    answer: "Las rachas funcionan de lunes a domingo. Cada día que completas un entrenamiento, marcas ese día en tu racha semanal. Tu personaje evoluciona según los días completados, y puedes compartir tu progreso con amigos."
  },
  {
    question: "¿Puedo usar Tribbe sin internet?",
    answer: "Actualmente Tribbe requiere conexión a internet para funcionar. Estamos trabajando en un modo offline que se sincronizará automáticamente cuando recuperes la conexión (Fase 4 del roadmap)."
  },
  {
    question: "¿Cómo se verifican los gimnasios?",
    answer: "Usamos un sistema dual de códigos QR únicos + geolocalización para garantizar que estás realmente en el gimnasio. Esto asegura competencias justas y estadísticas verificables."
  },
  {
    question: "¿Qué pasa si alguien publica estadísticas falsas?",
    answer: "Tenemos un sistema de reportes comunitario, validación automática basada en peso corporal y límites razonables por ejercicio. Los administradores revisan casos reportados manualmente."
  },
  {
    question: "¿Puedo compartir entrenamientos con fotos?",
    answer: "¡Absolutamente! Puedes capturar fotos de tus entrenamientos estilo Instagram (ratio 4:5), añadir caption y compartir en el feed social. Las fotos son opcionales."
  },
  {
    question: "¿Cómo funcionan las competencias por gimnasio?",
    answer: "Una vez registrado en un gimnasio (mediante QR), automáticamente entras en el ranking de ese gym. Compites con otros miembros en diferentes categorías según tu nivel de experiencia."
  },
  {
    question: "¿Los mensajes son permanentes?",
    answer: "No, los mensajes entre usuarios expiran automáticamente en 7 días. Esto mantiene las conversaciones frescas y evita saturación. Puedes reaccionar con emojis, editar y eliminar tus mensajes."
  },
  {
    question: "¿Está disponible en iOS y Android?",
    answer: "Sí! Tribbe está desarrollada con Flutter, por lo que está disponible tanto en iOS como Android de forma nativa con la misma experiencia."
  },
  {
    question: "¿Puedo cancelar Premium en cualquier momento?",
    answer: "Sí, puedes cancelar tu suscripción Premium cuando quieras sin penalización. Seguirás teniendo acceso hasta el final de tu período de pago."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Preguntas{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas saber sobre Tribbe
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 hover:bg-card/80 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
