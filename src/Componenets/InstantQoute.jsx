import React from "react";

function InstantQoute() {
  return (
    <div className="bg-blue">
      <div className="container">
        <div className="row p-3 d-flex justify-content-center align-items-center">
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start">
            <h3 className="text-white ">Free Instant Qoute</h3>
            <div class="col-12 d-flex justify-content-start align-items-center">
              <span class="hero-title-text text-left">
                <span class="hero-title-text text-blue pl-1 pr-1 text-success ">
                  save upto 40% off
                </span>
              </span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row ">
              <div className="col-12 mt-2 mb-2">
                <small>City you are moving from*</small>
              </div>
              <div className="col-12">
                <div class="searchbar-instant">
                  <span>
                    {" "}
                    <img src="/src/assets/search.svg" />
                  </span>
                  <span>
                    <input type="text" placeholder="City name / Zip from" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row ">
              <div className="col-12 mt-2 mb-2">
                <small>City you are moving to*</small>
              </div>
              <div className="col-12">
                <div class="searchbar-instant">
                  <span>
                    {" "}
                    <img src="/src/assets/search.svg" />
                  </span>
                  <span>
                    <input type="text" placeholder="City name / Zip to" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-center">
            <span>
              <button class="btn-green" type="submit">
                Get Qoute
                <span>
                  <img class="icon-right" src="/src/assets/chevron-right.png" />
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default ;

// =====================================================================================================================================

function InstantQoutePricing() {
  return (
    <div className="bg-blue">
      <div className="container">
        <div className="row p-3 d-flex justify-content-center align-items-center">
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start">
            <h3 className="text-white ">Free Instant Qoute</h3>
            <div class="col-12 d-flex justify-content-start align-items-center">
              <span class="hero-title-text text-left">
                <span class="hero-title-text text-green pl-1 pr-1  ">
                  save upto 40% off
                </span>
              </span>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row ">
              <div className="col-12 mt-2 mb-2">
                <small>City you are moving from*</small>
              </div>
              <div className="col-12">
                <div class="searchbar-instant">
                  <span>
                    {" "}
                    <img src="/src/assets/search.svg" />
                  </span>
                  <span>
                    <input type="text" placeholder="City name / Zip from" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row ">
              <div className="col-12 mt-2 mb-2">
                <small>City you are moving to*</small>
              </div>
              <div className="col-12">
                <div class="searchbar-instant">
                  <span>
                    {" "}
                    <img src="/src/assets/search.svg" />
                  </span>
                  <span>
                    <input type="text" placeholder="City name / Zip to" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-center">
            <span>
              <button class="btn-green" type="submit">
                Get Qoute
                <span>
                  <img class="icon-right" src="/src/assets/chevron-right.png" />
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstantQoutePricing;
InstantQoute;

// =====================================================================================================================================
