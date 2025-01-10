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
import Gallery from "../Components/Gallery.jsx";
import Card from "../Components/Card.jsx";
import About from "../pages/About.jsx";
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
        <div ref={scrollRef}>
          <div className="  bg-[#ff0088] w-[8px] top-0 bottom-0 fixed rounded-full">
            <motion.div
              className="bg-[#ff81c4] m-auto rounded-full"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
            ></motion.div>
          </div>
          <div className=" w-[90%] m-auto h-auto">
            <Hero />
            <Detail />
            <About />
            <Card />

            <Experience />
            {/* <Gallery/> */}
            <Footer />
            {/* <SecButton/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
