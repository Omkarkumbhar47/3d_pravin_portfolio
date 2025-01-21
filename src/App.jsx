import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Projects from "./pages/Projects.jsx";
import Gallery from "./Components/Gallery.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ModelViewer from "./Components/ModelViewer.jsx";

const App = () => {
  const [images, setImages] = useState([
    {
      src: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Portrait Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1735583100223-40a01e52ef0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Landscape Image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Portrait Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1735707370784-9b3e8dd9e8b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
      alt: "Landscape Image 2",
    },
    {
      src: "https://images.unsplash.com/photo-1736192326255-89d26db112c3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Portrait Image 3",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1734549547925-153584e3b1ac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Landscape Image 3",
    },
  ]);
  const [count, setCount] = useState(images.length); 
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setCount(images.length);
  }, [images]);


  // const handleCountChange = (newCount) => {
  //   setCount(newCount);
  // };

  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              count={count}x  
              // CountChange={handleCountChange}
              setOpenMenu={setOpenMenu}
              openMenu={openMenu}
            />
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/gallery"
          element={
            <Gallery
              // onCountChange={handleCountChange}
              images={images}
              setImages={setImages}
              count={count}
              setOpenMenu={setOpenMenu}
              openMenu={openMenu}
            />
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/viewer" element={<ModelViewer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
