import React from "react";
import "./About.css";
import plantingimport from "./planting.jpg";

const ValueCard = ({ number, title, description }) => (
  <div className="value-card">
    <span className="value-number">{number}</span>
    <h3 className="value-title">{title}</h3>
    <p className="value-description">{description}</p>
  </div>
);

function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-left">
          <div className="section-header">
            <span className="overline">Our Story</span>
            <h2 className="section-title">About Us</h2>
          </div>
          
          <div className="about-description">
            <p className="main-quote">
              "Plants teach us some of life's most important lessons."
            </p>
            <p className="body-text">
              Every tiny seed holds the potential to become something beautiful, 
              but only if it's nurtured with love, sunlight, and water. 
              Just like plants, we too must embrace change, weather the storms, 
              and reach toward the light.
            </p>
          </div>

          <div className="about-values">
            <ValueCard 
              number="01"
              title="Quality First"
              description="Premium plants, carefully selected and nurtured"
            />
            <ValueCard 
              number="02"
              title="Sustainable"
              description="Eco-friendly practices in everything we do"
            />
            <ValueCard 
              number="03"
              title="Expert Care"
              description="Guidance from experienced horticulturists"
            />
          </div>

          <div className="cta-group">
            <a href="#" className="primary-button">
              Learn More
            </a>
            <a href="#" className="text-button">
              <span>View Our Process</span>
              <svg className="arrow-icon" viewBox="0 0 24 24">
                <path d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 1.42 1.42l5-5a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="about-right">
          <div className="image-wrapper">
            <img
              src={plantingimport}
              alt="Our gardening process"
              className="about-image"
            />
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="label">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
