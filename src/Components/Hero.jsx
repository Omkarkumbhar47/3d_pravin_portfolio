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
    <div className="h-screen relative">
      <div className=" text-3xl sm:text-4xl md:text-5xl inset-0 lg:text-6xl mx-8 sm:mx-20 md:mx-40 mt-40 sm:mt-60 text-center capitalize leading-snug">
        Explore the artistry of detailed 3D
        <br />
        modeling, immersive animations, and
        <br />
        captivating visual designs that tell your
        <br />
        story
      </div>
      {/* <div className="absolute w-fit h-fit  flex justify-center items-center"> */}
        {/* <img
          src={HeroBackImg}
          alt="Background"
          className="w-[calc(420/720*100%)] max-w-lg opacity-20 md:opacity-40"
        />
      </div> */}
      

    
    
    </div>
  );
};

export default Hero;
