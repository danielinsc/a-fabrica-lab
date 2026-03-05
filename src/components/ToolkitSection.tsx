import { motion } from "framer-motion";

const tools = [
  {
    name: "Figma",
    description: "Design de interfaces e sistemas visuais",
    level: 95,
    iconBg: "bg-white border border-zinc-200",
    icon: (
      <svg viewBox="0 0 38 57" fill="none" className="w-7 h-7">
        <path d="M9.5 9.5A9.5 9.5 0 0 1 19 0h9.5v19H19A9.5 9.5 0 0 1 9.5 9.5z" fill="#FF7262"/>
        <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" fill="#F24E1E"/>
        <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38h9.5v9.5A9.5 9.5 0 0 1 19 57h0A9.5 9.5 0 0 1 9.5 47.5z" fill="#0ACF83"/>
        <path d="M19 19h9.5A9.5 9.5 0 0 1 28.5 38H19V19z" fill="#A259FF"/>
        <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE"/>
      </svg>
    ),
  },
  {
    name: "After Effects",
    description: "Motion design e animações profissionais",
    level: 88,
    iconBg: "bg-[#00005B]",
    icon: <span className="text-[#9999FF] font-black text-base leading-none">Ae</span>,
  },
  {
    name: "Adobe Illustrator",
    description: "Identidade visual e criação de vetores",
    level: 90,
    iconBg: "bg-[#2C0000]",
    icon: <span className="text-[#FF9A00] font-black text-base leading-none">Ai</span>,
  },
  {
    name: "Adobe Photoshop",
    description: "Retoque e composição de imagens",
    level: 80,
    iconBg: "bg-[#001E36]",
    icon: <span className="text-[#31A8FF] font-black text-base leading-none">Ps</span>,
  },
  {
    name: "Framer",
    description: "Prototipagem e publicação de sites",
    level: 75,
    iconBg: "bg-black",
    icon: (
      <svg viewBox="0 0 14 20" fill="white" className="w-5 h-5">
        <path d="M0 0h14v7H7L0 0zM0 7h7l7 7H0V7zM0 14h7l-7 6v-6z" />
      </svg>
    ),
  },
];

const ToolkitSection = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-foreground mb-4">
          Nossas ferramentas,
          <br />
          sua vantagem
        </h2>
        <p className="text-muted-foreground text-lg">
          Veja como nossa expertise nessas ferramentas
          <br />
          gera resultados superiores para você.
        </p>
      </div>

      <div className="space-y-3">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.08 }}
            className="bg-muted rounded-2xl px-5 py-4 flex items-center gap-4"
          >
            <div
              className={`w-14 h-14 rounded-xl ${tool.iconBg} flex items-center justify-center flex-shrink-0`}
            >
              {tool.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground">{tool.name}</h3>
              <p className="text-muted-foreground text-sm mt-0.5">{tool.description}</p>
            </div>
            <span className="bg-foreground text-background px-4 py-1.5 rounded-full text-sm font-semibold flex-shrink-0">
              {tool.level}%
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolkitSection;
