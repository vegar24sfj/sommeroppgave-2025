import React, { useState } from "react";
import Popup from "./Popup";

const PlanetCard = ({ name, image, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-72 text-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={image}
        alt={name}
        className={`w-72 h-72 object-contain mx-auto transition-transform duration-300 ease-in-out ${
          hover
            ? "scale-150 drop-shadow-[0_0_40px_rgba(0,255,255,0.8)]"
            : "drop-shadow-lg"
        }`}
      />

      <h3
  style={{ fontFamily: "'Orbitron', sans-serif" }}
  className="mt-3 font-semibold text-white drop-shadow-[0_0_10px_cyan] transition-colors duration-500 animate-pulse"
>
  {name}
</h3>



      {hover && (
        <div className="absolute top-full left-1/2 mt-3 -translate-x-1/2 z-50 w-[320px]">
          <Popup description={description} />
        </div>
      )}
    </div>
  );
};

export default PlanetCard;
