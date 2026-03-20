export default function CTA() {
  return (
    <section className="py-24 px-6 mb-24 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-primary/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-140px] right-[-140px] w-[300px] h-[300px] bg-green-400/20 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto">

        <div className="relative rounded-[3rem] overflow-hidden p-14 text-center shadow-[0_30px_100px_rgba(0,0,0,0.25)]">

          {/* FUNDO */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-green-600"></div>

          {/* TEXTURA */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]"></div>

          {/* BORDA */}
          <div className="absolute inset-0 border border-white/10 rounded-[3rem]"></div>

          {/* CONTEÚDO */}
          <div className="relative z-10 space-y-6">

            <h2 className="text-3xl md:text-5xl font-extrabold font-headline leading-tight">
              Pronto para começar?
            </h2>

            <p className="text-lg text-white/80">
              Dê o primeiro passo hoje.
            </p>

            <div className="pt-2">
              <button className="relative group overflow-hidden px-10 py-4 rounded-full font-semibold text-primary bg-white shadow-lg transition-all duration-300">

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/10 blur-md transition"></span>

                <span className="relative z-10 flex items-center gap-2">
                  Agendar consulta
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </span>

              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}