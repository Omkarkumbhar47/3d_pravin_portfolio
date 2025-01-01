import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ text, goTo }) => {
  return (
    <>
      <NavLink to={goTo}>
        <button className="text-2xl capitalize bg-[#101c26] hover:text-blue-200 py-2 px-4 rounded-md">
          {text}
        </button>
      </NavLink>
    </>
  );
};

export default Button;
