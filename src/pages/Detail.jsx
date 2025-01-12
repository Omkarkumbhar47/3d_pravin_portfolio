import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import video1 from "../assets/video/1730899968326.mp4";
import video2 from "../assets/video/3dmodelVideo2.mp4";
import video3 from "../assets/video/3dmodelVideo.mp4";

const Detail = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [videoSrc, setVideoSrc] = useState(video1);

  const fadeInUP = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const handleVideoEnd = () => {
    if (videoSrc === video1) {
      setVideoSrc(video2);
    } else if (videoSrc === video2) {
      setVideoSrc(video3);
    } else if (videoSrc === video3) {
      setVideoSrc(video1);
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
      <motion.div
        ref={ref}
        variants={fadeInUP}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mx-auto sm:px-4 lg:px-8"
      >
        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl w-[80%] m-auto capitalize leading-snug">
          Explore the artistry of detailed 3D modeling, immersive animations,
          and captivating visual designs that tell your story
        </h1>
      </motion.div>

      <motion.div
        className="my-12 rounded-lg shadow-lg bg-black mx-auto w-full max-w-5xl"
        variants={fadeInUP}
      >
        <video
          autoPlay
          muted
          loop={false}
          onEnded={handleVideoEnd}
          src={videoSrc}
          className="w-full h-[60vh] object-cover"
        ></video>
      </motion.div>
    </section>
  );
};

export default Detail;
