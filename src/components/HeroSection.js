import React from "react";
import "./HeroSection.css";

const HeroSection = ({ data }) => {
  return (
    <div className="hero-container">
      {data.map((video, index) => {
        return (
          <section className="section" key={index}>
            <video
              className="video"
              src={video.video}
              alt={video.alt}
              autoPlay
              loop
              muted
            />
            <h1>{video.h1}</h1>
            <p>{video.p}</p>
          </section>
        );
      })}
    </div>
  );
};

export default HeroSection;
