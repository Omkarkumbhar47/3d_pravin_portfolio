import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import img1 from "../assets/img/pravin img.png";
import img3 from "../assets/img/chair img.png";
import img5 from "../assets/img/Mac img.png";
import img6 from "../assets/img/iphone img.png";
import img7 from "../assets/img/house omg.png";
const modelPaths = {
  pravin: "/models/pravin.glb",
  chair: "/models/Chair.glb",
  iphone: "/models/iphone.gltf",
  earth: "/models/mac.glb",
  mac: "/models/house.gltf",
};

const ProjectCard = ({ id, title, subtitle, image, modelPath }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/viewer", { state: { modelPath } });
  };
  return (
    <article
      onClick={handleCardClick}
      className="relative w-full max-w-[350px] md:max-w-[400px] lg:max-w-[450px] mx-auto"
    >
      <div className="relative bg-[#e2d3b47a] w-full h-full aspect-square rounded-[1.25rem] p-2 shadow-2xl flex flex-col hover:scale-105 transition-transform">
        <div className="flex flex-col w-full h-full items-center border p-2 border-black border-dashed rounded-lg">
          <div className="overflow-hidden rounded-lg w-full h-full flex items-center justify-center">
            <img
              src={image}
              alt={`${title} - ${subtitle}`}
              className="w-full h-auto max-h-full md:object-cover object-contain"
            />
          </div>
          <div className="w-full text-center mt-4">
            <h1 className="mt-2 text-lg md:text-xl lg:text-2xl">
              {title}{" "}
              <span className="font-[BaskervilleItalic]">{subtitle}</span>
            </h1>
            <span className="block text-sm md:text-base lg:text-lg opacity-60">
              {`${id < 10 ? "0" : ""}${id}/29`}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const cards = [
    {
      id: 1,
      title: "Pravin",
      subtitle: "Character",
      image: img1,
      modelPath: modelPaths.pravin,
    },
    {
      id: 2,
      title: "3D",
      subtitle: "Chair",
      image: img3,
      modelPath: modelPaths.chair,
    },
    {
      id: 3,
      title: "iPhone 11",
      subtitle: "Mobile",
      image: img6,
      modelPath: modelPaths.iphone,
    },
    {
      id: 4,
      title: "Mac",
      subtitle: " ",
      image: img5,
      modelPath: modelPaths.earth,
    },
    {
      id: 5,
      title: "House",
      subtitle: "Wooden",
      image: img7,
      modelPath: modelPaths.mac,
    },
  ];

  const cardsTotal = cards.length;

  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fadeInUP = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Link
        to="/"
        className="text-black fixed text-2xl top-7 left-1/2 transform -translate-x-1/2 z-50 text-center tracking-wider uppercase"
      >
        Pravin
        <br />
        Kamble
      </Link>

      <div
        onClick={handleGoBack}
        className="fixed top-1/2 right-20 transform -translate-y-1/2 rounded-full w-8 h-8 text-xl cursor-pointer flex items-center justify-center bg-gray-600 hover:text-black hover:bg-white transition-all"
      >
        <i className="ri-close-fill"></i>
      </div>

      <div className="bg-white m-6 text-black">
        <div className="px-5 pt-6 md:px-10">
          <div className="flex justify-between sm:items-center">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <p className="opacity-40 ApercuProMono text-xs">Projects:</p>
                <p className="ApercuProMono text-xs">{cardsTotal}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full px-5 text-center md:px-10 pt-14">
            <div className="flex flex-col items-center">
              <span className="relative inline-block px-5 py-2.5 opacity-60">
                <div className="relative z-10 ApercuProMono uppercase">
                  My journey
                </div>
              </span>
              <motion.p
                ref={ref}
                variants={fadeInUP}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="heading text-2xl pt-2 w-full lg:w-[75%] xl:w-[51%] Baskerville md:text-5xl"
              >
                This is my journey so far, and there are so many more
                <span className="BaskervilleItalic"> projects</span> to meet!
              </motion.p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 pt-8 md:px-10 2xl:px-[6.875rem]">
          {cards.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
