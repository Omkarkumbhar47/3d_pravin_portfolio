import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import VideoGallery from "./VideoGallery";

const Gallery = ({ count, openMenu, setOpenMenu, images, setImages }) => {
  return (
    <div className="px-2 md:px-20 pt-32 w-[95%] md:w-[90%] m-auto bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <Navbar count={count} setOpenMenu={setOpenMenu} openMenu={openMenu} />
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
        <hr className="my-6" />
      </div>
      <VideoGallery />
      <Footer />
    </div>
  );
};

export default Gallery;
