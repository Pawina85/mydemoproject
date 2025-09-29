import React from "react";
import "./HeroSection.css";
import plantimageimport from "./PLANT.jpg";

const StatCard = ({ number, label }) => (
  <div className="stat-card">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);

const FeatureCard = ({ icon, title }) => (
  <div className="feature-card">
    <span className="feature-icon">{icon}</span>
    <span className="feature-title">{title}</span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="Herosection">
      <div className="hero-content">
        <div className="hero-left">
          <span className="hero-overline">Welcome to Planted</span>
          <h1 className="hero-title">
            Grow Beautiful <br /> Nature at <br /> Home
          </h1>
          <p className="hero-description">
            Discover beautiful, low maintenance house plants that breathe 
            life into your space—delivered straight to your door
          </p>
          
          <div className="stats-container">
            <StatCard number="1000+" label="Happy Customers" />
            <StatCard number="50+" label="Plant Varieties" />
            <StatCard number="24/7" label="Expert Support" />
          </div>

          <div className="cta-container">
            <a href="#" className="primary-button">
              Start Growing
            </a>
            <a href="#" className="outline-button">
              View Collection
            </a>
          </div>

          <div className="features-row">
            <FeatureCard icon="🌿" title="Fresh Plants" />
            <FeatureCard icon="🚚" title="Fast Delivery" />
            <FeatureCard icon="💧" title="Easy Care" />
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src={plantimageimport}
              alt="Beautiful indoor plant"
              className="hero-image"
            />
            <div className="hero-badge">
              <span className="badge-title">New Arrival</span>
              <span className="badge-text">Premium Indoor Plants</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
