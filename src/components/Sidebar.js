import React from "react";
import { FilterComponent, StoreDataComponent } from "./";

export const Sidebar = ({ filtersHook }) => {
  return (
    <div className="sm:hidden md:hidden lg:hidden h-full w-80 shadow-md shadow-white flex flex-col items-center fixed mt-16">
      <div className="text-center m-7">
        <h2>FILTERS</h2>
      </div>
      <hr className="h-2 w-full mb-4" />
      <FilterComponent filtersHook={filtersHook} />
      <StoreDataComponent filtersHook={filtersHook} />
    </div>
  );
};
