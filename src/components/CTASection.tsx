import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden h-[420px]">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&h=700&fit=crop"
          alt="O seu sucesso"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            O seu sucesso
            <br />
            é o nosso objetivo
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-sm">
            Já trabalhamos com 50+ marcas para criar identidades visuais que geram resultados reais.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-0 rounded-full overflow-hidden"
          >
            <span className="bg-primary text-primary-foreground px-8 py-4 font-semibold text-base">
              Começar agora
            </span>
            <span className="w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center border-l border-white/20">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
