import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Por que o storytelling é essencial no design de marca",
    date: "28 Fev, 2025",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=80&h=80&fit=crop",
  },
  {
    title: "5 erros de identidade visual que afastam clientes",
    date: "14 Fev, 2025",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=80&h=80&fit=crop",
  },
  {
    title: "Como criar posts que param o scroll e geram vendas",
    date: "5 Fev, 2025",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=80&h=80&fit=crop",
  },
];

const JournalSection = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-foreground mb-4">Artigos</h2>
        <p className="text-muted-foreground text-lg">
          Um espaço onde compartilhamos insights sobre
          <br />
          design, criatividade e estratégia de marca.
        </p>
      </div>

      <div className="bg-card rounded-3xl border border-border overflow-hidden">
        {posts.map((post, i) => (
          <a
            key={post.title}
            href="#"
            className={`flex items-center gap-4 p-5 hover:bg-muted/50 transition-colors ${
              i < posts.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="flex-1 font-medium text-foreground text-sm leading-snug">
              {post.title}
            </span>
            <span className="text-muted-foreground text-sm whitespace-nowrap flex-shrink-0">
              {post.date}
            </span>
          </a>
        ))}

        <div className="p-5 text-center border-t border-border">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-primary transition-colors text-sm"
          >
            Ver todos
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
