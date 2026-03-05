import { CheckCheck } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      {/* 5+ years card */}
      <div className="bg-card rounded-3xl p-10 mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-6xl font-extrabold text-foreground">8</span>
          <span className="text-3xl font-extrabold text-primary">+</span>
        </div>
        <p className="text-muted-foreground mt-2">
          Anos de experiência
          <br />
          <span className="font-semibold text-foreground">em design e identidade de marca</span>
        </p>
      </div>

      {/* Two cards row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Photo card */}
        <div className="rounded-3xl overflow-hidden h-64">
          <img
            src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&h=600&fit=crop"
            alt="Trabalhando"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 95% card */}
        <div className="bg-primary rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden">
          {/* Decorative dots */}
          <div className="absolute top-6 left-6 right-6 grid grid-cols-12 gap-1">
            {[...Array(60)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-foreground/20" />
            ))}
          </div>

          <div className="relative z-10">
            <div className="absolute -top-8 -left-2">
              <div className="w-10 h-10 rounded-full bg-foreground/30 flex items-center justify-center">
                <CheckCheck className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <span className="text-5xl font-extrabold text-primary-foreground">95</span>
            <span className="text-2xl font-extrabold text-primary-foreground">%</span>
            <p className="text-primary-foreground/70 text-sm mt-2">
              Taxa de satisfação
              <br />
              <span className="font-semibold text-primary-foreground">construída em confiança e resultados.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
