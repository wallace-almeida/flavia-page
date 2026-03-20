export default function Differentials() {
  return (
    <section className="py-24 bg-stone-100 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        <div>
          <h2 className="text-4xl font-extrabold font-headline mb-6">
            Por que escolher a Flavia?
          </h2>

          <p className="mb-6">Resultados reais e sustentáveis</p>

          <div className="bg-primary-container/20 p-6 rounded-2xl">
            <p className="text-4xl font-bold text-primary">10k+</p>
            <p>vidas transformadas</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl">Foco em resultados</div>
          <div className="bg-white p-6 rounded-2xl">Neurociência</div>
          <div className="bg-white p-6 rounded-2xl">App exclusivo</div>
          <div className="bg-white p-6 rounded-2xl">Receitas práticas</div>
        </div>

      </div>
    </section>
  );
}