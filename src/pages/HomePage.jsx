import React from "react";
import { planets } from "../data/planetData";
import PlanetCard from "../components/PlanetCard";

export default function HomePage() {
  return (
    <div className="relative z-30 px-6 animate-fadeInUp-fast">
      <div className="flex flex-nowrap justify-center gap-6 overflow-visible">
        {planets.map((planet) => (
          <PlanetCard
            key={planet.id}
            name={planet.name}
            image={planet.image}
            description={planet.description}
          />
        ))}
      </div>
    </div>
  );
}
