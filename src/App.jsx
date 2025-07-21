import React from "react";
import { planets } from "./data/planetData";
import PlanetCard from "./components/PlanetCard";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <header className="text-center text-3xl font-bold mb-10 flex justify-between items-center p-6 relative z-30">
        <div>🌌 Planetside</div>
        <nav>
          <a href="#contact" className="text-blue-400 hover:underline">
            Kontakt
          </a>
        </nav>
      </header>

      {/* Fade overlay starter litt ned for å beholde stjernene tydelig i header */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[120px] bottom-[160px] z-20"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      ></div>

      {/* Planeter */}
      <div className="flex flex-nowrap justify-center gap-2 mb-40 px-6 relative z-30 overflow-visible">
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
        className="bg-gradient-to-b from-black via-blue-900 to-white text-black py-28 px-6 relative z-30"
      >
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-[#001f3f] via-[#0077cc] to-white text-white text-center py-6 relative z-30">
  <p className="text-sm text-black">
    © {new Date().getFullYear()}{" "}
    <span className="text-white font-semibold">Planetside</span> 🌍 Alle
    rettigheter reservert.
  </p>
</footer>






    </div>
  );
}

export default App;
