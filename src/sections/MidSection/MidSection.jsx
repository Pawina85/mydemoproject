import React from "react";
import "./MidSection.css";
import plantsImage from "./plants.jpg";
import plantsimage from "./plantss.jpg";

const PlantCard = ({ category, count }) => (
  <div className="plant-category-card">
    <span className="category-count">{count}</span>
    <span className="category-name">{category}</span>
  </div>
);

const ImageOverlay = ({ image, alt, description }) => (
  <div className="image-overlay-container">
    <img src={image} alt={alt} className="aboutImage" />
    <div className="image-overlay">
      <p>{description}</p>
    </div>
  </div>
);

const MidSection = () => {
  return (
    <section className="Midcontainer">
      <div className="Midleftbox">
        <div className="content-wrapper">
          <h2 className="mid-title">
            More than 40 plants in <br />
            our collection right at <br />
            your fingertips
          </h2>
          
          <div className="categories-grid">
            <PlantCard category="Indoor Plants" count="20+" />
            <PlantCard category="Outdoor Plants" count="15+" />
            <PlantCard category="Succulents" count="10+" />
            <PlantCard category="Rare Finds" count="5+" />
          </div>

          <div className="cta-section">
            <a href="#" className="collection-link">See full collection</a>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-value">95%</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">48h</span>
                <span className="stat-label">Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="image-container">
        <ImageOverlay 
          image={plantsImage}
          alt="Beautiful indoor plants collection"
          description="Premium Indoor Plants"
        />
        <ImageOverlay 
          image={plantsimage}
          alt="Exotic plant varieties"
          description="Rare Plant Collection"
        />
      </div>
    </section>
  );
};

export default MidSection;
