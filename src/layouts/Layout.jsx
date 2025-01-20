import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import { NavLink } from "react-router-dom";
import Hero from "../pages/Hero.jsx";
import CardSvg from "../assets/svg/CardSvg.jsx";
import { motion } from "framer-motion";
import Detail from "../pages/Detail.jsx";
import Experience from "../pages/Experience.jsx";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../Components/Footer.jsx";
import Card from "../Components/Card.jsx";
import About from "../pages/About.jsx";
import CallToAction from "../pages/CallToAction.jsx";
import Slider from "../Components/Slider.jsx";
const Layout = ({ count, children, openMenu, setOpenMenu }) => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // Attach Locomotive Scroll to the container
      smooth: true,
      lerp: 0.1, // Adjust the scrolling speed
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
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

    return () => {
      scroll.destroy();
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <>
      <div
        className={`w-full px-4 md:px-24 relative ${
          openMenu ? "overflow-hidden  " : ""
        }`}
      >
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} count={count} />
        <main>{children}</main>
        <NavLink to="/projects">{openMenu ? null : <CardSvg />}</NavLink>
        <div ref={scrollRef}>
          <div className="bg-[#fff] w-[8px] top-0 bottom-0 fixed rounded-full hidden md:block">
            <motion.div
              className="bg-[#ff0088] m-auto rounded-full"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
            ></motion.div>
          </div>

          <div className="md:w-[90%] m-auto h-auto">
            <Hero />  
            <Detail />
            <About />
            <Slider/>
            <Card />
            <Experience />
            <CallToAction />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
