import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "Gratis",
    description: "Perfecto para empezar tu viaje fitness",
    features: [
      "Hasta 5 amigos",
      "1 gimnasio",
      "Registro de entrenamientos",
      "Historial de 30 días",
      "Feed social básico",
      "Rachas semanales",
      "Biblioteca de ejercicios"
    ],
    cta: "Comenzar Gratis",
    popular: false
  },
  {
    name: "Premium",
    price: "$4.99",
    period: "/mes",
    description: "Para atletas serios y competidores",
    features: [
      "Amigos ilimitados",
      "Gimnasios ilimitados",
      "Historial completo",
      "Estadísticas avanzadas",
      "Rankings por gimnasio",
      "Competencias exclusivas",
      "Sin anuncios",
      "Badges especiales",
      "Soporte prioritario"
    ],
    cta: "Ir Premium",
    popular: true
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Elige tu{" "}
            <span className="text-primary">
              plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Empieza gratis y mejora cuando estés listo para más
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "border-primary shadow-lg"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Más Popular
                </div>
              )}

              <div className="space-y-6">
                {/* Plan header */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-primary mt-0.5">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full ${
                    plan.popular
                      ? ""
                      : "variant-outline"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Todos los precios en USD. Cancela cuando quieras sin compromiso.
        </p>
      </div>
    </section>
  );
};
