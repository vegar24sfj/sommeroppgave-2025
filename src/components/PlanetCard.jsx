// Fjern denne linjen hvis useState ikke brukes her
// import { useState } from "react";

const PlanetCard = ({ name, image, color, onClick }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full cursor-pointer transition-transform duration-300 ease-in-out"
      onClick={onClick}
    >
      <div className="relative w-16 h-16">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-full animate-fadeScaleInFast"
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
        <span
          className="absolute inset-0 flex items-center justify-center text-[10px] font-bold bg-black bg-opacity-40 rounded-full pointer-events-none"
          style={{ color }}
        >
          {name}
        </span>
      </div>
    </div>
  );
};

export default PlanetCard;
