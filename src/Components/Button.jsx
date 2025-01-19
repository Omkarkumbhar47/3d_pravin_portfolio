import React from "react";
import { NavLink } from "react-router-dom";
import './Button.css';
const Button = ({ text, goTo }) => {
  return (
    <>
      <NavLink to={goTo}>
        {/* <button className="text-2xl capitalize bg-[#101c26] hover:text-blue-200 py-2 px-4 rounded-md">
          {text}
        </button> */}
        <button className="custom-button ">
          <span className="button-content">
            <span className="button-text capitalize text-xl md:text-2xl ">{text}</span>
            <span className="button-icon">→</span>
          </span>
          <span className="button-background"></span>
        </button>
      </NavLink>
    </>
  );
};

export default Button;
