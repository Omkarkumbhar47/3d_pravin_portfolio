import React from "react";
import logo from "../../public/WB_Logo1.png";
const Navbar = () => {
  return (
    <div className="d-flex justify-between">
      <img src={logo} alt="" className="w-20  bg-red-300 absolute " />

      <div className="flex capitalize gap-5 py-7  bg-red-300 items-center  absolute left-1/2 transform -translate-x-1/2">
        {[
          "Home",
          "About Me",
          "Tech stack",
          "Work Experience",
          "Portfolio",
          "Certificates",
        ].map((e, index) => (
          <a href="#" key={index} className="text-white font-[500] text-md">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute bg-red-300 right-10 py-7">Contact Me</div>
    </div>
  );
};

export default Navbar;
