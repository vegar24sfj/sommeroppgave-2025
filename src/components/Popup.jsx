import React from "react";

const Popup = ({ description }) => {
  return (
    <div className="bg-white text-black p-4 rounded shadow-lg w-[300px] max-w-[90vw] text-left">
      {description}
    </div>
  );
};

export default Popup;
