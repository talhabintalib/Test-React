import React from "react";
import Tick from "../assets/check.svg";
import rightAngle from "../assets/chevron-right.png";
import Search from "../assets/search.svg";
import Header from "/src/Header/Header";
function HeroSection() {
  return (
    <div className="bg-img flex-column">
      <Header />
      <div className="container hero-meterial d-flex flex-column justify-content-center align-items-center">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <span className="hero-title-text text-center">
            <img className="text-blue" src={Tick}></img>
            <span className="hero-title-text text-blue">Perfecting Your relocation Journey</span>
          </span></div>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <h1 className="heading-text">
            Discover the Finest Movers In Your Area
          </h1>
        </div>
        <div className="searchbar">
          <span> <img src={Search} /></span>
          <span> <input type="text" placeholder="Search For Movers" /></span>
          <span> <button className="btn-primary" type="submit">Search For Company<span><img className="icon-right" src={rightAngle} /></span></button></span>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
