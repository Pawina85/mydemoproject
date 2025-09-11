import React from "react";
import "./HeroSection.css";

import plantimageimport from "./PLANT.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">
            Grow Beautiful <span className="highlight">Nature</span> at Home
          </h1>
          <p id="hero-description" className="hero-description">
            Discover beautiful, low maintenance house plants that breathe life into your space—delivered straight to your door.
          </p>
          <a href="#collection" id="hero-cta" className="cta-button">
            Learn More
          </a>
        </div>
        <div className="hero-image-container">
          <div className="image-wrapper">
            <img
              src={plantimageimport}
              alt="Beautiful house plant"
              className="hero-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
