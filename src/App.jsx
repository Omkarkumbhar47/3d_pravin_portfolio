import React, { useState } from "react";
import "./Style/Main.css";
import "./index.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Navbar/Hero";
import CardSvg from "./assets/svg/CardSvg";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
// import MainContainer from "./Components/MainContainer";

const App = () => {
  const [openProjects, setOpenprojects] = useState(false);

  return (
    <div className="w-full h-screen px-24 realtive hideScrollBar">
      <Navbar />
      <div onClick={() => setOpenprojects((prev) => !prev)}>
        <CardSvg />
      </div>
      <Hero />

      {openProjects && (
        <div className="h-screen w-full relative  bg-amber-600">asfdsf</div>
      )}

      {/* <div className="h-screen bg-red-500"></div> */}
    </div>
  );
};

export default App;
{
  /* Main Content */
}
{
  /* <div className="absolute flex flex-col items-center text-white top-40 left-1/2 transform -translate-x-1/2">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5>Oh so pro!</h5>
        <p className="text-center w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non id fuga
          eius fugit architecto suscipit obcaecati? Fuga praesentium ipsa beatae
          quam voluptate molestiae quo assumenda ipsam unde? In, expedita amet!
        </p>
      </div> */
}

{
  /* Three.js Canvas */
}
{
  /* <Canvas camera={{ fov: 20, position: [0, -1, 220] }}>
        <OrbitControls/>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MainContainer />
        </ScrollControls>
      </Canvas> */
}
