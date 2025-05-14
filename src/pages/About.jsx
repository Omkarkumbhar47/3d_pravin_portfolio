import React from "react";
import photo from "../assets/img/pravinImg.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="w-full mt-4 md:mt-16 md:h-screen grid grid-cols-1 md:grid-cols-2 items-center text-justify justify-center gap-2 px-2 ">
      <div className="w-full  h-fit shadow-lg rounded-lg   justify-center bg-gradient-to-r from-gray-800 to-gray-900 text-white  ">
        <h2 className=" text-3xl  md:text-4xl lg:text-6xl  font-medium p-3 md:p-6  ">
          About <span className="text-indigo-500 ">Me</span>
        </h2>
        <div className="px-4 md:px-10">
          <p className="text-md md:text-xl mb-3 md:mb-6">
            A passionate
            <strong> 3D Character Artist </strong> from Kolhapur, India. With a
            keen eye for detail and a love for creating immersive environments,
            I specialize in:
          </p>

          <ul className="pl-2 md:pl-4 space-y-1 md:space-y-2 text-md md:text-xl">
            <li>
              🎨 <strong className="">3D Modeling: </strong>
              <span className="text-sm md:text-lg">
                Crafting high-quality models for characters, props, and
                backgrounds.
              </span>
            </li>
            <li>
              💡 <strong>Texturing & Lighting: </strong>
              <span className="text-sm md:text-lg">
                Bringing realism and depth to virtual scenes.
              </span>
            </li>
            <li>
              🖌️ <strong>Concept Art & Storyboarding: </strong>
              <span className="text-sm md:text-lg">
                Developing visual concepts for impactful storytelling.
              </span>
            </li>
            <li>
              🤝 <strong>Collaborative Projects: </strong>
              <span className="text-sm md:text-lg">
                Working seamlessly with teams to deliver polished results.
              </span>
            </li>
          </ul>

          <Link to="/contact">
            <p className="mt-2 md:mt-10 text-start text-xl font-semibold text-indigo-400 hover:text-[#ff0088]">
              Let's create something extraordinary together!
            </p>
          </Link>
        </div>
      </div>

      <div className="w-full h-fit sm:h-[75%] md:h-[85%] flex justify-center items-center shadow-xxl shadow-red-700 rounded-xxl overflow-hidden">
        <img
          src={photo}
          // src="https://images.unsplash.com/photo-1735915169185-bf607b00fc2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
          // alt="Pravin's Portrait"
          style={{}}
          className="w-full h-full object-cover shadow-xxl shadow-red-700 rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
