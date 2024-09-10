import React, { useState, useEffect, useRef } from "react";
import logo from "../../public/WB_Logo1.png";
import { gsap } from "gsap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    // Animation for menu items
    tl.fromTo(
      menuItemsRef.current,
      { x: 150, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.21, ease: "power1.out" }
    );

    // Play or reverse the animation based on the open state
    if (open) {
      tl.play();
    } else {
      tl.reverse();
    }

    // Cleanup to reset animation on component unmount or dependencies change
    return () => tl.kill();
  }, [open]);

  const handleMenuToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <div className="mx-24">
      <div className="flex justify-between items-center relative">
        <img src={logo} alt="Website Logo" className="w-20" />

        {/* Menu Button */}
        <button className="flex items-center" onClick={handleMenuToggle} aria-expanded={open}>
          <i className={`ri-menu-3-fill text-3xl ${open ? 'hidden' : ''}`}></i>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 pt-28 text-3xl right-0 h-screen w-80 bg-[#ffffff2e] text-white p-10 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Close Button */}
        <button
          className="absolute top-10 right-10 text-3xl text-white"
          onClick={handleMenuToggle}
        >
          <i className="ri-close-circle-line"></i>
        </button>

        {/* Animated Menu Items */}
        {["Home", "About Me", "Tech stack", "Work Experience", "Portfolio", "Certificates"].map((e, index) => (
          <a
            href="#"
            key={index}
            className="menu-item text-md font-[400] block mb-4"
            ref={el => (menuItemsRef.current[index] = el)}
          >
            {e}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
