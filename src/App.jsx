import React, { useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Projects from "./pages/Projects.jsx";
import Gallery from "./Components/Gallery.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout  count={count}/>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery onCountChange={handleCountChange} count={count}/>} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
