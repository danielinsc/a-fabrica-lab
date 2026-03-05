import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus } from "lucide-react";

type Section = { title: string; content: string };

type ProjectData = {
  name: string;
  tagline: string;
  year: string;
  client: string;
  discovery: string;
  sections: Section[];
  images: string[];
};

const projects: Record<string, ProjectData> = {
  doodle: {
    name: "Doodle",
    tagline: "Identidade Visual",
    year: "2024",
    client: "Doodle Cafeteria",
    discovery:
      "A Doodle é uma cafeteria artesanal que queria se destacar com uma identidade única e cheia de personalidade. O projeto envolveu criação de logo, paleta, tipografia e aplicações em embalagens e uniformes.",
    sections: [
      {
        title: "BRIEFING",
        content:
          "A Doodle buscava uma identidade que transmitisse acolhimento, criatividade e o sabor artesanal. Era necessário criar algo funcional tanto em ambientes físicos quanto digitais.",
      },
      {
        title: "IDENTIDADE VISUAL",
        content:
          "Desenvolvemos uma identidade baseada em traços orgânicos, paleta quente e tipografias que reforçam o caráter artesanal. O mascote foi criado para gerar identificação e memorabilidade.",
      },
      {
        title: "APLICAÇÕES",
        content:
          "A identidade foi aplicada em cardápios, cavaletes, uniformes, embalagens e materiais digitais. Cada ponto de contato reforça a experiência da marca.",
      },
    ],
    images: [
      "/assets-work/Doodle/Cavalete-Doodle.png",
      "/assets-work/Doodle/Doodle.png",
      "/assets-work/Doodle/Logo-Doodle.png",
      "/assets-work/Doodle/Mascote-Doodle.png",
      "/assets-work/Doodle/Doodle%20Blusa.png",
      "/assets-work/Doodle/Card%C3%A1pio-Doodle%20(1).png",
    ],
  },
  "burger-blaze": {
    name: "Burger Blaze",
    tagline: "Branding Completo",
    year: "2024",
    client: "Burger Blaze",
    discovery:
      "A Burger Blaze precisava de uma identidade forte e impactante para se posicionar no mercado de hamburguerias gourmet. O projeto abrangeu branding completo, cardápio visual e aplicações em uniforme.",
    sections: [
      {
        title: "BRIEFING",
        content:
          "O desafio era criar uma identidade que transmitisse intensidade e qualidade premium sem perder a agressividade visual que o mercado de burguer pede.",
      },
      {
        title: "IDENTIDADE VISUAL",
        content:
          "Desenvolvemos identidade com paleta impactante em vermelho e preto, tipografia bold e um símbolo que remete à chama e à intensidade do produto.",
      },
      {
        title: "APLICAÇÕES",
        content:
          "O branding foi aplicado em cardápios, uniformes, embalagens e comunicação digital, criando uma experiência visual coesa e memorável.",
      },
    ],
    images: [
      "/assets-work/Burger-Blaze/BurgerBlaze.png",
      "/assets-work/Burger-Blaze/Pessoa-BurguerBlaze.png",
      "/assets-work/Burger-Blaze/Logo-BurguerBlaze.png",
      "/assets-work/Burger-Blaze/BurguerBlaze2.png",
      "/assets-work/Burger-Blaze/Card%C3%A1pio-BurguerBlaze.png",
      "/assets-work/Burger-Blaze/Camisa-BugerBlaze.png",
      "/assets-work/Burger-Blaze/Logo2-BurguerBlaze.png",
      "/assets-work/Burger-Blaze/Burguer.png",
    ],
  },
  "wild-box": {
    name: "Wild Box",
    tagline: "Identidade de Marca",
    year: "2024",
    client: "Wild Box",
    discovery:
      "A Wild Box é uma empresa de envios e logística que precisava de uma identidade profissional e moderna. O projeto criou um sistema visual completo que comunica confiança e eficiência.",
    sections: [
      {
        title: "BRIEFING",
        content:
          "A empresa precisava de uma identidade que transmitisse profissionalismo e modernidade, diferenciando-se da concorrência no mercado de logística.",
      },
      {
        title: "IDENTIDADE VISUAL",
        content:
          "Desenvolvemos uma identidade limpa e sofisticada, com paleta laranja impactante, tipografia moderna e um logo que remete a movimento e eficiência.",
      },
      {
        title: "APLICAÇÕES",
        content:
          "A identidade foi aplicada em cartões de visita, uniformes, embalagens de envio, bonés e toda a comunicação visual da empresa.",
      },
    ],
    images: [
      "/assets-work/Caixa/Caixa-1.png",
      "/assets-work/Caixa/Posters.png",
      "/assets-work/Caixa/LogoCaixa.png",
      "/assets-work/Caixa/Cart%C3%A3o-de-Visita-caixa.png",
      "/assets-work/Caixa/V%C3%A1rias-Caixas.png",
      "/assets-work/Caixa/Bon%C3%A9-Caixa.png",
      "/assets-work/Caixa/Flags.png",
      "/assets-work/Caixa/Caixa-de-Correio.png",
    ],
  },
};

