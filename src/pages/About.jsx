import React from "react";
import photo from "../assets/img/pravinImg.jpg";
const About = () => {
  return (
    <div className="w-full mt-16 h-screen grid grid-cols-2 items-center text-justify justify-center gap-6 px-2 ">
      <div className="w-full  h-[85%] shadow-lg rounded-lg px-6  justify-center">
        <h2 className="text-6xl font-medium py-6 ">
          About <span className="text-indigo-500 ">Me</span>
        </h2>
        <div className="">
          <p className="text-xl  mb-6">
            A passionate
            <strong> 3D Character Artist </strong> from Kolhapur, India. With a
            keen eye for detail and a love for creating immersive environments,
            I specialize in:
          </p>

          <ul className="pl-4 space-y-2 text-xl">
            <li>
              🎨 <strong className="">3D Modeling: </strong>
              <span className="text-lg">
                Crafting high-quality models for characters, props, and
                backgrounds.
              </span>
            </li>
            <li>
              💡 <strong>Texturing & Lighting: </strong>
              <span className="text-lg">
                Bringing realism and depth to virtual scenes.
              </span>
            </li>
            <li>
              🖌️ <strong>Concept Art & Storyboarding: </strong>
              <span className="text-lg">
                Developing visual concepts for impactful storytelling.
              </span>
            </li>
            <li>
              🤝 <strong>Collaborative Projects: </strong>
              <span className="text-lg">
                Working seamlessly with teams to deliver polished results.
              </span>
            </li>
          </ul>

          <p className="mt-10 text-xl font-semibold text-indigo-400">
            Let's create something extraordinary together!
          </p>
        </div>
      </div>

      <div className="w-full  h-[60%] md:h-[85%] flex justify-center items-center shadow-lg rounded-lg overflow-hidden">
        <img

        src={photo}
          // src="https://images.unsplash.com/photo-1735915169185-bf607b00fc2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhdyUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
          // alt="Pravin's Portrait"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
