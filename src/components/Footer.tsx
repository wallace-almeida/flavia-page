export default function Footer() {
  return (
    <footer className="bg-stone-100 mt-20">
      <div className="max-w-7xl mx-auto px-12 py-16 flex flex-col md:flex-row justify-between">

        <div>
          <h3 className="font-bold text-lg">Flavia Cristina</h3>
          <p className="text-sm text-gray-500">Nutrição Estratégica</p>
        </div>

        <div className="flex gap-8 text-sm text-gray-500">
          <a>Privacidade</a>
          <a>Termos</a>
          <a>Contato</a>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 Flavia Cristina
        </p>

      </div>
    </footer>
  );
}