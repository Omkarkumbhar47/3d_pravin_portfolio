import React from "react";
import blenderIcon from "../assets/img/blender_icon_64x64.png";
import mayaIcon from "../assets/img/maya-logo.png";
import photoshopIcon from "../assets/img/Adobe_Photoshop_CC_icon.svg.png";
import afterEffectsIcon from "../assets/img/adobe-after-effects-logo.svg";
// import storyboardingIcon from "";
import clayModelingIcon from "../assets/img/clay model.webp";
import premiereProIcon from "../assets/img/Adobe_Premiere_Pro_CC_icon.svg.png";

const Card = () => {
  const tools = [
    {
      name: "Blender",
      description: "3D Modeling, Animation & Rendering",
      icon: blenderIcon,
    },
    {
      name: "Autodesk Maya",
      description: "Animation & Visual Effects",
      icon: mayaIcon,
    },
    {
      name: "Photoshop",
      description: "Graphic Design & Image Editing",
      icon: photoshopIcon,
    },
    {
      name: "After Effects",
      description: "Motion Graphics & Visual Effects",
      icon: afterEffectsIcon,
    },
    // {
    //   name: "Storyboarding",
    //   description: "Concept Visualization & Scene Design",
    //   icon: storyboardingIcon,
    // },
    {
      name: "Clay Modeling",
      description: "Traditional Sculpting & Character Prototyping",
      icon: clayModelingIcon,
    },
    {
      name: "Premiere Pro",
      description: "Video Editing & Post-Production",
      icon: premiereProIcon,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-8 items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-8">
      <div className="col-span-1 text-6xl font-bold ml-10">
        <h1 className="text-white leading-tight">PREMIUM</h1>
        {/* <h1 className="text-white leading-tight">Top-Tier Tools for</h1> */}
        <h1 className="text-[#b6b4bd33]">TOOLS</h1>
        {/* <h1 className="text-[#b6b4bd33]">Exceptional Results</h1> */}
        {/* Top-Tier Tools for Exceptional Results */}
      </div>
      <div className="col-span-2 p-6  grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <a
            key={index}
            href="#"
            className="hover:bg-[#b6b4bd33] rounded-lg py-2 px-4 flex items-center gap-4"
          >
            <img
              className="bg-white w-14 h-14 rounded-lg"
              src={tool.icon}
              alt={tool.name}
            />
            <div>
              <h2 className="font-semibold tracking-wider text-3xl">
                {tool.name}
              </h2>
              <h3 className="text-[#807f86b6]">{tool.description}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;
