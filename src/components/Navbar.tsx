import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  // Scroll otimizado usando requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = [
            "inicio",
            "resultados",
            "metodo",
            "protocolos",
            "sobre",
            "dores",
            "contato"
          ];

          let current = "inicio";

          sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
              const top = section.offsetTop - 120;
              if (window.scrollY >= top) {
                current = id;
              }
            }
          });

          setActive(current);
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // considera header fixo
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      <nav
        className={`mx-auto max-w-6xl mt-6 px-8 rounded-full flex items-center justify-between transition-all duration-500
        ${scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-2xl scale-[0.97] border border-black/5 py-2"
          : "bg-white/60 backdrop-blur-xl border border-white/20 py-3"
        }`}
      >

        {/* LOGO */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollTo("inicio")}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-400/20 rounded-lg"></div>
            <svg
              className="w-5 h-5 text-primary relative z-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13c0-5 5-9 14-9-1 9-5 14-10 14-2.5 0-4-2-4-5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 13c2-2 4-3 7-4"
              />
            </svg>
          </div>

          <div>
            <div className="text-lg md:text-xl font-bold font-headline tracking-tight bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Flávia Cristina
            </div>
            <div className="text-xs md:text-sm text-primary/70 font-medium leading-none">
              Nutricionista
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {[
            { id: "inicio", label: "Início" },
            { id: "resultados", label: "Resultados" },
            { id: "metodo", label: "Método" },
            { id: "protocolos", label: "Protocolos" },
            { id: "sobre", label: "Sobre" },
          ].map((item) => (
            <a
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="cursor-pointer transition relative group"
            >
              <span className={`transition-colors duration-300 ${
                active === item.id ? "text-primary" : "hover:text-primary"
              }`}>
                {item.label}
              </span>

              {/* LINHA ANIMADA ABAIXO - SÓ QUANDO ATIVO */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary to-green-500 rounded-full transition-all duration-500 ease-out
                ${active === item.id ? "w-full opacity-100" : "w-0 opacity-0"}
                `}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("contato")}
            className="relative group overflow-hidden px-6 py-2.5 rounded-full text-sm font-semibold text-white"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-green-500"></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/20 blur-md shadow-lg"></span>
            <span className="relative z-10">
              Agendar Consulta
            </span>
          </button>
        </div>

      </nav>
    </header>
  );
}