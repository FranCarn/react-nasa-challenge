import moment from "moment";
import { useEffect, useState } from "react";
import { useNasaApi } from "../api";
import { getRoversData } from "../helpers";

export const useFilters = () => {
  const [filters, setFilters] = useState({
    rover: "curiosity",
    camera: "all",
    type: "earth",
    earth: moment().format("YYYY-MM-DD"),
    sol: 0,
  });
  const [saveFilters, setSaveFilters] = useState(
    JSON.parse(localStorage.getItem("saveFilters")) || []
  );
  const { getPhotos, photos } = useNasaApi();
  const { rovers, otherCameras, curiosityCameras } = getRoversData;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onSave = () => {
    if (JSON.stringify(saveFilters).includes(JSON.stringify(filters))) return;
    if (saveFilters.length <= 4) {
      setSaveFilters([
        ...saveFilters,
        {
          rover: filters.rover,
          camera: filters.camera,
          type: filters.type,
          earth: filters.earth,
          sol: filters.sol,
        },
      ]);
    }
  };

  const setActiveFilter = (e) => {
    const setActive = saveFilters[e.target.parentElement.id];
    setFilters({
      rover: setActive.rover,
      camera: setActive.camera,
      type: setActive.type,
      earth: setActive.earth,
      sol: setActive.sol,
    });
  };

  const deleteFilter = (e) => {
    const newFilter = [...saveFilters];
    newFilter.splice(e.target.parentElement.id, 1);
    setSaveFilters([...newFilter]);
  };
  const deleteAllFilters = (e) => {
    localStorage.clear();
    setSaveFilters([]);
  };

  useEffect(() => {
    getPhotos(filters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  useEffect(() => {
    localStorage.setItem("saveFilters", JSON.stringify(saveFilters));
  }, [saveFilters]);
  return {
    filters,
    photos,
    rovers,
    otherCameras,
    curiosityCameras,
    saveFilters,
    setFilters,
    getPhotos,
    onSave,
    setActiveFilter,
    deleteFilter,
    deleteAllFilters,
  };
};
