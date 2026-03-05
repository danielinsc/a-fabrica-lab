import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative px-6 pt-16 pb-12 max-w-3xl mx-auto">
      {/* Top color bars */}
      <div className="flex gap-3 mb-10">
        <div className="h-1 flex-1 rounded-full bg-[hsl(120,60%,50%)]" />
        <div className="h-1 flex-1 rounded-full bg-[hsl(120,60%,50%)]" />
        <div className="h-1 flex-1 rounded-full bg-muted" />
      </div>

      {/* Profile header */}
      <div className="flex items-start justify-between mb-12">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-border">
            <img
              src="/assets-work/Logo/F%C3%A1brica-Logo.png"
              alt="A Fábrica Lab"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground">A Fábrica Lab</h3>
            <p className="text-muted-foreground text-sm">Design de Posts | Branding | Motion</p>
            <div className="flex items-center gap-3 mt-1.5">
              <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 7c2.5 0 4.5.5 4.5 2.5S14.5 12 12 12s-4.5-.5-4.5-2.5S9.5 7 12 7z" />
                <path d="M7 14c0-1.5 2-2.5 5-2.5s5 1 5 2.5" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-[3.2rem] leading-[1.05] font-extrabold text-foreground tracking-tight mb-8"
      >
        criatividade
        <br />
        alinhada a
        <br />
        estratégia e
        <br />
        funcionalidade.
      </motion.h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-1 bg-foreground rounded-full px-3 py-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-[hsl(45,100%,60%)] text-[hsl(45,100%,60%)]" />
          ))}
        </div>
        <span className="text-sm font-semibold text-foreground">50+ clientes</span>
      </div>

      {/* Subtitle */}
      <p className="text-muted-foreground text-lg mb-10 max-w-md">
        Eu crio projetos que resolvem problemas,
        <br />
        inspiram ação e impulsionam o sucesso.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center gap-4 mb-12">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
        >
          Começar agora
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
        <a
          href="#work"
          className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-full font-semibold text-foreground text-base hover:bg-muted transition-colors"
        >
          Ver trabalhos
        </a>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>📍 Do Brasil para o mundo</span>
        <span className="font-medium text-foreground">afabrica.lab ↗</span>
      </div>
    </section>
  );
};

export default HeroSection;
