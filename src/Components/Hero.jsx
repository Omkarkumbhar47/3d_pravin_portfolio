import React from "react";
import video1 from "../assets/video/3dmodelVideo.mp4";
import video2 from "../assets/video/3dmodelVideo.mp4";
// import video3 from "../../assets/video/3dmodelVideo1.mp4";
import HeroBackImg from "../assets/img/HeroImg.png";
const Hero = () => {
  const videoSources = [video1, video2];
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleVideoEnd = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVideoIndex(
        (prevIndex) => (prevIndex + 1) % videoSources.length
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="h-screen">
      {/* <div className="Baskerville text-4xl sm:text-5xl md:text-6xl lg:text-6xl mt-60 mx-40 leading-12 text-center capitalize">
        {/* Explore the artistry of detailed 3D modeling, immersive animations, and
        captivating visual designs that tell your story */}
      {/* Bringing <span className="BaskervilleItalic">Imagination</span><br />to Life in 3D
      </div> */}
      <div className="relative ">
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={HeroBackImg}
            alt="Background"
            className="w-[calc(420/720*100%)] max-w-lg opacity-20 md:opacity-40"
          />
        </div>
        <div className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl mx-8 sm:mx-20 md:mx-40 mt-40 sm:mt-60 text-center capitalize leading-snug">
          Explore the artistry of detailed 3D
          <br />
          modeling, immersive animations, and
          <br />
          captivating visual designs that tell your
          <br />
          story
        </div>
      </div>

      {/* <div className="min-h-[75%] pt-32">
        <video controls autoPlay loop src={VideoModel} type="video/mp4"></video>
      </div> */}
      <div className="w-full mt-28 flex justify-center">
        <div
          className={` transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            id="carousel-video"
            className="w-full max-w-4xl rounded-md shadow-lg"
            src={videoSources[currentVideoIndex]}
            autoPlay
            loop={false}
            muted
            playsInline
            onEnded={handleVideoEnd}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
