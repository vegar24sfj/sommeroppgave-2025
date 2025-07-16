const planets = [
  { id: "merkur", name: "Merkur" },
  { id: "venus", name: "Venus" },
  { id: "jorden", name: "Jorden" },
  { id: "mars", name: "Mars" },
  { id: "jupiter", name: "Jupiter" },
  { id: "saturn", name: "Saturn" },
  { id: "uranus", name: "Uranus" },
  { id: "neptun", name: "Neptun" },
];

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <header className="bg-blue-800 sticky top-0 z-10 shadow">
        <nav className="max-w-6xl mx-auto p-4 flex flex-wrap gap-4 justify-center">
          {planets.map((planet) => (
            <a
              key={planet.id}
              href={`#${planet.id}`}
              className="hover:underline text-sm sm:text-base"
            >
              {planet.name}
            </a>
          ))}
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-16">
        {planets.map((planet) => (
          <section key={planet.id} id={planet.id} className="scroll-mt-20">
            <h2 className="text-3xl font-bold mb-4">{planet.name}</h2>
            <p className="text-lg mb-4">
              Her kan du legge til informasjon om {planet.name.toLowerCase()}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={`/images/${planet.id}1.jpg`}
                alt={`${planet.name} bilde 1`}
                className="rounded shadow"
              />
              <img
                src={`/images/${planet.id}2.jpg`}
                alt={`${planet.name} bilde 2`}
                className="rounded shadow"
              />
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-gray-800 text-center p-4 mt-16 text-sm text-gray-400">
        <p>Laget av [Ditt Navn] – Sommeroppgave 2025</p>
      </footer>
    </div>
  );
}

export default App;
