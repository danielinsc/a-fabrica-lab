import { useState } from "react";
import { ArrowUpRight, Instagram, Twitter } from "lucide-react";

const FooterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contato via site");
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:hello@afabrica.lab?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      {/* Profile + Social */}
      <div className="flex flex-col items-center text-center mb-10">
        <img
          src="/assets-work/Logo/F%C3%A1brica-Logo.png"
          alt="A Fábrica Lab"
          className="w-16 h-16 rounded-xl object-contain mb-4 bg-white border border-border p-1"
        />
        <h3 className="font-bold text-foreground text-lg mb-3">A Fábrica Lab</h3>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
            aria-label="X / Twitter"
          >
            <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="#"
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
            aria-label="Dribbble"
          >
            <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72M10.48 2.75c3.67 4.83 5.18 8.75 6.77 14.38M2.94 12c4.62 0 8.01-1.3 10.59-2.82" />
            </svg>
          </a>
        </div>
      </div>

      {/* Contact card */}
      <div className="bg-card rounded-3xl border border-border p-8 mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Contato</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-background border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-background border border-border rounded-2xl px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-primary text-primary-foreground py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Enviar mensagem
            </button>
            <button
              type="submit"
              className="w-14 h-14 flex-shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>

      {/* Contact details */}
      <div className="space-y-3 mb-12">
        <a
          href="tel:+5511999999999"
          className="block text-3xl font-extrabold text-foreground hover:text-primary transition-colors"
        >
          (11) 9 9999-9999
        </a>
        <a
          href="mailto:hello@afabrica.lab"
          className="block text-3xl font-extrabold text-foreground hover:text-primary transition-colors"
        >
          hello@afabrica.lab
        </a>
      </div>

      {/* Copyright */}
      <div className="border-t border-border pt-8 text-sm text-muted-foreground text-center">
        <p>© 2025 A Fábrica Lab. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
