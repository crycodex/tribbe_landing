import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircleQuestion } from "lucide-react";

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <MessageCircleQuestion className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Centro de ayuda</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Preguntas{" "}
            <span className="text-primary">
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
                className="group bg-card/70 backdrop-blur-md border-2 border-border/50 rounded-xl px-6 hover:bg-card/90 hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <div className="flex items-start gap-3 w-full">
                    <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0 mt-0.5">
                      <HelpCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-11 pr-4 pb-5 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12 p-8 rounded-2xl bg-primary/5 backdrop-blur-sm border border-primary/20 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">¿Tienes más preguntas?</h3>
          <p className="text-muted-foreground mb-4">
            Estamos aquí para ayudarte. Contáctanos y responderemos todas tus dudas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href="mailto:support@tribbe.app" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              <MessageCircleQuestion className="h-5 w-5" />
              Enviar mensaje
            </a>
            <span className="text-sm text-muted-foreground">
              Respuesta en menos de 24 horas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
