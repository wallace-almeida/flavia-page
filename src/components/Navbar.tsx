import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">

      <nav
        className={`mx-auto max-w-6xl mt-6 px-8 py-3 rounded-full flex items-center justify-between transition-all duration-500
        ${scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-2xl scale-[0.97] border border-black/5"
          : "bg-white/60 backdrop-blur-xl border border-white/20"
        }`}
      >

       {/* LOGO */}
<div className="flex items-center gap-2.5">

  {/* ÍCONE DE NUTRIÇÃO */}
  <div className="relative w-10 h-10 flex items-center justify-center">

    {/* BACKGROUND GRADIENTE */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-green-400/20 rounded-lg"></div>

    {/* ÍCONE DE FOLHA */}
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
  
  {/* TEXTO DO NOME */}
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

          <a className="hover:text-primary transition cursor-pointer">
            Início
          </a>

          <a className="hover:text-primary transition cursor-pointer">
            Método
          </a>

          <a className="hover:text-primary transition cursor-pointer">
            Resultados
          </a>

          <a className="hover:text-primary transition cursor-pointer">
            Protocolos
          </a>

        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">

          <button className="relative group overflow-hidden px-6 py-2.5 rounded-full text-sm font-semibold text-white">

            {/* GRADIENT BACKGROUND */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-green-500"></span>

            {/* HOVER GLOW */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/20 blur-md"></span>

            {/* TEXT */}
            <span className="relative z-10">
              Agendar Consulta
            </span>

          </button>

        </div>

      </nav>
    </header>
  );
}