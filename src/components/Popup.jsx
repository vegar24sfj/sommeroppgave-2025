const Popup = ({ description }) => {
  return (
    <div className="bg-white bg-opacity-90 text-black p-4 shadow-lg max-w-xs rounded-md whitespace-normal break-words">
      {description}
    </div>
  );
};

export default Popup;
