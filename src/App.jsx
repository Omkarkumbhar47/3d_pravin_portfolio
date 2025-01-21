import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Projects from "./pages/Projects.jsx";
import Gallery from "./Components/Gallery.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ModelViewer from "./Components/ModelViewer.jsx";
import img23 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";
import img13 from "./assets/img/img3.jpg";
import img4 from "./assets/img/img4.jpg";
import img5 from "./assets/img/img5.jpg";
import img6 from "./assets/img/img6.jpg";
import img7 from "./assets/img/img7.jpg";
import img8 from "./assets/img/img8.jpg";
import img9 from "./assets/img/img9.jpg";
import img10 from "./assets/img/img10.jpg";
import img11 from "./assets/img/img11.jpg";
import img12 from "./assets/img/img12.jpg";
import img3 from "./assets/img/img13.jpg";
import img14 from "./assets/img/img14.jpg";
import img15 from "./assets/img/img15.jpg";
import img16 from "./assets/img/img16.jpg";
import img17 from "./assets/img/img17.jpg";
import img18 from "./assets/img/img18.jpg";
import img19 from "./assets/img/img19.jpg";
import img20 from "./assets/img/img20.jpg";
import img21 from "./assets/img/img21.jpg";
import img22 from "./assets/img/img22.jpg";
import img1 from "./assets/img/img23.jpg";
import img24 from "./assets/img/img24.jpg";
import img25 from "./assets/img/img25.jpg";
import img26 from "./assets/img/img26.jpg";
import img27 from "./assets/img/img27.jpg";
import img28 from "./assets/img/img28.jpg";
import img29 from "./assets/img/img29.jpg";
import img30 from "./assets/img/img30.jpg";
import img31 from "./assets/img/img31.jpg";
import img32 from "./assets/img/img32.jpg";
// import img33 from "./assets/img/img33.jpg";
const App = () => {
  const [images, setImages] = useState([
    { src: img1, alt: "Portrait Image 1" },
    { src: img2, alt: "Portrait Image 2" },
    { src: img3, alt: "Portrait Image 3" },
    { src: img4, alt: "Portrait Image 4" },
    { src: img5, alt: "Portrait Image 5" },
    { src: img6, alt: "Portrait Image 6" },
    { src: img7, alt: "Portrait Image 7" },
    { src: img8, alt: "Portrait Image 8" },
    { src: img9, alt: "Portrait Image 9" },
    { src: img10, alt: "Portrait Image 10" },
    { src: img11, alt: "Portrait Image 11" },
    { src: img12, alt: "Portrait Image 12" },
    { src: img13, alt: "Portrait Image 13" },
    { src: img14, alt: "Portrait Image 14" },
    { src: img15, alt: "Portrait Image 15" },
    { src: img16, alt: "Portrait Image 16" },
    { src: img17, alt: "Portrait Image 17" },
    { src: img18, alt: "Portrait Image 18" },
    { src: img19, alt: "Portrait Image 19" },
    { src: img20, alt: "Portrait Image 20" },
    { src: img21, alt: "Portrait Image 21" },
    { src: img22, alt: "Portrait Image 22" },
    { src: img23, alt: "Portrait Image 23" },
    { src: img24, alt: "Portrait Image 24" },
    { src: img25, alt: "Portrait Image 25" },
    { src: img26, alt: "Portrait Image 26" },
    { src: img27, alt: "Portrait Image 27" },
    { src: img28, alt: "Portrait Image 28" },
    { src: img29, alt: "Portrait Image 29" },
    { src: img30, alt: "Portrait Image 30" },
    { src: img31, alt: "Portrait Image 31" },
    { src: img32, alt: "Portrait Image 32" },
    // { src: img33, alt: "Portrait Image 33" },
  ]);

  const [count, setCount] = useState(images.length);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setCount(images.length + 8);
  }, [images]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              count={count}
              x
              setOpenMenu={setOpenMenu}
              openMenu={openMenu}
            />
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/gallery"
          element={
            <Galler
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
