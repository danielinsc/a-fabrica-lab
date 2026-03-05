import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Quais serviços vocês oferecem?",
    answer:
      "Somos especializados em design de posts para redes sociais, identidade visual (branding), motion design, web design e estratégia de marca. Atendemos tanto marcas individuais quanto empresas.",
  },
  {
    question: "Quanto tempo leva para concluir um projeto?",
    answer:
      "Depende do plano escolhido. O Starter leva de 1 a 2 semanas, o Pro de 2 a 3 semanas e o Premium de 3 a 4 semanas. Projetos urgentes podem ser negociados com adicional.",
  },
  {
    question: "Posso solicitar revisões?",
    answer:
      "Sim! O número de rodadas de revisão varia conforme o plano. O Starter inclui 1 rodada, o Pro 3 rodadas e o Premium revisões ilimitadas. Nossa prioridade é que você fique 100% satisfeito.",
  },
  {
    question: "Quais ferramentas vocês utilizam?",
    answer:
      "Trabalhamos com Figma, Adobe Illustrator, Photoshop, After Effects e Framer. Entregamos os arquivos em formatos editáveis (.fig, .ai, .psd) conforme sua necessidade.",
  },
  {
    question: "Preciso de um site para contratar vocês?",
    answer:
      "Não! Você pode nos contatar diretamente por e-mail ou WhatsApp. Fazemos uma reunião de briefing, entendemos seus objetivos e começamos o projeto.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-foreground mb-4">FAQ</h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={faq.question}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-foreground" />
                  ) : (
                    <Plus className="w-4 h-4 text-foreground" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground px-6 pb-6 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <p className="text-muted-foreground text-sm mb-2">Ainda tem alguma dúvida?</p>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-primary transition-colors"
        >
          Fale diretamente conosco
          <span className="text-primary">↗</span>
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
