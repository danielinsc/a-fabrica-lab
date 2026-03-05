import { Star, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Juliana Abrahão Guimarães de Mello",
    role: "Local Guide · Google",
    initials: "JA",
    color: "#C0792A",
    text: "Trabalho realizado com excelência e dedicação. Curadoria de ideias incríveis, além da ótima estética, são atualizadas, modernas, com a essência que eu preciso. Super recomendo!",
    rating: 5,
  },
  {
    name: "Wendel Benac",
    role: "Google",
    initials: "W",
    color: "#34A853",
    text: "Tive uma ótima experiência com o serviço da Fábrica. Tive ajuda durante todo o processo de criação da marca quase que em tempo integral, o Erick foi extremamente paciente com todas as trocas de ideia que tivemos e extremamente criativo com suas mudanças propostas. Se pensa em criar uma marca e trazer uma imagem diferente pra sua empresa, aqui é o lugar!!",
    rating: 5,
  },
  {
    name: "Anthony Soares Costa",
    role: "Google",
    initials: "A",
    color: "#EA4335",
    text: "É uma empresa excepcional em identidade visual gráfica. Ótimo atendimento pelo Erick, um ótimo profissional e atencioso, sempre buscando entender as necessidades do cliente. Os projetos desenvolvidos são de alta qualidade, inovadores e refletem perfeitamente a essência da nossa marca. A comunicação é clara e eficiente, garantindo que todos os prazos sejam cumpridos. Recomendo para qualquer empresa que busque uma identidade visual forte e eficaz. Trabalhar com eles foi uma experiência incrível!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-foreground mb-6">
          O que dizem
          <br />
          nossos clientes
        </h2>

        {/* Avatar stack */}
        <div className="flex items-center justify-center mb-4">
          <div className="flex -space-x-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
            ))}
            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </div>
          </div>
        </div>

        <p className="font-semibold text-foreground">Amados por quem</p>
        <p className="text-muted-foreground">valoriza design estratégico.</p>
      </div>

      {/* Testimonial cards */}
      <div className="space-y-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-primary rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ background: testimonial.color }}
              >
                {testimonial.initials}
              </div>
              <div>
                <h4 className="font-semibold text-primary-foreground text-sm leading-tight">{testimonial.name}</h4>
                <p className="text-primary-foreground/60 text-xs mt-0.5">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-[hsl(180,60%,70%)] text-[hsl(180,60%,70%)]" />
              ))}
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
