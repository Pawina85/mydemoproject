import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <h1 className="logo">Planted</h1>
      </div>
      <div className="nav-mid-buttons">
        <p>home</p>
        <p>about</p>
        <p>blog</p>
      </div>
      <div>
        <a href="#" className="first-button">
          Contact us
        </a>
      </div>
    </div>
  );
};

export default NavBar;
