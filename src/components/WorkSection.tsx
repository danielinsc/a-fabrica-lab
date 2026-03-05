import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "doodle",
    name: "Doodle",
    description: "Identidade visual completa para cafeteria artesanal.",
    gradientFrom: "#4A1E00",
    gradientTo: "#1E0A00",
    glowColor: "rgba(222,110,0,0.45)",
    iconBg: "#ffffff",
    logo: "/assets-work/Doodle/Logo-Doodle.png",
    featured: "/assets-work/Doodle/Cavalete-Doodle.png",
    thumbnails: [
      "/assets-work/Doodle/Doodle.png",
      "/assets-work/Doodle/Mascote-Doodle.png",
      "/assets-work/Doodle/Card%C3%A1pio-Doodle%20(1).png",
    ],
  },
  {
    slug: "burger-blaze",
    name: "Burger Blaze",
    description: "Branding e cardápio para hamburgueria gourmet.",
    gradientFrom: "#1E0000",
    gradientTo: "#0A0000",
    glowColor: "rgba(180,20,0,0.4)",
    iconBg: "#1A0800",
    logo: "/assets-work/Burger-Blaze/Logo-BurguerBlaze.png",
    featured: "/assets-work/Burger-Blaze/Pessoa-BurguerBlaze.png",
    thumbnails: [
      "/assets-work/Burger-Blaze/BurgerBlaze.png",
      "/assets-work/Burger-Blaze/BurguerBlaze2.png",
      "/assets-work/Burger-Blaze/Camisa-BugerBlaze.png",
    ],
  },
  {
    slug: "wild-box",
    name: "Wild Box",
    description: "Sistema de identidade visual para marca de envios e logística.",
    gradientFrom: "#071428",
    gradientTo: "#030810",
    glowColor: "rgba(60,120,255,0.3)",
    iconBg: "#FF6200",
    logo: "/assets-work/Caixa/LogoCaixa.png",
    featured: "/assets-work/Caixa/Posters.png",
    thumbnails: [
      "/assets-work/Caixa/Caixa-1.png",
      "/assets-work/Caixa/Cart%C3%A3o-de-Visita-caixa.png",
      "/assets-work/Caixa/V%C3%A1rias-Caixas.png",
    ],
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-foreground mb-4">Nossos trabalhos</h2>
        <p className="text-muted-foreground text-lg">
          Confira alguns dos nossos projetos favoritos
          <br />e mais recentes.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${project.gradientFrom}, ${project.gradientTo})`,
            }}
          >
            {/* ── Unified card — images + info pill inside ── */}
            <div className="relative" style={{ height: 428 }}>

              {/* Radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 65% 15%, ${project.glowColor}, transparent 65%)`,
                }}
              />

              {/* Featured image — stops above the info pill */}
              <div
                className="absolute rounded-2xl overflow-hidden"
                style={{
                  top: 20,
                  left: 20,
                  right: 112,
                  bottom: 100,
                  boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={project.featured}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Thumbnail column — stops above the info pill */}
              <div
                className="absolute flex flex-col gap-2"
                style={{ top: 20, right: 16, bottom: 100, width: 84 }}
              >
                {project.thumbnails.map((img, idx) => (
                  <div
                    key={idx}
                    className="flex-1 rounded-xl overflow-hidden"
                    style={{
                      boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                      border: "1.5px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <img
                      src={img}
                      alt={`${project.name} ${idx + 2}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* ── Info pill — inset, floating inside card ── */}
              <div
                className="absolute left-4 right-4 bottom-4 bg-white rounded-2xl flex items-center justify-between px-5 py-4"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center"
                    style={{ background: project.iconBg }}
                  >
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="w-full h-full object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#111111] leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm mt-0.5 text-[rgba(0,0,0,0.45)]">
                      {project.description}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/projeto/${project.slug}`}
                  className="w-12 h-12 rounded-full bg-[#f2f2f2] flex items-center justify-center flex-shrink-0 hover:bg-[#e8e8e8] transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5 text-[#111111]" />
                </Link>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
