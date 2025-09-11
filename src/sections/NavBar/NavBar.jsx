import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <h1 id="logo" className="logo">Planted</h1>
      </div>
      <div className="nav-mid-buttons">
        <a href="#hero">home</a>
        <a href="#about">about</a>
        <a href="#collection">collection</a>
      </div>
      <div>
        <a href="#about" id="contact-btn" className="first-button">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default NavBar;
