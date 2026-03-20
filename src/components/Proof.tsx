import { motion } from "framer-motion";
import healthyFood from "../assets/healthy_food.jpg";
import healthySalad from "../assets/healthy_salad_bowl.jpg";

export default function Proof() {
  return (
    <section className="py-24 bg-surface-container-low px-6">
      {/* TÍTULO PRINCIPAL */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Resultados Comprovados</span>
        </motion.div>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold font-headline leading-tight text-on-surface"
        >
          A ciência prova, os resultados encantam
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
        >
          Transformações reais de quem seguiu o método. Saúde, estética e bem-estar integrados.
        </motion.p>
      </div>

      {/* SEÇÃO DE CONCEITOS / BENEFÍCIOS */}
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
  {/* CARD 1 */}
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.1 }}
    className="group relative rounded-2xl overflow-hidden bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 flex flex-col justify-between min-h-[420px]"
  >
    {/* Decoração de fundo */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-green-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full -mr-24 -mt-24 group-hover:scale-150 transition-all duration-300 ease-out"></div>

    {/* Conteúdo */}
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
      <div className="lg:col-span-1 flex justify-center">
        <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-md">
          <img
            src={healthyFood}
            alt="Alimentação equilibrada"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-3 leading-snug">
          Alimentação Equilibrada
        </h3>
        <div className="w-14 h-1 bg-primary rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Aprenda a montar refeições nutritivas e saborosas que se encaixam na sua rotina e promovem bem-estar.
        </p>
      </div>
    </div>
  </motion.div>

  {/* CARD 2 */}
  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="group relative rounded-2xl overflow-hidden bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 flex flex-col justify-between min-h-[420px]"
  >
    {/* Decoração de fundo */}
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/60 via-yellow-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute top-0 left-0 w-48 h-48 bg-secondary/15 rounded-full -ml-24 -mt-24 group-hover:scale-150 transition-all duration-300 ease-out"></div>

    {/* Conteúdo */}
    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
      <div className="lg:col-span-1 flex justify-center">
        <div className="relative w-36 h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-md">
          <img
            src={healthySalad}
            alt="Estilo de vida saudável"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="lg:col-span-2">
        <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-3 leading-snug">
          Estilo de Vida Saudável
        </h3>
        <div className="w-14 h-1 bg-secondary rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Estratégias para manter hábitos consistentes, ganhar energia e alcançar equilíbrio no dia a dia.
        </p>
      </div>
    </div>
  </motion.div>
</div>

      {/* CTA VISUAL */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 text-center"
      >
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Imagine sua transformação com acompanhamento profissional e estratégia personalizada.
        </p>
      </motion.div>
    </section>
  );
}