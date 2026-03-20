export default function Testimonials() {
  return (
    <section id="resultados" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-extrabold font-headline text-center mb-16">
          Histórias Reais
        </h2>

        <div className="flex gap-8 overflow-x-auto">

          <div className="min-w-[320px] glass-card p-8 rounded-2xl">
            "Perdi 12kg e ganhei energia"
          </div>

          <div className="min-w-[320px] glass-card p-8 rounded-2xl">
            "Minha vida mudou completamente"
          </div>

          <div className="min-w-[320px] glass-card p-8 rounded-2xl">
            "Nunca mais tive efeito sanfona"
          </div>

        </div>

      </div>
    </section>
  );
}