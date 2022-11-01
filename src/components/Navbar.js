import React, { useState } from "react";
import Modal from "react-modal";
import { FilterComponent } from "./Filters";
import { StoreDataComponent } from "./StoredFilters";
export const Navbar = ({ filtersHook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#2e2e2e",
      maxHeight: "90%",
      maxWidth: "90%",
    },
    overlay: {
      zIndex: 100,
      backgroundColor: "rgba(70, 70, 70, 0.5)",
    },
  };
  Modal.setAppElement("#root");
  return (
    <>
      <nav className="h-16 flex items-center justify-between fixed w-full border-b-2 border-white backdrop-blur-sm">
        <div className="flex items-center">
          <img
            alt="mars-logo"
            src="https://cdn-icons-png.flaticon.com/512/124/124582.png"
            className="h-10 px-6"
          />
          <span className="font-bold">NASA MARS CAMERAS</span>
        </div>
        <div className="xl:hidden flex flex-col items-center pr-4">
          <div>
            <button
              className="px-2 py-1 m-1 rounded-full hover:bg-zinc-500 text-black transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(!isOpen)}
            style={customStyles}
            contentLabel="Filters"
          >
            <div className="flex justify-between items-center pb-2 border-b-2 mb-2">
              <h2>FILTERS</h2>
              <button
                className="px-2 py-1 m-1 rounded-full hover:bg-zinc-500"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <FilterComponent filtersHook={filtersHook} />
            <StoreDataComponent filtersHook={filtersHook} />
          </Modal>
        </div>
      </nav>
    </>
  );
};
