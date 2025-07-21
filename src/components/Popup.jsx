import React from "react";

const Popup = ({ description }) => {
  return (
    <div className="bg-white bg-opacity-90 text-black p-4 rounded shadow-lg text-left whitespace-normal break-words">
      {description}
    </div>
  );
};

export default Popup;
