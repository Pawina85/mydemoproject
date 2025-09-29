import React from "react";
import "./NavBar.css";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">Planted</div>
      
      <div className="navbar__links">
        <button onClick={() => scrollToSection('hero')}>home</button>
        <button onClick={() => scrollToSection('about')}>about</button>
        <button onClick={() => scrollToSection('blog')}>blog</button>
      </div>
      
      <button onClick={() => scrollToSection('contact')} className="navbar__btn">
        contact us
      </button>
    </nav>
  );
};

export default NavBar;
