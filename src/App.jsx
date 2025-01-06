import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Projects from "./pages/Projects.jsx";
import Gallery from "./Components/Gallery.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" elements={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
