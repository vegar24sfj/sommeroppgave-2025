import React, { useState } from "react";

const PlanetCard = ({ name, image, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-48 text-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={image}
        alt={name}
        className={`rounded-full w-48 h-48 object-cover mx-auto transition-transform duration-300 ease-in-out ${
          hover ? "scale-110 shadow-[0_0_30px_0_rgba(0,255,255,0.6)]" : "shadow-lg"
        }`}
      />

      <h3 className="mt-2 font-semibold">{name}</h3>

      {/* Popup vises statisk under kortet */}
      {hover && (
        <div className="mt-2 bg-white bg-opacity-90 text-black p-4 shadow-lg max-w-xs mx-auto rounded-md whitespace-normal break-words">
          {description}
        </div>
      )}
    </div>
  );
};

export default PlanetCard;
