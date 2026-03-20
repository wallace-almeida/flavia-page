import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 20);
    });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">

      <nav className={`mx-auto max-w-5xl mt-6 px-8 py-3 rounded-full transition-all duration-300 flex justify-between items-center
        ${scrolled ? "bg-white shadow-xl" : "bg-white/60 backdrop-blur-xl"}
      `}>

        <div className="text-2xl font-bold font-headline">
          Flavia Cristina
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <a className="font-semibold hover:text-primary">Início</a>
          <a className="hover:text-primary">Método</a>
          <a className="hover:text-primary">Resultados</a>

          <button className="bg-primary text-white px-6 py-2 rounded-full hover:scale-105 transition">
            Agendar
          </button>
        </div>

      </nav>
    </header>
  );
}