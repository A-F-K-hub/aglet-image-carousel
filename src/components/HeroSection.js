import React, { useRef, useState } from "react";
import "./styles.scss";

const HeroSection = ({ data }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const videoRef = useRef(null);
  const handleMouseOver = (e) => {
    e.target.play();
  };

  const handleMouseOut = (e) => {
    e.target.pause();
  };

  return (
    <div className="hero-container">
      <>
        {data.map((video, index) => {
          console.log({ video });
          return (
            <section className="section" key={index}>
              <video
                className="video"
                src={video.video}
                alt={video.alt}
                autoPlay={mouseOver}
                loop
                muted
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              />
              <h1>{video.h1}</h1>
              <p>{video.p}</p>
            </section>
          );
        })}
      </>
    </div>
  );
};

export default HeroSection;
