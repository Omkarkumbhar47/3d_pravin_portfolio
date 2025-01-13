import React, { useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Projects from "./pages/Projects.jsx";
import Gallery from "./Components/Gallery.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ModelViewer from "./Components/ModelViewer.jsx"

const App = () => {
  const [count, setCount] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout  count={count}/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery onCountChange={handleCountChange} count={count} setOpenMenu={setOpenMenu} openMenu={openMenu}/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/viewer" element={<ModelViewer
         />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
