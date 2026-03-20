import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden px-6">

      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-br from-primary-container/30 to-transparent rounded-bl-[120px] blur-3xl opacity-50"></div>

      <div className="absolute -bottom-20 -left-20 -z-10 w-[400px] h-[400px] bg-secondary-container/40 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

        {/* TEXTO */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.05] tracking-tight">
            Seu corpo não precisa de dieta.
            <br />
            Precisa de{" "}
            <span className="text-primary italic">estratégia.</span>
          </h1>

          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed">
            Nutrição personalizada para promover emagrecimento saudável, aumentar a energia e desenvolver hábitos alimentares equilibrados.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-col sm:flex-row gap-4">

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-5 rounded-full font-headline text-lg font-bold shadow-[0_20px_60px_rgba(0,110,28,0.35)]"
              onClick={() => scrollTo("contato")}
            >
              Agendar consulta
            </motion.button>

            <motion.button
              whileHover={{ x: 6 }}
              className="flex items-center gap-2 font-bold text-on-surface text-lg"
              onClick={() => scrollTo("metodo")}
            >
              Conhecer o método →
            </motion.button>

          </div>

         
        </motion.div>

        {/* FOTO */}
        <div className="lg:col-span-5 relative">

          <motion.div
            initial={{ rotate: 4, opacity: 0 }}
            animate={{ rotate: 2, opacity: 1 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
          >
            <img
              src="/imagens_frutas_mao.png"
              className="w-full aspect-[4/5] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          {/* CARD 1 - AUTORIDADE */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -left-12 top-1 glass-card p-6 rounded-2xl shadow-xl w-50 hidden md:block"
          >
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Atendimento
            </p>
            <p className="font-bold text-lg">100% personalizado</p>

            <div className="h-2 bg-gray-200 rounded-full mt-3">
              <div className="h-full bg-primary w-3/4 rounded-full"></div>
            </div>
          </motion.div>

          {/* CARD 2 - RESULTADO */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute -right-10 bottom-10 glass-card p-6 rounded-2xl shadow-xl w-56 hidden md:block"
          >
            <p className="text-sm text-gray-500">Resultado médio</p>
            <p className="text-3xl font-black text-primary">-12kg</p>
            <p className="text-xs text-gray-500">em 3 meses</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}