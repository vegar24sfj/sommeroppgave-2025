// src/components/Popup.jsx
import React from "react";

const Popup = ({ name, image, description, onClose }) => {
  return (
    <div className="fixed top-20 right-6 z-50 max-w-sm w-72 bg-gray-900 bg-opacity-90 text-white p-4 rounded-md shadow-lg animate-fadeInUp max-h-[400px] overflow-y-auto">
      <button
        onClick={onClose}
        className="text-white float-right font-bold mb-2 hover:text-red-500"
        aria-label="Lukk popup"
      >
        ×
      </button>
      <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        {name}
      </h2>
      <img
        src={image}
        alt={name}
        className="w-full h-auto rounded-md mb-3 object-contain"
      />
      <div className="text-xs">{description}</div>
    </div>
  );
};

export default Popup;
