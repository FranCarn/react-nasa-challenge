import React from "react";

export const Header = () => {
  return (
    <>
      <header className="h-16 flex items-center fixed w-full">
        <img
          alt="mars-logo"
          src="https://cdn-icons-png.flaticon.com/512/124/124582.png"
          className="h-10 px-6"
        />
        <span className="font-bold">NASA MARS CAMERAS</span>
      </header>
    </>
  );
};
