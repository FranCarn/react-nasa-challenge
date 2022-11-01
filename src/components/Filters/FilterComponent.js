import React from "react";
import PropTypes from "prop-types";
import { CameraFilter, DateFilter, RoverFilter } from "./";
import { getRoversData } from "../../helpers";

export const FilterComponent = ({ filtersHook }) => {
  const { filters, setFilters } = filtersHook;
  const { rovers, cameras } = getRoversData;
  return (
    <>
      <div className="flex flex-col justify-between items-center">
        <div>
          <RoverFilter
            title={"rover"}
            value={filters.rover}
            filters={filters}
            setFilters={setFilters}
            rovers={rovers}
          />
        </div>
        <div>
          <CameraFilter
            title={"camera"}
            value={filters.camera}
            filters={filters}
            setFilters={setFilters}
            cameras={cameras}
          />
        </div>
        <DateFilter filters={filters} setFilters={setFilters} />
      </div>
    </>
  );
};
FilterComponent.propTypes = {
  filtersHook: PropTypes.object.isRequired,
};
