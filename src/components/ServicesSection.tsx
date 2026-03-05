import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Layers, Zap, Globe, Gem, BarChart2 } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Design de Posts",
    description:
      "Criamos conteúdos visuais que param o scroll, geram engajamento e posicionam sua marca com consistência nas redes sociais.",
  },
  {
    icon: Gem,
    title: "Identidade Visual",
    description:
      "Desenvolvemos marcas completas com personalidade — logotipo, paleta de cores, tipografia e sistema visual coerente em todos os pontos de contato.",
  },
  {
    icon: Zap,
    title: "Motion Design",
    description:
      "Transformamos conceitos estáticos em animações que comunicam, encantam e diferenciam sua marca em um mercado cada vez mais visual.",
  },
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Projetamos sites que convertem visitantes em clientes — com foco em experiência do usuário, estética refinada e performance.",
  },
  {
    icon: BarChart2,
    title: "Estratégia de Marca",
    description:
      "Ajudamos sua marca a se posicionar com clareza, definindo tom de voz, direção criativa e estratégia de conteúdo alinhados aos seus objetivos.",
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-foreground mb-4">Meus serviços</h2>
        <p className="text-muted-foreground text-lg">
          É assim que posso ajudar
          <br />a dar vida à sua visão:
        </p>
      </div>

      <div className="divide-y divide-border">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isOpen = openIndex === i;
          return (
            <div key={service.title} className="py-7">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                  <span className="text-xl font-bold text-foreground text-left">{service.title}</span>
                </div>
                {isOpen ? (
                  <Minus className="w-5 h-5 text-foreground flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-foreground flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-4 pl-10 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
