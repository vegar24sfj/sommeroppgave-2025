import { useState } from "react";
import { planets } from "../data/planetData";
import Popup from "../components/Popup";

export default function HomePage() {
  const baseOrbit = 80;
  const orbitSpacing = 45; // Økt avstand mellom planetene
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planet) => {
    console.log("Clicked planet:", planet.name);
    setSelectedPlanet(planet);
  };

  const closePopup = () => {
    setSelectedPlanet(null);
  };

  return (
    <div className="relative z-30 w-full h-[600px] max-w-5xl mx-auto flex">
      <div className="relative flex-grow h-full pointer-events-auto z-30">
        {/* Sol i midten */}
        <div className="absolute left-1/2 top-1/2 w-16 h-16 bg-yellow-400 rounded-full shadow-lg z-40 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-sun" />

        {planets.map((planet, index) => {
          const orbitRadius = baseOrbit + index * orbitSpacing;
          const duration = 20 + index * 3; // Senk hastigheten på rotasjon
          const delay = (duration / planets.length) * index;

          return (
            <div
              key={planet.id}
              className="absolute left-1/2 top-1/2 pointer-events-auto"
              style={{
                width: orbitRadius * 2,
                height: orbitRadius * 2,
                marginLeft: -orbitRadius,
                marginTop: -orbitRadius,
                animation: `orbit ${duration}s linear infinite`,
                animationDelay: `-${delay}s`,
                borderRadius: "50%",
                zIndex: 100 - index, // Dynamisk z-index for å sørge for at de nærmere har høyere z-index
              }}
            >
              <div
                className="relative z-50 animate-fadeScaleInQuickStart"
                style={{ transform: `translateX(${orbitRadius}px)` }}
              >
                <div
                  onClick={() => handlePlanetClick(planet)}
                  title={planet.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xs md:text-sm font-bold cursor-pointer hover:scale-110 transition-transform shadow-md"
                  style={{
                    backgroundColor: planet.color,
                    boxShadow: `0 0 8px ${planet.color}`,
                    color: "#000",
                    zIndex: 50,
                  }}
                >
                  {planet.name[0]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Popup ved siden av animasjonen */}
      {selectedPlanet && (
        <Popup
          name={selectedPlanet.name}
          image={selectedPlanet.image}
          description={selectedPlanet.description}
          onClose={closePopup}
        />
      )}
    </div>
  );
}
