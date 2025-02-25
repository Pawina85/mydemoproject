import React from "react";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <h1>Dog</h1>
      </div>
      <div className="nav-mid-buttons">
        <p>home</p>
        <p>about</p>
        <p>blog</p>
      </div>
      <a href="#" class="pricing-button">
        Contact us
      </a>
    </div>
  );
};

export default NavBar;
