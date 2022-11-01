import React from "react";
import PropTypes from "prop-types";

export const RoverFilter = ({ title, value, filters, rovers, setFilters }) => {
  return (
    <>
      <p className="flex justify-center "> {title.toUpperCase()} </p>
      <select
        value={value}
        onChange={(e) => setFilters({ ...filters, [title]: e.target.value })}
        id={`${title}-filter`}
        className=" cursor-pointer rounded-xl h-8 w-40 px-2 my-2 bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
      >
        {rovers.map((item) => (
          <option key={item} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
};

RoverFilter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setFilters: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  rovers: PropTypes.array.isRequired,
};
