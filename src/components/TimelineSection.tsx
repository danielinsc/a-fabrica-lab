import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018];

const milestones: Record<number, { role: string; company: string; period: string }[]> = {
  2024: [
    { role: "Designer Sênior & Freelance", company: "A Fábrica Lab", period: "2024 - Atual" },
  ],
  2023: [
    { role: "Primeiro trabalho como Designer Junior", company: "Mercado formal", period: "2023" },
  ],
  2022: [
    { role: "Redesign da logo da agência principal", company: "Estácio de Madureira", period: "2022" },
  ],
  2021: [
    { role: "Segundo estágio", company: "Experiência profissional", period: "2021" },
  ],
  2020: [
    { role: "20 cursos online", company: "Formação intensiva", period: "2020" },
    { role: "1° estágio", company: "Primeira experiência profissional", period: "2020" },
  ],
  2019: [
    { role: "Primeiros projetos", company: "Clientes iniciais", period: "2019" },
  ],
  2018: [
    { role: "Início da jornada criativa", company: "Curso de Design", period: "2018" },
  ],
};

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2024);
  const experiences = milestones[activeYear] || [];

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      {/* Year selector */}
      <div className="flex items-end gap-0 mb-10 overflow-x-auto">
        {years.map((year, i) => {
          const isActive = year === activeYear;
          return (
            <div key={year} className="flex items-center">
              <button
                onClick={() => setActiveYear(year)}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    isActive ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
                <span
                  className={`mt-2 font-bold transition-all ${
                    isActive
                      ? "text-foreground text-6xl leading-none"
                      : "text-muted-foreground/50 text-base"
                  }`}
                >
                  {year}
                </span>
              </button>
              {i < years.length - 1 && (
                <div className="w-10 h-0.5 bg-muted-foreground/20 mx-1 self-start mt-1.5" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mb-10">
        <h3 className="text-2xl font-bold text-foreground mb-3">Nossa jornada criativa</h3>
        <p className="text-muted-foreground">
          Explore os marcos e conquistas que
          <br />
          moldaram o nosso estúdio, ano a ano.
        </p>
      </div>

      {/* Experience list */}
      <div className="divide-y divide-border">
        {experiences.map((exp) => (
          <div key={exp.role} className="py-6 grid grid-cols-3 items-center">
            <span className="font-bold text-foreground">{exp.role}</span>
            <span className="text-muted-foreground text-center">{exp.company}</span>
            <span className="text-muted-foreground text-right">{exp.period}</span>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 flex items-center gap-2">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Fale conosco
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default TimelineSection;
