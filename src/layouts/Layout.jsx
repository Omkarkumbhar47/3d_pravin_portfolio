import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import { NavLink } from "react-router-dom";
import Hero from "../pages/Hero.jsx";
import CardSvg from "../assets/svg/CardSvg.jsx";

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <div
        className={`w-full h-screen px-24 realtive ${
          openMenu ? "overflow-hidden  " : ""
        }`}
      >
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <NavLink to="/projects">{openMenu ? null : <CardSvg />}</NavLink>
        <div className="w-[90%] m-auto">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Layout;
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
// import MainContainer from "./Components/MainContainer";

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
