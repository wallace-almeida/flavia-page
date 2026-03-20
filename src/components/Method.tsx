export default function Method() {
  return (
    <section
      id="metodo"
      className="py-32 px-6 relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] text-white"
    >
      {/* GLOW BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-tertiary/30 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* TEXTO */}
        <div>
          <span className="text-tertiary text-sm font-bold tracking-[0.3em] uppercase mb-6 block">
            Método Exclusivo
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-10">
            O passo a passo para{" "}
            <span className="text-primary">reprogramar seu corpo</span>{" "}
            e acelerar seus resultados
          </h2>

          <p className="text-gray-300 mb-14 text-lg leading-relaxed max-w-xl">
            Não é sobre dieta. É sobre estratégia, consistência e um método
            validado que transforma sua relação com a alimentação.
          </p>

          <div className="space-y-16 relative">

            {/* LINHA */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary to-primary/0"></div>

            {/* STEP */}
            {[
              {
                number: "01",
                title: "Diagnóstico Profundo",
                desc: "Entendemos seu metabolismo, rotina e bloqueios reais."
              },
              {
                number: "02",
                title: "Plano Estratégico",
                desc: "Criamos um protocolo alimentar totalmente personalizado."
              },
              {
                number: "03",
                title: "Ajustes Inteligentes",
                desc: "Evoluímos seu plano conforme seu corpo responde."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start group">

                {/* NUMBER BIG */}
                <div className="text-5xl font-extrabold text-white/10 group-hover:text-primary transition">
                  {item.number}
                </div>

                {/* CARD */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition w-full">
                  <h4 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* VISUAL */}
        <div className="relative">

          {/* CARD CENTRAL */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <img
              className="rounded-2xl mb-6 object-cover h-64 w-full"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"
            />

            <h3 className="text-2xl font-bold mb-2">
              Resultados reais, método comprovado
            </h3>

            <p className="text-gray-300 text-sm">
              Um sistema criado para gerar consistência e transformar seu corpo
              sem extremismos.
            </p>

          </div>

          {/* FLOATING CARDS */}
          <div className="absolute -top-10 -right-10 bg-primary text-white px-6 py-4 rounded-2xl shadow-xl rotate-6">
            🔥 Resultados consistentes
          </div>

          <div className="absolute -bottom-10 -left-10 bg-white text-black px-6 py-4 rounded-2xl shadow-xl -rotate-6">
            📊 Baseado em ciência
          </div>

        </div>

      </div>
    </section>
  );
}