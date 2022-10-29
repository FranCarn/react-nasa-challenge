import { useState } from "react";
import axios from "axios";

export const useNasaApi = () => {
  const [photos, setPhotos] = useState([]);

  const api = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    params: { api_key: process.env.REACT_APP_API_KEY },
  });

  const getPhotos = async ({ rover, camera, type, earth, sol }) => {
    const res = await api.get(
      `${rover}/photos?${
        type === "earth" ? `earth_date=${earth}` : `sol=${sol}`
      }${camera === "all" ? "" : `&camera=${camera}`}&page=1`
    );
    setPhotos(await res.data.photos);
  };

  return {
    api,
    photos,
    getPhotos,
  };
};
