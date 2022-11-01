import React from "react";
import "./index.css";
import { Navbar, Sidebar, ImgGallery, Layout } from "./components";
import { useFilters } from "./hooks";

function App() {
  const filtersHook = useFilters();

  return (
    <Layout>
      <Navbar filtersHook={filtersHook} />
      <div>
        <Sidebar filtersHook={filtersHook} />
        <ImgGallery filtersHook={filtersHook} />
      </div>
    </Layout>
  );
}

export default App;
