const clients = [
  { name: "logoipsum", src: "https://logoipsum.com/artwork/241" },
  { name: "studio" },
  { name: "marca" },
  { name: "logoipsum" },
  { name: "design co." },
];

const ClientsBar = () => {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <p className="text-center text-muted-foreground text-sm mb-8">Trabalhamos com orgulho com:</p>
      <div className="relative overflow-hidden">
        <div
          className="flex items-center gap-12 w-max"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="text-muted-foreground/40 font-semibold text-lg tracking-wide whitespace-nowrap"
            >
              {client.name}
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default ClientsBar;
