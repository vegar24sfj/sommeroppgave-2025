import React from "react";

const Popup = ({ description }) => {
  return (
    <div className="bg-gray-800 bg-opacity-80 text-white p-4 rounded-md shadow-lg whitespace-normal break-words w-full">
      {description}
    </div>
  );
};

export default Popup;
