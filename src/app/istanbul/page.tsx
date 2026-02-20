export default function Istanbul() {
  const venues = [
    { name: "Sortie", area: "Ortaköy" },
    { name: "Ruby", area: "Beşiktaş" },
    { name: "Lucca", area: "Bebek" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-10">İstanbul</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {venues.map((venue, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-xl border border-zinc-800"
          >
            <h2 className="text-xl font-bold">{venue.name}</h2>
            <p className="text-zinc-400">{venue.area}</p>
          </div>
        ))}
      </div>
    </main>
  );
}