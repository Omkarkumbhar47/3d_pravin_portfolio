import React from "react";
import VideoModel from "../../assets/video/3dmodelVideo2.mp4";
const Hero = () => {
  return (
    <div className="h-screen">
      {/* <div className="Baskerville text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-60 mx-40 leading-12 text-center capitalize">
        {/* Explore the artistry of detailed 3D modeling, immersive animations, and
        captivating visual designs that tell your story */}
      {/* Bringing <span className="BaskervilleItalic">Imagination</span><br />to Life in 3D
      </div> */}

      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-8 sm:mx-20 md:mx-40 mt-40 sm:mt-60 text-center capitalize leading-snug">
        Explore the artistry of detailed 3D modeling, immersive animations, and
        captivating visual designs that tell your story
      </div>

      {/* <div className="min-h-[75%] pt-32">
        <video controls autoPlay loop src={VideoModel} type="video/mp4"></video>
      </div> */}
      <div className="w-full mt-16 flex justify-center">
        <video
          className="w-full max-w-4xl rounded-md shadow-lg"
          autoPlay
          loop
          muted
          src={VideoModel}
          type="video/mp4"
          aria-label="3D Model Animation"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
