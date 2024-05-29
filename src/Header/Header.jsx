import React from "react";
import rightAngle from "../assets/chevron-right.png";
import LogoCompany from "/src/assets/company-logo.png";
import Pricing from "../Pages/Pricing";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div class="container-fluid">
        <nav class="navbar navbar-expand-sm navbar-light bg-none d-flex justify-content-center align-items-center">
          <div class="d-flex justify-content-center align-items-center">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto mx-2 d-flex align-items-center">
              <a class="navbar-brand" href="#">
                <img
                  class="company-logo"
                  src={LogoCompany}
                  alt="Company Logo"
                ></img>
              </a>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Top Movers <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Resources
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                {/* <li><a href="local-movers.html">local movers</a></li> */}
                <Link className="Link" to="/Pricing">
                  Check out Pricing
                </Link>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0 d-flex justify-content-end">
              <button class="btn-primary" type="submit">
                Request Demo{" "}
                <span>
                  <img class="icon-right" src={rightAngle} alt="Right Arrow" />
                </span>
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

// =====================================================================================================================================
