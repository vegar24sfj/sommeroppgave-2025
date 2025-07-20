import React from "react";
import { planets } from "./data/planetData";
import PlanetCard from "./components/PlanetCard";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <header className="text-center text-3xl font-bold mb-10 flex justify-between items-center">
        <div>🌌 Planetside</div>
        <nav>
          <a href="#contact" className="text-blue-400 hover:underline">
            Kontakt
          </a>
        </nav>
      </header>

      {/* Planeter */}
      <div className="flex flex-wrap justify-center gap-10 mb-28">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            name={planet.name}
            image={planet.image}
            description={planet.description}
          />
        ))}
      </div>

      {/* Kontakt-skjema */}
      <div className="mt-96"></div>
      <ContactForm />
    </div>
  );
}

export default App;
