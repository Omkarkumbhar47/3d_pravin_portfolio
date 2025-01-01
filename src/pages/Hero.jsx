import React from "react";
import video1 from "../assets/video/3dmodelVideo.mp4";
import video2 from "../assets/video/3dmodelVideo.mp4";
// import video3 from "../../assets/video/3dmodelVideo1.mp4";
import HeroBackImg from "../assets/img/HeroImg.png";
// import MarathiToEnglish from "./MarathiToEnglish";
import config from "../utils/config.json";
import Button from "../Components/Button";
import ThreeD from "../Components/ThreeD";
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
      <div className="mt-36 sm:mt-30  flex gap-6 ">
        <div className="h-[75vh] w-full pt-6">
          <h1 className="font-semibold text-6xl">Hi, I am Pravin</h1>
          <h1 className="font-semibold text-6xl">3d Artist</h1>

          <p className=" text-3xl mt-5 text-justify">
            I am a Front-End / Full-Stack Developer. I am currently working at
            CloudStok Technologies as a Front-End Developer
          </p>
          <div className="h-16 my-10 flex gap-6  items-center">
            <span className="text-4xl w-12">
              <i className="ri-instagram-line hover:text-5xl hover:text-blue-200 hover:cursor-pointer"></i>
            </span>
            <span className="text-4xl w-12">
              <i className="ri-facebook-box-fill hover:text-5xl hover:text-blue-200 hover:cursor-pointer"></i>
            </span>
            <span className="text-4xl w-12">
              <i className="ri-blender-line hover:text-5xl hover:text-blue-200 hover:cursor-pointer"></i>
            </span>
            <span className="text-4xl w-12">
              <i className="ri-twitter-line hover:text-5xl hover:text-blue-200 hover:cursor-pointer"></i>
            </span>
          </div>
          <Button text="see my projects" goTo="/projects"/>
        </div>
        <div className="bg-transparent h-[75vh] shadow-md shadow-[#101c26]   rounded-full m-auto w-full justify-center">
          <ThreeD/>
        </div>
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
