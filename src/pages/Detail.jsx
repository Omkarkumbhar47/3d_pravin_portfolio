import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { marker } from "framer-motion/client";

const Detail = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false }); 

  const fadeInUP = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: {  y: 100, opacity: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <motion.div
        ref={ref}
        variants={fadeInUP}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="sm:text-4xl md:text-5xl lg:text-6xl inset-0 mt-30 sm:mt-60 text-center capitalize leading-snug"
      >
        Explore the artistry of detailed 3D modeling, immersive animations, and
        captivating visual designs that tell your story
      </motion.div>
      <video
        autoPlay
        muted
        loop
        src="../assets/video/3dmodelVideo.mp4"
        className="w-10/12 bg-black m-auto my-20"
      ></video>
    </div>
  );
};

export default Detail;
