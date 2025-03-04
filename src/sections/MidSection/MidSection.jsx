import React from "react";
import "./MidSection.css";
import plantsImage from "./plants.jpg";
import plantsimage from "./plantss.jpg";

const MidSection = () => {
  return (
    <>
      <section className="Midcontainer ">
        <div className="Midleftbox">
          <h2>
            More than 40 plants in <br />
            our collection right at <br />
            your fingertips
          </h2>
          <p>See full collection</p>
        </div>
        <div className="image-container">
          <img
            src={plantsImage}
            alt="plants-image"
            style={{ width: "150px", height: "auto" }}
            className="aboutImage"
          />
          <img
            src={plantsimage}
            alt="plant-image"
            style={{ width: "150px", height: "auto" }}
            className="aboutImage"
          />
        </div>
      </section>
    </>
  );
};

export default MidSection;
