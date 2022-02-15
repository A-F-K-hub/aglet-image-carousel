import React from "react";
import "../../App.css";
import { videoData } from "../data";
import HeroSection from "../HeroSection";

function Home() {
  return (
    <>
      <HeroSection data={videoData} />
    </>
  );
}

export default Home;
