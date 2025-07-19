import React, { useState } from "react";
import Popup from "./components/Popup";
import { planetDescriptions } from "./data/planetData";

const planets = [
  { id: "merkur", name: "Merkur" },
  { id: "venus", name: "Venus" },
  { id: "jorden", name: "jorden" },
  { id: "mars", name: "mars" },
  { id: "jupiter", name: "jupiter" },
  { id: "saturn", name: "saturn" },
  { id: "uranus", name: "uranus" },
  { id: "neptun", name: "neptun" },
];

const planetImages = {
  merkur: "https://upload.wikimedia.org/wikipedia/commons/3/30/Mercury_in_color_-_Prockter07_centered.jpg",
  venus: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
  jorden: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
  mars: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
  jupiter: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
  saturn: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
  uranus: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
  neptun: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
};

function App() {
  const [activePlanet, setActivePlanet] = useState(null);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });

  const handleClick = (event, planetId) => {
    event.stopPropagation();
    const imgRect = event.currentTarget.getBoundingClientRect();
    const spaceRight = window.innerWidth - imgRect.right;

    const left = spaceRight > 610 ? imgRect.right + 10 : imgRect.left - 610 - 10;
    const top = imgRect.top + window.scrollY;

    setPopupPos({ top, left });
    setActivePlanet((prev) => (prev === planetId ? null : planetId));
  };

  const handleClosePopup = () => {
    setActivePlanet(null);
  };

  const leftPlanets = planets.slice(0, 4);
  const rightPlanets = planets.slice(4, 8);

  const renderPlanetSection = (planet) => (
    <section
      key={planet.id}
      id={planet.id}
      className="scroll-mt-20 max-w-[900px] mx-auto"
    >
      <h2 className="text-2xl font-bold mb-2">{planet.name}</h2>
      <img
        src={planetImages[planet.id]}
        alt={`${planet.name} bilde`}
        className="rounded shadow max-w-full cursor-pointer transition-transform duration-300 hover:scale-105"
        loading="lazy"
        onClick={(e) => handleClick(e, planet.id)}
      />
    </section>
  );

  return (
    <div
      className="bg-black text-white font-sans min-h-screen"
      onClick={() => {
        if (activePlanet) handleClosePopup();
      }}
    >
      <header className="bg-blue-800 sticky top-0 z-10 shadow">
        <nav className="max-w-6xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold select-none cursor-default">🌌</div>
            <span className="text-xl font-semibold">Planetside</span>
          </div>
          <div>
            <a href="#kontakt" className="hover:underline text-sm sm:text-base">
              Kontakt
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-[1.2fr_auto_1.2fr] gap-12 md:gap-48 items-start">
        <div className="space-y-16">{leftPlanets.map(renderPlanetSection)}</div>

        <div className="hidden md:block">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg"
            alt="Solen"
            className="rounded shadow mx-auto max-h-[800px] object-contain"
            loading="lazy"
          />
        </div>

        <div className="space-y-16">{rightPlanets.map(renderPlanetSection)}</div>
      </main>

      {activePlanet && (
        <Popup
          description={planetDescriptions[activePlanet]}
          onClose={handleClosePopup}
          position={popupPos}
        />
      )}

      <section
        id="kontakt"
        className="max-w-6xl mx-auto p-6 mt-24 text-center scroll-mt-20"
      >
        <h2 className="text-3xl font-bold mb-4">Kontakt oss</h2>
        <p className="text-base max-w-xl mx-auto">
          Her kan du legge inn kontaktinformasjon, e-post, telefon eller et kontaktskjema.
        </p>
      </section>

      <footer className="bg-gray-800 text-center p-4 mt-16 text-sm text-gray-400">
        &copy; 2025 Planetside – Laget med React og Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
