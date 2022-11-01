import React from "react";
import "../index.css";
export const Layout = ({ children }) => {
  return (
    <>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="master">{children}</div>
    </>
  );
};
