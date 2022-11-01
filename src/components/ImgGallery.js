import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPagePhotos } from "../api";

export const ImgGallery = ({ filtersHook }) => {
  const { photosArray, filters } = filtersHook;

  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMorePhotos = async () => {
    const newPhotos = await getPagePhotos(filters, page + 1);
    setPage(page + 1);
    setPhotos((prevState) => [...prevState, ...newPhotos]);
  };

  useEffect(() => {
    setPage(1);
    setPhotos([...photosArray]);
  }, [photosArray]);

  if (photos.length === 0)
    return (
      <div className="flex align-middle justify-center">
        <h3 className="my-32 text-2xl">
          Not found images... <br /> Try other filters
        </h3>
      </div>
    );
  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={() => fetchMorePhotos()}
      hasMore={true}
      loader={""}
    >
      <div className="mt-20 xl:pl-72 w-10/12 h-full flex flex-wrap justify-around mx-auto">
        {photos.map((item) => (
          <div
            key={item.id}
            className="w-96 h-96 p-2 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
          >
            <a
              className="h-full"
              href={item.img_src}
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                className="w-full"
                src={item.img_src}
                alt={"marsPhoto"}
              ></img>
            </a>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

ImgGallery.propTypes = {
  filtersHook: PropTypes.object.isRequired,
};
