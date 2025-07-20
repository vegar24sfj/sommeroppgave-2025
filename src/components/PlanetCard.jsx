import React, { useState } from "react";

const PlanetCard = ({ name, image, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-40 text-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={image} alt={name} className="rounded shadow w-40 h-40 object-cover mx-auto" />
      <h3 className="mt-2 font-semibold">{name}</h3>

      {hover && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 p-3 bg-gray-800 text-white rounded shadow-lg z-10">
          {description}
        </div>
      )}
    </div>
  );
};

export default PlanetCard;
