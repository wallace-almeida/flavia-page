import { motion } from "framer-motion";

export default function Proof() {
  return (
    <section className="py-24 bg-surface-container-low px-6">
      {/* TÍTULO PRINCIPAL */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold font-headline leading-tight"
        >
          A ciência prova, os resultados encantam
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          Transformações reais de quem seguiu o método. Saúde, estética e bem-estar integrados.
        </motion.p>
      </div>

      {/* SEÇÃO DE CONCEITOS / BENEFÍCIOS */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* CARD 1 */}
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.1 }}
    className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-br from-green-50 to-white p-6 md:p-8 flex flex-col justify-center items-center text-center min-h-[400px] transition-transform hover:scale-105 hover:shadow-3xl"
  >
    {/* Forma decorativa */}
    <div className="absolute -top-5 -right-5 w-16 h-16 bg-primary/20 rounded-full"></div>

    {/* Ícone ou imagem circular */}
    <img
      src="/assets/healthy_food.jpg"
      alt="Alimentação equilibrada"
      className="w-32 h-32 object-cover rounded-full mb-4"
    />

    {/* Título */}
     <h3 className="text-xl md:text-2xl font-extrabold text-primary mb-2">
      Alimentação Equilibrada
    </h3>

    {/* Texto explicativo */}
    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
      Aprenda a montar refeições nutritivas e saborosas que se encaixam na sua rotina e promovem bem-estar.
    </p>
  </motion.div>

  {/* CARD 2 */}
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gradient-to-br from-yellow-50 to-white p-8 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-3xl"
  >
    {/* Forma decorativa */}
    <div className="absolute -top-5 -left-5 w-16 h-16 bg-secondary/20 rounded-full"></div>

    {/* Ícone ou imagem circular */}
    <img
      src="/assets/lifestyle.jpg"
      alt="Estilo de vida saudável"
      className="w-32 h-32 object-cover rounded-full mb-4"
    />

    {/* Título */}
    <h3 className="text-xl md:text-2xl font-extrabold text-secondary mb-2">
      Estilo de Vida Saudável
    </h3>

    {/* Texto explicativo */}
    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
      Estratégias para manter hábitos consistentes, ganhar energia e alcançar equilíbrio no dia a dia.
    </p>
  </motion.div>
</div>

      {/* CTA VISUAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-lg md:text-xl font-medium text-on-surface-variant">
          Imagine sua transformação com acompanhamento profissional e estratégia personalizada.
        </p>
      </motion.div>
    </section>
  );
}