import React from "react";
import PropTypes from "prop-types";
import "../../index.css";
export const Buttons = ({ filtersHook }) => {
  const { onSave, deleteAllFilters } = filtersHook;
  return (
    <div className="flex w-full mt-6">
      <button
        className="zinc cursor-pointer rounded-2xl w-1/2 h-16 px-2 my-2 ml-2 mt-1 text-base bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
        onClick={() => onSave()}
      >
        Save filter
      </button>
      <button
        className="zinc cursor-pointer rounded-2xl w-1/2 h-16 px-2 m-2 ml-2 mt-1 text-base bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
        onClick={() => deleteAllFilters()}
      >
        Delete all
      </button>
    </div>
  );
};

Buttons.propTypes = {
  filtersHook: PropTypes.object.isRequired,
};
