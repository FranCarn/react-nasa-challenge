import moment from "moment";
import React from "react";

export const DateFilter = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-col">
      <p className="flex justify-center">DATE TYPE</p>
      <select
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        className=" cursor-pointer rounded-xl h-8 w-40 px-2 my-2 bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
      >
        <option value="earth">EARTH DATE</option>
        <option value="sol">SOL DATE</option>
      </select>
      {filters.type === "earth" ? (
        <input
          className="rounded-xl h-8 px-2 my-2 w-40  bg-slate-400 outline-none  focus:outline-none"
          type="date"
          max={moment().format("YYYY-MM-DD")}
          value={filters.earth}
          onChange={(e) => {
            setFilters({ ...filters, earth: e.target.value });
          }}
        />
      ) : (
        <input
          className="rounded-xl h-8 px-2 my-2 w-40  bg-slate-400 outline-none  focus:outline-none"
          value={filters.sol}
          onChange={(e) => {
            setFilters({ ...filters, sol: e.target.value });
          }}
          type="number"
          min="0"
        />
      )}
    </div>
  );
};
