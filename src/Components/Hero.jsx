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
    <>
      <div className="mt-36 sm:mt-30 text-center flex gap-3 "> 
        <div className="bg-black h-[75vh] w-full">hii i am pravin</div>
        <div className="bg-transparent h-[75vh] shadow-md shadow-slate-400 h-screen w-full justify-center">Canvas</div>
      </div>
      <div className="sm:text-4xl md:text-5xl lg:text-6xl inset-0 mt-40 sm:mt-60 text-center capitalize leading-snug">
        Explore the artistry of detailed 3D modeling, immersive animations, and
        captivating visual designs that tell your story
      </div>
      {/* <div className="absolute w-fit h-fit  flex justify-center items-center">
      <img
          src={HeroBackImg}
          alt="Background"
          className="w-[calc(420/720*100%)] max-w-lg opacity-20 md:opacity-40"
        />
      </div> */}
    </>
  );
};

export default Hero;
