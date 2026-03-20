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
        <div className="text-xl md:text-2xl font-bold font-headline tracking-tight">
          Flávia Cristina
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