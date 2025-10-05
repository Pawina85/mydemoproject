import React from "react";
import "./HeroSection.css";
import plant from "./potted.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Grow Beautiful <br />Nature at <br /> Home
        </h1>
        <p className="hero__desc">
          Discover beautiful, low maintenance house plants that breathe 
          life into your space—delivered straight to your door
        </p>
        
        <button className="hero__btn">
          learn more
        </button>
        
        <div className="hero__stats">
          <div className="stat">
            <span className="stat-number">2000+</span>
            <span className="stat-label">orders</span>
          </div>
          <div className="stat">
            <span className="stat-number">1100+</span>
            <span className="stat-label">customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">40+</span>
            <span className="stat-label">products</span>
          </div>
        </div>
      </div>

      <div className="hero__image-container">
        <img src={plant} alt="Potted plant" className="hero__image" />
        
        <div className="hero__label hero__label--flowers">
          flowers
        </div>
        <div className="hero__label hero__label--leaves">
          leaves
        </div>
        <div className="hero__label hero__label--pots">
          pots
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
