import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import CardSvg from "../assets/svg/CardSvg";

// const images = [
//   {
//     src: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Portrait Image 1",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1735583100223-40a01e52ef0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Landscape Image 1",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1719937051157-d3d81cc28e86?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Portrait Image 2",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1735707370784-9b3e8dd9e8b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
//     alt: "Landscape Image 2",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1736192326255-89d26db112c3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Portrait Image 3",
//   },
//   {
//     src: "https://plus.unsplash.com/premium_photo-1734549547925-153584e3b1ac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     alt: "Landscape Image 3",
//   },
// ];

const Gallery = ({  count, openMenu, setOpenMenu, images, setImages }) => {
  // useEffect(() => {
  //   onCountChange(images.length);
  // }, [onCountChange]);

  return (
    <div className="px-2 md:px-20 pt-32 w-[95%] md:w-[90%] m-auto bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <Navbar count={count} setOpenMenu={setOpenMenu} openMenu={openMenu} />
      {/* <div className="z-[9999]"><CardSvg/></div> */}
      <div className="container mx-auto md:p-10 bg-[#e2d3b4]">
        <div
          className="md:flex justify-between 
         items-center text-start gap-8 p-4"
        >
          <div className="w-full">
            <div className="text-3xl  md:text-4xl lg:text-6xl font-bold w-full mb-2  ">
              Gallery
            </div>
            <h2 className="text-2xl  md:text-3xl lg:text-4xl font-semibold mb-4 text-black ml-5">
              Explore My Work & Life
            </h2>
          </div>
          <div className="w-full">
            <p className="text-sm  md:text-md lg:text-lg  w-[95%] text-justify text-[#535250]">
              Here is a collection of some of my most recent projects. From
              intricate 3D models to immersive environments, these works
              showcase my creativity and attention to detail. Feel free to
              explore and discover more about my design and artistic journey.
            </p>
          </div>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4">
          {images.map((image, index) => (
            <div key={index} className="mb-8 break-inside-avoid">
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 5 hover:shadow-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
