import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative">
      <nav className="z-10 px-24 py-12 flex absolute tracking-wider justify-between uppercase items-center w-full">
        <div className="whitespace-nowrap text-[0.50rem]">Scroll Down</div>
        <div className="text-center z-50">
          Pradip
          <br />
          Kamble
        </div>
        <button onClick={() => setOpenMenu(true)}>
          <HamburgerMenu />
        </button>
      </nav>

      {openMenu && (
        <div className="fixed inset-0 w-full  bg-opacity-70 backdrop-blur-sm flex flex-col h-screen z-40">
          <button
            onClick={() => setOpenMenu(false)}
            className="absolute top-14 right-24  text-4xl"
          >
            ×
          </button>

          <ul className="mt-44 absolute  w-fit mx-64 text-6xl font-semibold bg-[#15263218]">
            <div className="relative text-xs opacity-40">Menu</div>
            <li className=" py-8">
              <a href="#home">Pradip Kamble</a>
            </li>
            <li className="py-8">
              <a href="#about">About Me</a>
            </li>
            <li className="py-8">
              <a href="#services">Gallery</a>
            </li>
            <li className="py-8">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar;
