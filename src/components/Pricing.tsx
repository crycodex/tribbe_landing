import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Crown, Sparkles } from "lucide-react";
import DotGrid from "@/components/DotGrid";

const plans = [
  {
    name: "Free",
    price: "Gratis",
    description: "Perfecto para empezar tu viaje fitness",
    features: [
      "1 gimnasio",
      "Registro de entrenamientos",
      "Historial de 30 días",
      "Feed social básico",
      "Rachas semanales",
      "Biblioteca de ejercicios",
      "Perfil personalizado",
      "Anuncios"

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
      "Todas las funcionalidades de Free",
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
    popular: true
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <DotGrid
          dotSize={3}
          gap={20}
          baseColor="hsl(var(--primary))"
          activeColor="hsl(var(--primary))"
          proximity={150}
          shockRadius={300}
          shockStrength={8}
          resistance={800}
          returnDuration={2}
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Planes simples y transparentes</span>
          </div>
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

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-2 border-yellow-400 shadow-xl bg-gradient-to-br from-background via-background to-yellow-400/5"
                  : "border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400  text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Crown className="h-4 w-4" />
                  Más Popular
                </div>
              )}

              <div className="space-y-6">
                {/* Plan header */}
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                    {plan.popular && <Crown className="h-6 w-6 text-primary" />}
                    <h3 className="text-3xl font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center md:text-left py-4">
                  <div className="flex items-baseline gap-1 justify-center md:justify-start">
                    <span className="text-6xl font-bold bg-primary bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-lg text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 py-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className={`p-1.5 rounded-full mt-0.5 transition-all ${
                        plan.popular 
                          ? "bg-primary group-hover:scale-110" 
                          : "bg-primary/80 group-hover:bg-primary group-hover:scale-110"
                      }`}>
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {!plan.popular && (
                  <div className="pt-4">
                    <Button
                      size="lg"
                      className="w-full text-base font-semibold transition-all bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-2 backdrop-blur-lg">
          <p className="text-sm text-muted-foreground ">
            Todos los precios en USD. Cancela cuando quieras sin compromiso.
          </p>
          <p className="text-xs text-muted-foreground/60">
            🔒 Pago seguro • 💳 Sin cargos ocultos • ✨ Actualiza o cancela en cualquier momento
          </p>
        </div>
      </div>
    </section>
  );
};
