import React from "react";
import Shield from "../assets/ico/shield-check-icon.png";
import DeliveryGuy from "../assets/delivery-guy.png";

function PricingWhyTrust() {
  return (
    <div>
      {/* <div className="container hero-meterial d-flex flex-column justify-content-center align-items-center">
       */}

      <div class="container">
        <div class="row">
          <div class="col">
            <img className="logoShield" src={Shield}></img>
            <div>
              <h1 className="heading-text3">Why Trust My Good Movers</h1>
            </div>
            <p className="parah2">
              At My Good Movers, we prioritize impartiality in our ratings. We
              follow strict rules for how we decide on ratings. We offer full
              disclosure of our methodology to ensure transparency and fairness
              in our evaluations.
            </p>
          </div>

          <div class="col2">
            <img className="deliveyguy" src={DeliveryGuy}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingWhyTrust;
