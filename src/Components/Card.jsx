import React from "react";
import blender from "../assets/img/blender_icon_64x64.png";
// import maya from "../assets/img/maya_icon_64x64.png";
// import zbrush from "../assets/img/zbrush_icon_64x64.png";
// import substance from "../assets/img/substance_icon_64x64.png";
// import unity from "../assets/img/unity_icon_64x64.png";
// import unreal from "../assets/img/unreal_icon_64x64.png";

const Card = () => {
  const tools = [
    { name: "Blender", description: "Create Models", icon: blender },
    { name: "Blender", description: "Create Models", icon: blender },
    { name: "Blender", description: "Create Models", icon: blender },
    { name: "Blender", description: "Create Models", icon: blender },
    { name: "Blender", description: "Create Models", icon: blender },
    { name: "Blender", description: "Create Models", icon: blender }, 
    // { name: "Maya", description: "3D Animation", icon: maya },
    // { name: "ZBrush", description: "Sculpting Tool", icon: zbrush },
    // { name: "Substance Painter", description: "Texturing", icon: substance },
    // { name: "Unity", description: "Game Development", icon: unity },
    // { name: "Unreal Engine", description: "Game Development", icon: unreal },
  ];
  return (
    <div className="grid grid-cols-3 gap-8 py-16 items-center">
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
