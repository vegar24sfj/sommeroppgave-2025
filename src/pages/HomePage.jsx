// src/pages/HomePage.jsx
import React from "react";
import { planets } from "../data/planetData";
import PlanetCard from "../components/PlanetCard";

export default function HomePage() {
  return (
    <div className="relative z-30 px-6">
      {/* Planetkort i horisontal rad med god plass og synlig overflow for hover-effekt */}
      <div className="flex flex-nowrap justify-center gap-6 overflow-visible mb-56">
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
