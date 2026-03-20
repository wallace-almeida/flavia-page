export default function Offer() {
  const items = [
    "Plano alimentar personalizado",
    "Ajustes semanais",
    "Suporte direto",
  ];

  return (
    <section className="py-24 bg-[#0f5238] text-white text-center">
      <h2 className="text-3xl font-bold mb-10">O que você recebe</h2>

      {items.map((i, idx) => (
        <p key={idx}>✔ {i}</p>
      ))}
    </section>
  );
}