import React from "react";
import { useNavigate } from "react-router-dom";
import moduleName from "../assets/img/HeroImg.png";

const ProjectCard = ({ id, title, subtitle, image, link }) => {
  
    
  return (
    <div className="relative">
     
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#F4F7F9] w-full h-full rounded-[1.25rem] p-2 aspect-[1/1.44] bg-lightgrey card shadow-lg transition-shadow flex flex-col"
      >
        <div className=" flex flex-col w-full h-full items-center border border-dashed border-[#00000028] rounded-[0.875rem] py-5">
          <span className="block text-sm opacity-60 ">
            {`${id >= "10" ? "" : "0"}${id}/29`}
          </span>

          <h1 className="mt-2 text-lg text-center">
            {title} <span className="BaskervilleItalic">{subtitle}</span>
          </h1>
          <div className="flex-grow overflow-hidden m-4">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
          <p className=" text-sm opacity-80">{`${id}`}</p>
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  // Card Data Array
  const cards = [
    {
      id: 1,
      title: "The",
      subtitle: "Zhuang People",
      image: { moduleName },
      link: "",
    },
    {
      id: 2,
      title: "The",
      subtitle: "Zhuang People",
      image:
        "https://www.jimmynelson.com/wp-content/uploads/2022/08/Frame-118.png",
      link: "",
    },
    {
      id: 3,
      title: "The",
      subtitle: "Zhuang People",
      image:
        "https://www.jimmynelson.com/wp-content/uploads/2022/08/Frame-118.png",
      link: "",
    },
    {
      id: 4,
      title: "The",
      subtitle: "Zhuang People",
      image:
        "https://www.jimmynelson.com/wp-content/uploads/2022/08/Frame-118.png",
      link: "",
    },
    {
      id: 5,
      title: "The",
      subtitle: "Zhuang People",
      image:
        "https://www.jimmynelson.com/wp-content/uploads/2022/08/Frame-118.png",
      link: "",
    },
    {
      id: 6,
      title: "The",
      subtitle: "Zhuang People",
      image:
        "https://www.jimmynelson.com/wp-content/uploads/2022/08/Frame-118.png",
      link: "",
    },
    {
      id: 7,
      title: "The",
      subtitle: "Zhuang People",
      image:
        "https://www.jimmynelson.com/wp-content/uploads/2022/08/Frame-118.png",
      link: "",
    },
    {
      id: 8,
      title: "The",
      subtitle: "Zhuang People",
      image:
        "https://www.jimmynelson.com/wp-content/uploads/2022/08/Frame-118.png",
      link: "",
    },
    {
      id: 9,
      title: "The",
      subtitle: "Zhuang People",
      image:
        "https://www.jimmynelson.com/wp-content/uploads/2022/08/Frame-118.png",
      link: "",
    },
    {
      id: 10,
      title: "The",
      subtitle: "Zhuang People",
      image:
        "https://www.jimmynelson.com/wp-content/uploads/2022/08/Frame-118.png",
      link: "",
    },
  ];
    // Sample data
    const cardsCompleted = 10;
    const cardsTotal = 29;
  
    const calculatePercentage = () => {
      return ((cardsCompleted / cardsTotal) * 100).toFixed(0);
    };
    const navigate = useNavigate();
  const handleGpBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className=" text-black fixed text-2xl top-7 left-1/2 transform -translate-x-1/2 z-50 text-center tracking-wider uppercase">
        Pradip
        <br />
        Kamble
      </div>
      <div
        onClick={handleGpBack}
        className="fixed top-1/2 right-20 transform -translate-y-1/2 rounded-full w-8 h-8 text-xl cursor-pointer flex items-center justify-center bg-gray-600 hover:text-black hover:bg-white transition-all"
      >
        <i className="ri-close-fill"></i>
      </div>

      <div className="bg-white m-6 text-black">
        <div className="px-5 pt-6 md:px-10">
          {/* Stats Section */}
          <div className="flex justify-between sm:items-center">
            <div className="flex flex-col space-y-2 ">
              <div className="flex items-center">
                <p className="w-10 sm:w-14 opacity-40 ApercuProMono text-xs">
                  Cards:
                </p>
                <p className="ApercuProMono text-xs">
                  <span className="">
                    {cardsCompleted.toString().padStart(2, "0")}
                  </span>
                  /<span className="">{cardsTotal}</span>
                </p>
              </div>
              <div className="flex justify-start items-center">
                <p className="w-10 sm:w-14 opacity-40 ApercuProMono text-xs">
                  Total:
                </p>
                <p className="ApercuProMono text-xs">
                  {calculatePercentage()}%
                </p>
              </div>
            </div>

            {/* Placeholder for "Share your journey" button (uncomment if needed) */}
            {/* <button className="relative inline-flex justify-center items-center rounded-full font--item button px-9 py-4 sm:px-7 bg-blue-500 text-white hover:bg-blue-600 transition hidden md:inline-flex">
          <span>Share your journey</span>
        </button> */}
          </div>

          {/* Journey Text */}
          <div className="flex justify-center w-full px-5 text-center md:px-10 pt-14">
            <div className="flex flex-col items-center">
              <span className="relative inline-block px-5 py-2.5 opacity-60 ">
                <div className="relative z-10 ApercuProMono uppercase">
                  My journey
                </div>
              </span>
              <p className="heading text-2xl pt-2 w-full lg:w-[75%] xl:w-[51%] Baskerville md:text-5xl">
                This is my journey so far, and there are so many more
                <span className="BaskervilleItalic"> project</span> to meet!
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 p-4 pt-8 md:px-10 2xl:px-[6.875rem]">
          {cards.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
