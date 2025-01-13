import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import chairGlb from "../../public/Chair.glb";

const ProjectCard = ({ id, title, subtitle, image, modelPath }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/viewer", { state: { modelPath } });
  };
  return (
    <article onClick={handleCardClick} className="relative">
      <a
        // href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#e2d3b47a] w-full h-full aspect-square
         rounded-[1.25rem] p-2 card shadow-2xl flex flex-col hover:scale-105 transition-all"
      >
        <div className="flex flex-col w-full h-full items-center border p-2 border-black border-dashed rounded-lg relative">
          <div className="overflow-hidden rounded-lg w-full h-full">
            <img
              src={image}
              alt={`${title} - ${subtitle}`}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full text-center mt-4">
            <h1 className="mt-2 text-2xl">
              {title} <span className="BaskervilleItalic">{subtitle}</span>
            </h1>
            <span className="block text-lg opacity-60">
              {`${id < 10 ? "0" : ""}${id}/29`}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

const Projects = () => {
  const cards = [
    {
      id: 1,
      title: "3D House",
      subtitle: "Plan Design 1",
      image: img1,
      link: "#",

      modelPath: chairGlb,
    },
    {
      id: 2,
      title: "3D House",
      subtitle: "Plan Design 2",
      image: img2,
      link: "#",
      modelPath: chairGlb,
    },
    {
      id: 3,
      title: "3D House",
      subtitle: "Plan Design 3",
      image: img3,
      link: "#",
      modelPath: chairGlb,
    },
    {
      id: 4,
      title: "The",
      subtitle: "Bicycle Light",
      image: img4,
      link: "#",
      modelPath: chairGlb,
    },
    {
      id: 5,
      title: "The",
      subtitle: "Blender Work",
      image: img5,
      link: "#",
      modelPath: chairGlb,
    },
    {
      id: 6,
      title: "The",
      subtitle: "Design 1",
      image: img6,
      link: "#",
      modelPath: chairGlb,
    },
    {
      id: 7,
      title: "The",
      subtitle: "Design 2",
      image: img7,
      link: "#",
      modelPath: chairGlb,
    },
    {
      id: 8,
      title: "The",
      subtitle: "Design 3",
      image: img8,
      link: "#",
      modelPath: chairGlb,
    },
    {
      id: 9,
      title: "The",
      subtitle: "Design 4",
      image: img9,
      link: "#",
      modelPath: chairGlb,
    },
    {
      id: 10,
      title: "The USA",
      subtitle: "Food Mall Interior",
      image: img10,
      link: "#",
      modelPath: chairGlb,
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
      <a
        href="/"
        className="text-black fixed text-2xl top-7 left-1/2 transform -translate-x-1/2 z-50 text-center tracking-wider uppercase"
      >
        Pravin
        <br />
        Kamble
      </a>

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 p-4 pt-8 md:px-10 2xl:px-[6.875rem]">
          {cards.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
