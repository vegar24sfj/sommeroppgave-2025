import React from "react";
import { planets } from "./data/planetData";
import PlanetCard from "./components/PlanetCard";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div
      className="min-h-screen text-white relative"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundRepeat: "repeat",
      }}
    >

<div id="top"></div>


      <header className="text-center text-3xl font-bold mb-10 flex justify-between items-center p-6 relative z-30">
        <div>🌌 Planetside</div>
        <nav>
          <a href="#contact" className="text-blue-400 hover:underline">
            Kontakt
          </a>
        </nav>
      </header>

            {/* Planeter: flex rad, tett med gap, overflow-visible slik popup får plass */}
      <div className="flex flex-nowrap justify-center gap-2 mb-56 px-6 relative z-30 overflow-visible">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            name={planet.name}
            image={planet.image}
            description={planet.description}
          />
        ))}
      </div>

      {/* Svart fade over stjernene – ozonlag */}
      <div
        className="w-full h-32 relative z-20 -mt-32"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 100%)",
        }}
      />

      {/* Kontaktseksjon */}
      <div
        id="contact"
        className="bg-gradient-to-b from-black via-blue-900 to-white text-black py-20 px-6 relative z-30 min-h-[400px]"
      >
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>


      {/* Footer */}
      <footer className="bg-gradient-to-t from-[#001f3f] via-[#0077cc] to-white text-white text-center py-10 relative z-40">
  <div className="space-y-4">
    <p className="text-sm text-black">
      © {new Date().getFullYear()}{" "}
      <span className="text-white font-semibold">Planetside</span> 🌍 Alle rettigheter reservert.
    </p>
    <a
      href="#top"
      className="inline-block text-sm text-blue-200 hover:text-white hover:underline transition"
    >
      ⬆ Til toppen
    </a>
  </div>
</footer>

    </div>
  );
}

export default App;
