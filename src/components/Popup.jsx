import React from "react";

const Popup = ({ description }) => {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-md text-black p-3 shadow-lg text-left text-sm whitespace-normal break-words rounded-md">
      {description}
    </div>
  );
};

export default Popup;
