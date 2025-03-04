import React from "react";
import "./HeroSection.css";

import plantimageimport from "./PLANT.jpg";

const HeroSection = () => {
  return (
    <section className="Herosection">
      <div className="Heroleftbox">
        <h1>
          Grow Beautiful <br /> Nature at <br /> Home
        </h1>
        <p>
          Discover beautiful, low maintenance <br />
          house plant that breathe <br />
          life into your space-delivered straight to your door
        </p>
        <div>
          <a href="#" className="pricing-button">
            learn more
          </a>
        </div>
      </div>
      <img
        src={plantimageimport}
        alt="plant"
        style={{ width: "300px", height: "auto" }}
        className="Heroleftbox"
      />
    </section>
  );
};

export default HeroSection;