const AccordionItem = ({ title, content }: Section) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-white/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-white/80 text-[11px] uppercase tracking-[0.18em] font-semibold group-hover:text-white transition-colors">
          {title}
        </span>
        {open ? (
          <Minus className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
        ) : (
          <Plus className="w-3.5 h-3.5 text-white/60 flex-shrink-0" />
        )}
      </button>
      {open && (
        <p className="text-white/65 text-sm leading-relaxed pb-5">{content}</p>
      )}
    </div>
  );
};

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects[slug ?? ""];

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-muted-foreground text-lg">Projeto não encontrado.</p>
        <Link to="/" className="text-primary font-semibold hover:opacity-80 transition-opacity">
          ← Voltar ao início
        </Link>
      </div>
    );
  }

  const [heroImage, ...gridImages] = project.images;

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Left panel ─────────────────────────────────── */}
      <aside
        className="flex-shrink-0 flex flex-col h-screen overflow-y-auto"
        style={{ width: 380, background: "#1b1b1b" }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4 flex-shrink-0">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/75 hover:text-white transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>
          <img
            src="/assets-work/Logo/F%C3%A1brica-Logo.png"
            alt="A Fábrica Lab"
            className="h-7 object-contain brightness-0 invert"
          />
        </div>

        {/* Push content to bottom */}
        <div className="flex-1 min-h-[120px]" />

        {/* Project details */}
        <div className="px-8 pb-10">
          <p className="text-white/55 text-[11px] uppercase tracking-[0.22em] font-semibold mb-2">
            {project.tagline} · {project.year}
          </p>
          <h1 className="text-white text-[2.6rem] font-extrabold leading-[1.05] mb-6 tracking-tight">
            {project.name}
          </h1>

          {/* Discovery */}
          <div className="border-t border-white/25 pt-5 mb-1">
            <p className="text-white/55 text-[11px] uppercase tracking-[0.18em] font-semibold mb-3">
              DESCOBERTA
            </p>
            <p className="text-white/80 text-sm leading-[1.7]">{project.discovery}</p>
          </div>

          {/* Accordion */}
          {project.sections.map((s) => (
            <AccordionItem key={s.title} title={s.title} content={s.content} />
          ))}
        </div>
      </aside>

      {/* ── Right panel ─────────────────────────────────── */}
      <main className="flex-1 overflow-y-auto bg-white">
        {/* Hero image — full width, tall */}
        <div className="w-full overflow-hidden" style={{ height: "62vh" }}>
          <img
            src={heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image grid — 3 columns, square cells */}
        <div className="grid grid-cols-3">
          {gridImages.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <img
                src={img}
                alt={`${project.name} ${i + 2}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectPage;
