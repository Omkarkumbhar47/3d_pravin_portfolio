import React, { useState, useEffect, useRef } from "react";
import logo from "../../../public/WB_Logo1.png";
import { gsap } from "gsap";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItemsRef = useRef([]);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    
    // Animation for mobile sidebar items
    tl.fromTo(
      menuItemsRef.current,
      { x: 150, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power1.out" }
    );

    if (open) {
      tl.play();
    } else {
      tl.reverse();
    }

    // Close sidebar on screen resize
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
    };
  }, [open]);

  const handleMenuToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="mx-24">
      <div className="flex justify-between items-center relative py-4">
        <div>
          <img src={logo} alt="Website Logo" className="w-20" />
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-6 items-center">
          {["About Me", "Tech Stack", "Work Experience", "Portfolio", "Certificates"].map((item, index) => (
            <a
              href="#"
              key={index}
              className="text-md font-semibold text-black transition duration-200 hover:text-green-600 transform hover:scale-105"
              ref={(el) => (menuItemsRef.current[index] = el)}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center md:hidden"
          onClick={handleMenuToggle}
          aria-expanded={open}
        >
          <HamburgerMenu open={open} />
        </button>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 pt-28 text-3xl right-0 h-screen w-80 bg-[#d536362e] text-black p-10 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        aria-hidden={!open}
      >
        {["About Me", "Tech Stack", "Work Experience", "Portfolio", "Certificates"].map((item, index) => (
          <a
            href="#"
            key={index}
            className="menu-item text-lg font-semibold block mb-4 transition duration-200 hover:text-green-600"
            ref={(el) => (menuItemsRef.current[index] = el)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
