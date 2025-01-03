import React from "react";
import video1 from "../assets/video/3dmodelVideo.mp4";
import video2 from "../assets/video/3dmodelVideo.mp4";
import Button from "../Components/Button";
import ThreeD from "../Components/ThreeD";
import { motion } from "framer-motion";
import SecButton from "../Components/SecButton.jsx";

const Hero = () => {
  const videoSources = [video1, video2];
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Time between animations for children
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <div className="py-36 sm:py-30 flex gap-6">
        <div className="absolute bottom-0 left-2/4 my-1">
          {/* <SecButton /> */}
        </div>
        <motion.div
          className="h-[75vh] w-full pt-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-semibold text-6xl overflow-hidden"
            variants={fadeInUp}
          >
            Hi, I'm Pravin
          </motion.h1>

          <motion.h2
            className="font-semibold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600"
            variants={fadeInUp}
          >
            3D Artist
          </motion.h2>

          <motion.p className="text-3xl mt-5 " variants={fadeInUp}>
            A passionate 3D Artist and Animator specialized in creating stunning
            3D models & captivating animations using Blender. Let’s bring your
            vision to life in 3D!
          </motion.p>

          <motion.div
            className="h-16 mb-5 mt-3 flex gap-6 items-center"
            variants={fadeInUp}
          >
            <div className="flex space-x-4">
              {/* Instagram */}
              <span className="text-4xl w-12">
                <i className="ri-instagram-line hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#515BD4] hover:scale-110 hover:cursor-pointer transition-all duration-300"></i>
              </span>

              {/* Facebook */}
              <span className="text-4xl w-12">
                <i className="ri-facebook-box-fill hover:text-blue-600 hover:scale-110 hover:cursor-pointer transition-all duration-300"></i>
              </span>

              {/* Blender */}
              <span className="text-4xl w-12">
                <i className="ri-blender-line hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#EA7600] hover:to-[#FCA40B] hover:scale-110 hover:cursor-pointer transition-all duration-300"></i>
              </span>

              {/* Twitter */}
              <span className="text-4xl w-12">
                <i className="ri-twitter-line hover:text-[#1DA1F2] hover:scale-150
                 hover:cursor-pointer transition-all duration-300"></i>
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Button text="see my work" goTo="/projects" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-transparent h-[75vh] shadow-md shadow-[#101c26] rounded-full m-auto w-full justify-center"
        >
          <ThreeD />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
