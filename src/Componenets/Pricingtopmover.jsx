import React from "react";
import Header from "../Header/Header";
import Tick from "../assets/check.svg";
import Down from "../assets/ico/down-arrow.png";

function Pricingtopmover() {
  return (
    <>
      <div>
        <div className="bg-img flex-column">
          <div className="container hero-meterial d-flex flex-column justify-content-center align-items-center">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <span className="hero-title-text text-center">
                <span className="hero-title-text text-blue1">
                  Last Updated:
                </span>
                <span className="hero-title-text text-blue">04/04/2024</span>
              </span>
            </div>

            <div className="col-12 d-flex justify-content-center align-items-center">
              <h1 className="heading-text">Top Movers Reviews, Pricing</h1>
            </div>
            <h1 className="heading-text2">and More (2024)</h1>
            <p className="parah">
              Have you ever tried finding a good moving company and felt lost in
              a sea of options? You may become confused about which company to
              choose. Well, fear not! My Good Mover has got your back with its
              latest release:
            </p>

            <div className="col-12 d-flex justify-content-center align-items-center">
              <span className="hero-title-text text-center">
                <img className="text-blue" src={Tick}></img>
                <span className="hero-title-text text-blue">
                  Top Movers Ratings Reviews, Pricing and More (2024)
                </span>
              </span>
            </div>

            <span>
              {" "}
              <button className="btn-green" type="submit">
                Search For Company
                <span>
                  <img className="btn-green1" src={Down} />
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricingtopmover;
