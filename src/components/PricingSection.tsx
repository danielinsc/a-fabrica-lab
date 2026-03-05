import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    id: "starter",
    label: "Starter",
    number: "01",
    name: "Starter",
    price: "R$ 997",
    unit: "/projeto",
    description: "Para marcas que estão começando e precisam de uma base sólida.",
    time: "1–2 semanas",
    features: [
      "Logotipo + variações",
      "Paleta de cores e tipografia",
      "3 artes para redes sociais",
      "Guia básico de identidade",
      "1 rodada de revisões",
      "Suporte por e-mail",
    ],
  },
  {
    id: "pro",
    label: "Pro",
    number: "02",
    name: "Pro",
    price: "R$ 2.497",
    unit: "/projeto",
    description: "Branding completo + presença visual nas redes sociais.",
    time: "2–3 semanas",
    features: [
      "Tudo do Starter",
      "Manual de identidade completo",
      "10 artes para redes sociais",
      "Templates editáveis (Canva/Figma)",
      "Motion logo (animação)",
      "3 rodadas de revisões",
      "Suporte prioritário",
    ],
  },
  {
    id: "premium",
    label: "Premium",
    number: "03",
    name: "Premium",
    price: "R$ 4.997",
    unit: "/projeto",
    description: "Solução completa: branding, posts, motion e web design.",
    time: "3–4 semanas",
    features: [
      "Tudo do Pro",
      "Landing page ou site vitrine",
      "20 artes para redes sociais",
      "Vídeos e reels animados",
      "Estratégia de conteúdo",
      "Revisões ilimitadas",
      "Suporte dedicado por 30 dias",
    ],
  },
];

const PricingSection = () => {
  const [activePlan, setActivePlan] = useState("starter");
  const plan = plans.find((p) => p.id === activePlan)!;

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-foreground mb-4">
          Planos flexíveis para
          <br />
          cada necessidade
        </h2>
        <p className="text-muted-foreground text-lg">
          Seja para começar do zero ou renovar sua identidade,
          <br />
          escolha o plano ideal para o seu projeto.
        </p>
      </div>

      {/* Tab selector */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-1 bg-muted rounded-full p-1.5">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlan(p.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activePlan === p.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Plan card */}
      <div className="bg-card rounded-3xl p-8 mb-4 border border-border">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-foreground">{plan.number}</span>
            <div className="flex gap-1.5">
              {plans.map((p, i) => (
                <div
                  key={p.id}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    activePlan === p.id ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <span>⏱</span>
            <span className="font-medium">{plan.time}</span>
          </div>
        </div>

        <div className="flex items-end justify-between mb-3">
          <h3 className="text-4xl font-extrabold text-foreground">{plan.name}</h3>
          <div className="text-right">
            <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
            <span className="text-muted-foreground text-sm">{plan.unit}</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-6">{plan.description}</p>

        <a
          href="#contact"
          className="inline-flex items-center gap-0 rounded-full overflow-hidden"
        >
          <span className="bg-primary text-primary-foreground px-8 py-4 font-semibold text-base">
            Começar agora
          </span>
          <span className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center border-l border-primary-foreground/20">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </a>
      </div>

      {/* Features list */}
      <div className="bg-muted/50 rounded-3xl p-8">
        <p className="font-semibold text-foreground mb-5">O que está incluído:</p>
        <div className="space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <span className="text-muted-foreground text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
