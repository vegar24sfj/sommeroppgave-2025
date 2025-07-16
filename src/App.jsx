import React from "react";

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

const planetImages = {
  merkur:
    "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mercury_globe.jpg",
  venus:
    "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
  jorden:
    "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
  mars:
    "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  jupiter: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
  saturn:
    "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  neptun: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
};

function App() {
  const leftPlanets = planets.slice(0, 4);
  const rightPlanets = planets.slice(4, 8);

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <header className="bg-blue-800 sticky top-0 z-10 shadow">
        <nav className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          {/* Logo og navn */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold select-none cursor-default">🌌</div>
            <span className="text-xl font-semibold">Planetside</span>
          </div>

          {/* Kontakt-lenke */}
          <div>
            <a href="#kontakt" className="hover:underline text-sm sm:text-base">
              Kontakt
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-48 items-start">
        {/* Venstre kolonne */}
        <div className="space-y-16">
          {leftPlanets.map((planet) => (
            <section key={planet.id} id={planet.id} className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-2">{planet.name}</h2>
              <p className="text-base mb-4">
                Her kan du legge til informasjon om {planet.name.toLowerCase()}.
              </p>
              <img
                src={planetImages[planet.id]}
                alt={`${planet.name} bilde`}
                className="rounded shadow max-w-full"
                loading="lazy"
              />
            </section>
          ))}
        </div>

        {/* Midtkolonne med stort bilde */}
        <div className="hidden md:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
            alt="Illustrasjon mellom kolonner"
            className="rounded shadow mx-auto max-h-[800px] object-contain"
            loading="lazy"
          />
        </div>

        {/* Høyre kolonne */}
        <div className="space-y-16">
          {rightPlanets.map((planet) => (
            <section key={planet.id} id={planet.id} className="scroll-mt-20">
              <h2 className="text-2xl font-bold mb-2">{planet.name}</h2>
              <p className="text-base mb-4">
                Her kan du legge til informasjon om {planet.name.toLowerCase()}.
              </p>
              <img
                src={planetImages[planet.id]}
                alt={`${planet.name} bilde`}
                className="rounded shadow max-w-full"
                loading="lazy"
              />
            </section>
          ))}
        </div>
      </main>

      {/* Kontakt-seksjon */}
      <section
        id="kontakt"
        className="max-w-6xl mx-auto p-6 mt-24 text-center scroll-mt-20"
      >
        <h2 className="text-3xl font-bold mb-4">Kontakt oss</h2>
        <p className="text-base max-w-xl mx-auto">
          Her kan du legge inn kontaktinformasjon, e-post, telefon, eller et
          kontaktskjema.
        </p>
      </section>

      <footer className="bg-gray-800 text-center p-4 mt-16 text-sm text-gray-400">
        <p>Laget av [Ditt Navn] – Sommeroppgave 2025</p>
      </footer>
    </div>
  );
}

export default App;
