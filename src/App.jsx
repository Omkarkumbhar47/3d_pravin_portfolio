import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei"; // Removed unused OrbitControls import
import MainContainer from "./Components/MainContainer";
import "./Style/Main.css";
import "./index.css";
import "./App.css";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="w-full h-screen font-[Helvetica_Now_Display] mx-10">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 transform -translate-x-1/2">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5>Oh so pro!</h5>
        <p className="text-center w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non id fuga
          eius fugit architecto suscipit obcaecati? Fuga praesentium ipsa beatae
          quam voluptate molestiae quo assumenda ipsam unde? In, expedita amet!
        </p>
      </div>

      {/* Three.js Canvas */}
      {/* <Canvas camera={{ fov: 20, position: [0, -1, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MainContainer />
        </ScrollControls>
      </Canvas> */}
    </div>
  );
};

export default App;
