import React from "react";
import HeroSection from "../Componenets/HeroSection";
import InstantQoute from "../Componenets/InstantQoute";
import CompanyLogos from "../Componenets/CompanyLogos";
import TopMovingStates from "../Componenets/TopMovingStates";
import Pricing from "./Pricing";

function Home() {
  return (
    <div>
      <HeroSection />
      <InstantQoute />
      <CompanyLogos />
      <TopMovingStates />
    </div>
  );
}

export default Home;
