export default function Method() {
  return (
    <section id="metodo" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* TEXTO */}
        <div>
          <span className="text-tertiary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            O Ciclo de Ouro
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold font-headline mb-8">
            Como desenhamos seu novo estilo de vida
          </h2>

          <div className="space-y-12">

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center font-bold">01</div>
              <div>
                <h4 className="font-bold text-xl">Mapeamento Metabólico</h4>
                <p className="text-on-surface-variant">Análise completa do seu corpo</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center font-bold">02</div>
              <div>
                <h4 className="font-bold text-xl">Estratégia Customizada</h4>
                <p className="text-on-surface-variant">Plano 100% adaptado à sua rotina</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-primary-container/20 rounded-xl flex items-center justify-center font-bold">03</div>
              <div>
                <h4 className="font-bold text-xl">Acompanhamento</h4>
                <p className="text-on-surface-variant">Suporte contínuo</p>
              </div>
            </div>

          </div>
        </div>

        {/* GRID VISUAL */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <img className="rounded-2xl" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061"/>
            <div className="bg-primary p-6 rounded-2xl text-white">100% Personalizado</div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-100 p-6 rounded-2xl">Baseado em evidência</div>
            <img className="rounded-2xl" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"/>
          </div>
        </div>

      </div>
    </section>
  );
}