import React from "react";
import PropTypes from "prop-types";
import { Buttons, SavedFilters } from "./";

export const StoreDataComponent = ({ filtersHook }) => {
  const { saveFilters } = filtersHook;
  return (
    <>
      <Buttons filtersHook={filtersHook} />

      <div className={saveFilters.length !== 0 ? "block" : "hidden"}>
        {saveFilters.map((item, i) => (
          <SavedFilters key={i} item={item} i={i} filtersHook={filtersHook} />
        ))}
      </div>
    </>
  );
};

StoreDataComponent.propTypes = {
  filtersHook: PropTypes.object.isRequired,
};
