import React, { useState } from "react";
import { planets } from "../data/planetData";
import PlanetCard from "../components/PlanetCard";
import Popup from "../components/Popup";

export default function HomePage() {
  const baseOrbit = 80;
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
      <div className="relative flex-grow h-full">
        {/* Sol i midten */}
        <div
          className="absolute left-1/2 top-1/2 w-16 h-16 bg-yellow-400 rounded-full shadow-lg z-30 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-sun"
        />

        {planets.map((planet, index) => {
  const orbitRadius = baseOrbit + index * 50;
  const duration = 10 + index * 3;
  // Forskjøvet startposisjon jevnt fordelt:
  const delay = (duration / planets.length) * index;

  return (
    <div
      key={planet.id}
      className="absolute left-1/2 top-1/2"
      style={{
        width: orbitRadius * 2,
        height: orbitRadius * 2,
        marginLeft: -orbitRadius,
        marginTop: -orbitRadius,
        animation: `orbit ${duration}s linear infinite`,
        animationDelay: `-${delay}s`,
        borderRadius: "50%",
      }}
    >
      <div
        style={{ transform: `translateX(${orbitRadius}px)` }}
        className="w-20 h-20 relative cursor-pointer animate-fadeScaleInQuickStart"
      >
        <PlanetCard
          name={planet.name}
          image={planet.image}
          color={planet.color}
          onClick={() => handlePlanetClick(planet)}
        />
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
