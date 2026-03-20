export default function PainSection() {
  return (
    <section className="py-32 px-6 bg-[#020617] text-white relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-red-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* HEADLINE */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
          Você se identifica com{" "}
          <span className="text-primary">alguma dessas situações?</span>
        </h2>

        <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
          Muitos desses sinais são ignorados no dia a dia, mas podem indicar
          desequilíbrios no seu corpo.
        </p>

        {/* LISTA */}
        <div className="grid md:grid-cols-2 gap-6 text-left mb-16">

          {[
            "Cansaço constante, mesmo dormindo bem",
            "Dores frequentes no corpo (como na fibromialgia)",
            "Dificuldade para emagrecer mesmo tentando",
            "Inchaço e desconforto abdominal",
            "Falta de energia ao longo do dia",
            "Sensação de metabolismo lento",
            "Oscilações de humor ou ansiedade",
            "Já tentou dietas e não conseguiu manter"
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-lg"
            >
              <div className="text-primary text-xl mt-1">✔</div>
              <p className="text-gray-200">{item}</p>
            </div>
          ))}

        </div>

        {/* QUEBRA DE CRENÇA */}
        <div className="mb-12">
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Esses sinais não são normais — e não devem ser ignorados.  
            Na maioria dos casos, eles estão ligados a{" "}
            <span className="text-primary font-semibold">
              inflamação, desequilíbrios metabólicos ou alimentação desajustada.
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="relative group px-8 py-4 rounded-full text-lg font-semibold text-white overflow-hidden">

            {/* BG */}
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-green-500"></span>

            {/* GLOW */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/20 blur-md"></span>

            {/* TEXTO */}
            <span className="relative z-10">
              Quero entender o que está acontecendo comigo
            </span>

          </button>
        </div>

      </div>
    </section>
  );
}