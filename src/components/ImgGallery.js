import React from "react";
import "../index.css";

export const ImgGallery = ({ photos }) => {
  if (photos.length === 0)
    return (
      <h2 className="my-32 mx-auto text-2xl">
        Not found images... <br /> Try other filters
      </h2>
    );
  return (
    <div className="mt-20 ml-72 w-full h-full flex flex-wrap justify-evenly">
      {photos.map((item) => (
        <div key={item.id} className="image-gallery-container">
          <a
            className="h-full"
            key={item.id}
            href={item.img_src}
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="w-full" src={item.img_src} alt={item.img_src}></img>
          </a>
        </div>
      ))}
    </div>
  );
};
