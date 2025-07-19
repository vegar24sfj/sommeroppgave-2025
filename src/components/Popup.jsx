import React from "react";

export default function Popup({ description, position }) {
  return (
    <div
      className="absolute bg-black bg-opacity-60 text-white p-6 rounded-lg shadow-lg z-50 max-w-[600px] max-h-[80vh] overflow-auto"
      style={{
        top: position.top,
        left: position.left,
        width: "600px",
        maxWidth: "95vw",
      }}
      onClick={(e) => e.stopPropagation()} // stop click propagation to avoid closing popup
    >
      <div className="whitespace-normal">{description}</div>
    </div>
  );
}
