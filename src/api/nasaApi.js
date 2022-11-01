import axios from "axios";
import PropTypes from "prop-types";

export const getPhotos = async (filters, page = 1) => {
  const { rover, type, earth, sol, camera } = filters;

  const api = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });

  const url = `${rover}/photos?${
    type === "earth" ? `earth_date=${earth}` : `sol=${sol}`
  }${camera === "all" ? "" : `&camera=${camera}`}&page=${page}`;

  try {
    const res = await api.get(url);
    return res.data.photos;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getPagePhotos = async (filters, page) => {
  const { rover, type, earth, sol, camera } = filters;

  const api = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  });

  const url = `${rover}/photos?${
    type === "earth" ? `earth_date=${earth}` : `sol=${sol}`
  }${camera === "all" ? "" : `&camera=${camera}`}&page=${page}`;

  try {
    const res = await api.get(url);
    return res.data.photos;
  } catch (err) {
    console.error(err);
    return [];
  }
};

getPhotos.propTypes = {
  filters: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
};

getPagePhotos.propTypes = {
  filters: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
};
