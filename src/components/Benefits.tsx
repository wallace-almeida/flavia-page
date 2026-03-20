import { motion } from "framer-motion";

export default function Benefits() {
  const items = [
    { title: "Emagreça sem sofrimento", desc: "Sem dietas restritivas" },
    { title: "Mais energia diária", desc: "Pare de se sentir cansada" },
    { title: "Relação leve com a comida", desc: "Sem culpa" },
  ];

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Sua transformação começa aqui
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="p-8 bg-white rounded-2xl shadow"
          >
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}