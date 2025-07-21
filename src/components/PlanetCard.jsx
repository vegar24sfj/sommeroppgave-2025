import React, { useState } from "react";
import Popup from "./Popup";

const PlanetCard = ({ name, image, description }) => {
  const [hover, setHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative w-40 text-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
    >
      <img
  src={image}
  alt={name}
  className={`rounded-full w-40 h-40 object-cover mx-auto transition-transform duration-300 ease-in-out ${
    hover ? "scale-110 shadow-[0_0_30px_0_rgba(0,255,255,0.6)]" : "shadow-lg"
  }`}
/>

      <h3 className="mt-2 font-semibold">{name}</h3>

      {hover && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            top: mousePosition.y + 20,
            left: mousePosition.x,
            transform: "translateX(-50%)",
            maxWidth: "90vw",
          }}
        >
          <Popup description={description} />
        </div>
      )}
    </div>
  );
};

export default PlanetCard;
