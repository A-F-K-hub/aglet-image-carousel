import React from "react";
import "../styles.scss";
import { videoData } from "../data";
import HeroSection from "../HeroSection";

function Home() {
  console.log(videoData);
  return (
    <>
      <HeroSection data={videoData} />
    </>
  );
}

export default Home;
