import React from "react";
import "./About.css";
import plantingimport from "./planting.jpg";

function About() {
  return (
    <section className="about-container">
      <img
        src={plantingimport}
        alt="plant"
        className="about-image"
        style={{
          width: "200px",
          height: "auto",
        }}
      />
      <div className="abouttext">
        <h2>About Us</h2>
        <p>
          "Plants teach us some of life's most brimportant lessons. <br /> They
          remind us that growth takes time, patience, <br />
          and care. Every tiny seed holds the potential to become something
          beautiful, <br />
          but only if it's nurtured with love, sunlight, and water. <br />
          Just like plants, we too must embrace change, weather the storms,{" "}
          <br />
          and reach toward the light. No matter how small the progress, <br />
          every new leaf is proof that we are growing in the right direction.{" "}
          <br />
          So keep planting, keep nurturing, and trust the process—because even
          the
          <br />
          strongest trees started as fragile seedlings. "
        </p>
      </div>
      <div>
        <a href="#" className="second-button">
          learn more
        </a>
      </div>
    </section>
  );
}

export default About;
