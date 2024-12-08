import React from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ open, onClick }) => {
  return (
    <div className="relative flex items-center" onClick={onClick}>
      <div className={`hamburger hamburger4 ${open ? "open" : ""}`}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
        <span className="bar bar4"></span>
        <span className="bar bar5"></span>
      </div>
    </div>
  );
};

export default HamburgerMenu;
