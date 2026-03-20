export default function Footer() {
  return (
    <footer className="bg-[#020617] text-white mt-32 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-primary/20 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        <div className="grid md:grid-cols-3 gap-12 mb-16">

          {/* MARCA */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-white/10">
                {/* Ícone aqui */}
                <svg 
                  className="w-5 h-5 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.8" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 20c4-4 6-7 6-10a6 6 0 10-12 0c0 3 2 6 6 10z" />
                  <path d="M12 20v-6" />
                </svg>
              </div>

              <span className="text-lg font-semibold tracking-tight">
                Flávia Cristina
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Nutrição clínica estratégica com foco em saúde metabólica,
              inflamação e qualidade de vida.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Navegação
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              <a className="hover:text-primary transition cursor-pointer">
                Início
              </a>
              <a className="hover:text-primary transition cursor-pointer">
                Resultados
              </a>
              <a className="hover:text-primary transition cursor-pointer">
               Método 
              </a>
              <a className="hover:text-primary transition cursor-pointer">
                Protocolos
              </a>
              <a className="hover:text-primary transition cursor-pointer">
                Sobre
              </a>
            </div>
          </div>

          {/* CONTATO */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              Contato
            </h4>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <p>Atendimento online</p>
              <p>Brasil</p>

              <a className="hover:text-primary transition cursor-pointer">
                WhatsApp
              </a>

              <a className="hover:text-primary transition cursor-pointer">
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">

          <p>© 2026 Flávia Cristina. Todos os direitos reservados.</p>

          <div className="flex gap-6">
            <a className="hover:text-primary transition cursor-pointer">
              Privacidade
            </a>
            <a className="hover:text-primary transition cursor-pointer">
              Termos
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}