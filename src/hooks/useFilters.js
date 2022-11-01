import moment from "moment";
import { useEffect, useState } from "react";
import { getPhotos } from "../api";

export const useFilters = () => {
  const [filters, setFilters] = useState({
    rover: "curiosity",
    camera: "all",
    type: "earth",
    earth: moment().format("YYYY-MM-DD"),
    sol: 0,
  });
  const [saveFilters, setSaveFilters] = useState(
    () => JSON.parse(localStorage.getItem("saveFilters")) || []
  );
  const [photosArray, setPhotosArray] = useState([]);

  const onSave = () => {
    if (JSON.stringify(saveFilters).includes(JSON.stringify(filters))) return;
    if (saveFilters.length <= 4) {
      setSaveFilters([...saveFilters, { ...filters }]);
    }
  };

  const setActiveFilter = (id) => {
    const setActive = saveFilters[id];
    setFilters({ ...setActive });
  };

  const deleteFilter = (id) => {
    const newFilter = [...saveFilters];
    newFilter.splice(id, 1);
    setSaveFilters([...newFilter]);
  };
  const deleteAllFilters = () => {
    localStorage.clear();
    setSaveFilters([]);
  };

  useEffect(() => {
    const getData = async () => {
      const photos = await getPhotos(filters);
      setPhotosArray(photos);
    };
    getData();
  }, [filters]);

  useEffect(() => {
    localStorage.setItem("saveFilters", JSON.stringify(saveFilters));
  }, [saveFilters]);

  return {
    filters,
    saveFilters,
    photosArray,
    setFilters,
    onSave,
    setActiveFilter,
    deleteFilter,
    deleteAllFilters,
  };
};
