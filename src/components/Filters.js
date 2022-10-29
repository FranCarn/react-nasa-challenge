import React from "react";
import Moment from "moment";
import { ImgGallery, SaveFilters } from "./";
import "../index.css";
import { useFilters } from "../hooks";

export const Filters = () => {
  const {
    filters,
    photos,
    rovers,
    otherCameras,
    curiosityCameras,
    setFilters,
    onSave,
    setActiveFilter,
    deleteFilter,
    deleteAllFilters,
    saveFilters,
  } = useFilters();

  return (
    <div className="flex align-middle text-center">
      <nav className="sidenav flex flex-col items-center fixed mt-16">
        <h2 className="text-center m-7">FILTERS</h2>
        <hr className="h-2 w-full mb-4" />
        <div>
          <div>
            <p className="flex justify-center "> ROVER </p>
            <select
              value={filters.rover}
              onChange={(e) =>
                setFilters({ ...filters, rover: e.target.value })
              }
              id="rover-filter"
              className="zinc cursor-pointer rounded-xl h-8 w-40 px-2 my-2 bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
            >
              {rovers?.map((item) => (
                <option className="zinc" key={item} value={item}>
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="flex justify-center">CAMERA</p>
            <select
              value={filters.camera}
              onChange={(e) =>
                setFilters({ ...filters, camera: e.target.value })
              }
              className="zinc cursor-pointer rounded-xl h-8 w-40 px-2 my-2 bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
            >
              {filters.rover === "curiosity"
                ? curiosityCameras.map((item) => (
                    <option key={item} value={item}>
                      {item.toUpperCase()}
                    </option>
                  ))
                : otherCameras.map((item) => (
                    <option key={item} value={item}>
                      {item.toUpperCase()}
                    </option>
                  ))}
            </select>
          </div>
          <div className="flex flex-col">
            <p className="flex justify-center">DATE TYPE</p>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="zinc cursor-pointer rounded-xl h-8 w-40 px-2 my-2 bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
            >
              <option value="earth">EARTH DATE</option>
              <option value="sol">SOL DATE</option>
            </select>
            {filters.type === "earth" ? (
              <input
                className="rounded-xl h-8 px-2 my-2 w-40  bg-slate-400 outline-none  focus:outline-none"
                type="date"
                max={Moment().format("YYYY-MM-DD")}
                value={filters.earth}
                onChange={(e) => {
                  setFilters({ ...filters, earth: e.target.value });
                }}
              />
            ) : (
              <input
                className="rounded-xl h-8 px-2 my-2 w-40  bg-slate-400 outline-none  focus:outline-none"
                value={filters.sol}
                onChange={(e) =>
                  setFilters({ ...filters, sol: e.target.value })
                }
                type="number"
                min="0"
              />
            )}
          </div>
        </div>
        <div className="flex w-full mt-6">
          <button
            className="zinc cursor-pointer rounded-2xl w-1/2 h-16 px-2 my-2 ml-2 mt-1 text-base bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
            onClick={onSave}
          >
            Save actual filter
          </button>
          <button
            className="zinc cursor-pointer rounded-2xl w-1/2 h-16 px-2 m-2 ml-2 mt-1 text-base bg-slate-400 outline-none  transition-all duration-300 ease-in-out hover:bg-slate-300 focus:outline-none border-none"
            onClick={deleteAllFilters}
          >
            Delete all filters
          </button>
        </div>

        <div className={saveFilters.length !== 0 ? "block" : "hidden"}>
          {saveFilters.map((item, i) => (
            <SaveFilters
              item={item}
              i={i}
              setActiveFilter={setActiveFilter}
              deleteFilter={deleteFilter}
            />
          ))}
        </div>
      </nav>
      <ImgGallery photos={photos} />
    </div>
  );
};
