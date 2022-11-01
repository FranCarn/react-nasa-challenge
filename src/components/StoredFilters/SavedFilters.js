import React from "react";
import PropTypes from "prop-types";

export const SavedFilters = ({ item, i, filtersHook }) => {
  const { setActiveFilter, deleteFilter } = filtersHook;
  return (
    <div
      className="ml-2 mt-2 flex justify-center w-full items-center"
      key={i}
      id={i}
    >
      <span>{i + 1}:</span>

      <button
        className="m-2 cursor-pointer w-52 hover:tracking-wide"
        onClick={() => setActiveFilter(i)}
      >
        {item.rover.toUpperCase()} - {item.camera.toUpperCase()} -{" "}
        {item.type.toUpperCase()} -{" "}
        {item.type === "earth" ? item.earth : item.sol}
      </button>
      <button
        className="w-10 h-10 cursor-pointer rounded-xl px-2 my-2 mr-3 bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
        onClick={() => deleteFilter(i)}
      >
        <i className="fa-solid fa-trash-can text-red-700"></i>
      </button>

      <hr className="text-white h-2" />
    </div>
  );
};

SavedFilters.propTypes = {
  item: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
  filtersHook: PropTypes.object.isRequired,
};
