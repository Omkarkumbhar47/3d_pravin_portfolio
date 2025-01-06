import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import { NavLink } from "react-router-dom";
import Hero from "../pages/Hero.jsx";
import CardSvg from "../assets/svg/CardSvg.jsx";
import { motion, useScroll } from "framer-motion";
import Detail from "../pages/Detail.jsx";
import Experience from "../pages/Experience.jsx";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../Components/Footer.jsx";
const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const scrollRef = useRef(null); // Ref for Locomotive Scroll
  const [scrollProgress, setScrollProgress] = useState(0); // State for scroll progress

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // Attach Locomotive Scroll to the container
      smooth: true, // Enable smooth scrolling
      lerp: 0.1, // Adjust the scrolling speed
      smartphone: {
        smooth: true, // Smooth scrolling on smartphones
      },
      tablet: {
        smooth: true, // Smooth scrolling on tablets
      },
    });

    // Update scroll when DOM changes
    const resizeObserver = new ResizeObserver(() => {
      scroll.update();
    });
    resizeObserver.observe(scrollRef.current);

    // Listen to scroll events
    scroll.on("scroll", (instance) => {
      const progress = instance.scroll.y / instance.limit.y; // Use y-axis values
      setScrollProgress(progress); // Update state
    });
    

    // Cleanup on component unmount
    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  }, []);
  // console.log(scrollProgress);
  return (
    <>
      <div
        className={`w-full px-24 relative ${
          openMenu ? "overflow-hidden  " : ""
        }`}
      >
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <NavLink to="/projects">{openMenu ? null : <CardSvg />}</NavLink>
        <div
          ref={scrollRef} // Attach the scrollRef here
        >
          <div className=" bg-[#ff0088] w-[8px] top-0 bottom-0 fixed rounded-full">
            <motion.div
              // className="bg-purple-300 m-auto rounded-full"
              className="bg-white m-auto rounded-full"
              // className="bg-[#f854ab]  m-auto rounded-full border border-purple-300"
              style={{
                height: `${scrollProgress * 100}%`, // Adjust height dynamically
              }}
            ></motion.div>
          </div>
          <div className=" w-[90%] m-auto h-auto">
            <Hero />
            <Detail />

            <Experience />
            <Footer />
            {/* <SecButton/> */}
          </div>
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
