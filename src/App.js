import React from "react";
import "./index.css";
import { Header, Filters } from "./components";

function App() {
  return (
    <>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="master">
        <Header />
        <Filters />
      </div>
    </>
  );
}

export default App;
