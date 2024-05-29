import React from "react";
import Header from "../Header/Header";
// import Tick from "../assets/check.svg";
// import Down from "../assets/ico/down-arrow.png";
//import InstantQoute from "../Componenets/InstantQoute";
//import RatingStarts from "../Componenets/RatingStarts";
import Pricingtopmover from "../Componenets/Pricingtopmover";
import InstantQoutePricing from "../Componenets/InstantQoute";
import PricingWhyTrust from "../Componenets/PricingWhyTrust";
import PricingTopRated from "../Componenets/PricingTopRated";

function Pricing() {
  return (
    <>
      <div>
        <Header />
        <Pricingtopmover />
        <InstantQoutePricing />
        <PricingWhyTrust />
        <PricingTopRated/>
        
      </div>
    </>
  );
}

export default Pricing;
