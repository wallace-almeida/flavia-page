export default function CTA() {
  return (
    <section className="py-24 px-6 mb-20">
      <div className="max-w-6xl mx-auto relative rounded-[4rem] overflow-hidden bg-primary text-white p-16 text-center">

        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-90"></div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-5xl font-extrabold font-headline">
            Você está a uma decisão de mudar sua vida
          </h2>

          <p className="text-xl opacity-90">
            O corpo que você deseja começa hoje
          </p>

          <button className="bg-white text-primary px-12 py-5 rounded-full font-bold shadow-xl hover:scale-110 transition">
            Agendar consulta agora
          </button>
        </div>

      </div>
    </section>
  );
}