// src/pages/HomePage.jsx
import { planets } from "../data/planetData";
import PlanetCard from "../components/PlanetCard";

export default function HomePage() {
  return (
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
  );
}
