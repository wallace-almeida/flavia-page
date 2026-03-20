export default function Services() {
  return (
    <section id="protocolos" className="py-32 px-6 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-4xl md:text-6xl font-extrabold font-headline mb-6 leading-tight">
          Protocolos nutricionais para quem quer{" "}
          <span className="text-primary">voltar a viver bem</span>
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-20">
          Atuamos diretamente nas causas que impactam seu corpo: inflamação,
          desequilíbrios hormonais, dores crônicas e baixa energia.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="relative group bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl"></div>

            <h3 className="text-2xl font-bold mb-4">
              Performance & Energia
            </h3>

            <p className="text-gray-600 mb-6">
              Para quem sente cansaço constante, baixa disposição ou queda de rendimento.
            </p>

            <span className="text-sm text-primary font-semibold">
              ⚡ Mais energia no dia a dia
            </span>
          </div>

          {/* CARD 2 (DESTAQUE CLÍNICO) */}
          <div className="relative group bg-gradient-to-br from-primary to-green-600 text-white p-10 rounded-[2rem] shadow-2xl scale-105">
            
            <div className="text-sm uppercase tracking-widest mb-4 opacity-80">
              Especialidade
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Dor Crônica & Inflamação
            </h3>

            <p className="mb-6 opacity-90">
              Estratégias nutricionais para condições como fibromialgia,
              inflamação persistente e dores recorrentes.
            </p>

            <ul className="text-sm space-y-2 opacity-90">
              <li>✔ Redução de dores</li>
              <li>✔ Controle inflamatório</li>
              <li>✔ Mais qualidade de vida</li>
            </ul>

          </div>

          {/* CARD 3 */}
          <div className="relative group bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-2xl transition overflow-hidden">
            
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200/30 blur-3xl"></div>

            <h3 className="text-2xl font-bold mb-4">
              Equilíbrio Metabólico
            </h3>

            <p className="text-gray-600 mb-6">
              Para quem enfrenta dificuldade para emagrecer, retenção ou desregulação hormonal.
            </p>

            <span className="text-sm text-primary font-semibold">
              🔬 Metabolismo funcionando de verdade
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}