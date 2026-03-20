export default function Services() {
  return (
    <section className="py-24 bg-surface px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-extrabold font-headline mb-16">
          Programas de Transformação
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="glass-card p-10 rounded-[2rem]">
            <h3 className="text-2xl font-bold mb-4">Performance Elite</h3>
            <p>Alta performance física</p>
          </div>

          <div className="glass-card p-10 rounded-[2rem] border">
            <h3 className="text-2xl font-bold mb-4">Metabolismo 360</h3>
            <p>Emagrecimento sustentável</p>
          </div>

          <div className="glass-card p-10 rounded-[2rem]">
            <h3 className="text-2xl font-bold mb-4">Saúde Feminina</h3>
            <p>Equilíbrio hormonal</p>
          </div>

        </div>
      </div>
    </section>
  );
}