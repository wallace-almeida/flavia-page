export default function Differentials() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* FOTO + IDENTIDADE */}
        <div className="relative group overflow-hidden rounded-[2.5rem]">

  <div className="transition-transform duration-700 group-hover:scale-[1.015] origin-center">

    <img
      src="/imagem_cadeira2.png"
      className="rounded-[2.5rem] object-contain object-center w-full h-[520px] bg-gray-50"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 rounded-[2.5rem]" />

    <div className="absolute bottom-0 left-0 right-0 h-24 p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-[2.5rem] flex items-end">

      <div className="text-white transition-transform duration-700 group-hover:-translate-y-[2px]">

        <p className="text-xl font-medium tracking-tight">
          Flávia Cristina
        </p>

        <p className="text-sm text-white/80">
          Nutricionista Clínica • +10 anos de formação
        </p>

      </div>

    </div>

  </div>

  <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-10 bg-gradient-to-r from-primary/20 via-transparent to-green-500/20 transition-opacity duration-700 pointer-events-none" />

  <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-green-500/10 rounded-[2.8rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-xl" />

</div>

        {/* TEXTO */}
        <div className="space-y-6">

          <span className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-4 block opacity-0 animate-fade-in-up animation-delay-200">
            Nutrição Clínica Aplicada
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold font-headline leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-400">
            Quando o corpo não responde,{" "}
            <span className="text-primary relative">
              existe uma causa por trás
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-green-500 rounded-full opacity-60"></div>
            </span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed opacity-0 animate-fade-in-up animation-delay-600">
            Dores constantes, cansaço que não passa, dificuldade para emagrecer
            e falta de energia não são normais. Muitas vezes, esses sinais estão
            ligados a inflamação crônica e desequilíbrios metabólicos.
          </p>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-800">
            Com mais de 10 anos de formação, Flávia atua de forma estratégica em
            condições como fibromialgia, dores persistentes e baixa energia,
            utilizando a nutrição como ferramenta para restaurar o equilíbrio do organismo.
          </p>

          {/* LISTA */}
          <div className="grid grid-cols-2 gap-4">

            {[
              "Fibromialgia",
              "Dores crônicas",
              "Fadiga constante",
              "Baixa energia",
              "Inflamação",
              "Metabolismo lento"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${1000 + i * 100}ms` }}
              >
                <span className="text-primary text-lg transition-transform duration-300 hover:scale-110">✔</span>
                <span className="text-sm font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}