import React from "react";
import { planets } from "./data/planetData";
import PlanetCard from "./components/PlanetCard";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <header className="text-center text-3xl font-bold mb-10 flex justify-between items-center p-6">
        <div>🌌 Planetside</div>
        <nav>
          <a href="#contact" className="text-blue-400 hover:underline">
            Kontakt
          </a>
        </nav>
      </header>

      {/* Planeter */}
      <div className="flex flex-wrap justify-center gap-10 mb-40 px-6">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            name={planet.name}
            image={planet.image}
            description={planet.description}
          />
        ))}
      </div>

      {/* Kontaktseksjon med overgangseffekt */}
      <div
        id="contact"
        className="bg-gradient-to-b from-black via-blue-900 to-white text-black py-24 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
