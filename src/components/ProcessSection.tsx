import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Briefing", description: "Conversamos sobre seus objetivos, público e desafios", side: "right" as const },
  { number: "02", title: "Conceito", description: "Desenvolvemos a direção criativa alinhada à sua marca", side: "left" as const },
  { number: "03", title: "Produção", description: "Criamos com precisão, cuidado e atenção a cada detalhe", side: "right" as const },
  { number: "04", title: "Entrega", description: "Arquivos organizados, revisados e prontos para usar", side: "left" as const },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 px-6 max-w-3xl mx-auto">
      {/* Header card */}
      <div className="bg-primary rounded-3xl p-10 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-start gap-6">
            <span className="text-7xl font-extrabold text-primary-foreground/20">4</span>
            <div>
              <h2 className="text-2xl font-bold text-primary-foreground mb-2">Etapas do processo</h2>
              <p className="text-primary-foreground/70">
                <span className="font-semibold text-primary-foreground">Um processo comprovado</span> que garante
                <br />
                colaboração fluida e
                <br />
                <span className="font-semibold text-primary-foreground">resultados excepcionais.</span>
              </p>
            </div>
          </div>
        </div>
        {/* Decorative dots */}
        <div className="absolute top-6 right-8 grid grid-cols-8 gap-1.5">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary-foreground/20" />
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-3xl p-8"
          >
            <div className="flex items-center justify-center gap-6">
              {step.side === "left" && (
                <h3 className="text-xl font-bold text-foreground flex-1 text-right">{step.title}</h3>
              )}
              {step.side === "right" && (
                <p className="text-muted-foreground text-sm flex-1 text-right">{step.description}</p>
              )}

              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-[3px] border-primary flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
                <span className="text-primary font-bold text-sm mt-1">{step.number}</span>
              </div>

              {step.side === "right" && (
                <h3 className="text-xl font-bold text-foreground flex-1">{step.title}</h3>
              )}
              {step.side === "left" && (
                <p className="text-muted-foreground text-sm flex-1">{step.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
