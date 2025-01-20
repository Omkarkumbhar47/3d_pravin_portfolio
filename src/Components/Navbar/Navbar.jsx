import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ openMenu, setOpenMenu, count }) => {
  const location = useLocation();

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };
  return (
    <div className="fixed inset-0 h-[100px] menu">
      <Link
        to="/"
        className="fixed z-[9999] text-2xl top-7 left-1/2 transform -translate-x-1/2 text-center tracking-wider uppercase mix-blend-difference"
      >
        Pravin
        <br />
        Kamble
      </Link>

      {!openMenu && (
        <nav className="fixed top-0 left-0 z-10 w-full flex justify-between items-center px-4 sm:px-12 md:px-24 pt-12 tracking-wider uppercase">
          <div className="whitespace-nowrap text-[0.60rem] pl-0 md:pl-4">
            Scroll <span className="block md:inline">Down</span>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4 sm:gap-8">
            <Link to="/gallery" className="items-center gap-2 hidden md:flex">
              <span
                className={`${
                  location.pathname === "/gallery"
                    ? "underline underline-offset-4 hover:text-purple-500"
                    : "text-white hover:text-purple-500"
                }`}
              >
                Gallery
              </span>
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-600 hover:bg-white hover:text-black transition-all">
                <span className="text-xs font-semibold">{count}</span>
              </div>
            </Link>
            <span className="text-lg cursor-pointer" onClick={handleOpenMenu}>
              <i className="ri-menu-3-line"></i>
            </span>
          </div>
        </nav>
      )}

      {openMenu && (
        <div className=" overflow-hidden z-[999] fixed inset-0 bg-opacity-90 bg-[#152632]  backdrop-blur-4xl flex-col">
          <span
            onClick={() => setOpenMenu(false)}
            className="absolute top-12 right-4 md:right-24 text-xl cursor-pointer"
          >
            <i className="ri-close-fill"></i>
          </span>

          <ul className="mt-24 md:mt-44 md:mx-40 lg:mx-64 text-4xl md:text-6xl font-semibold px-4 py-8">
            <div className="text-xs opacity-40 mb-4">Menu</div>
            <li className="py-4">
              <a href="/" className="hover:underline">
                Pravin Kamble
              </a>
            </li>

            <li className="py-4">
              <a href="/gallery" className="hover:underline">
                Gallery
              </a>
            </li>
            <li className="py-4">
              <a
                href="/Pravin Kamble_3D Artist_Resume.pdf"
                download="/Pravin Kamble_3D Artist_Resume.pdf"
                className="hover:underline"
              >
                Download CV
              </a>
            </li>

            <li className="py-4">
              <a href="/contact" className="hover:underline">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
