import React from "react";
import { Link } from "react-router-dom"; 


const Navbar = () => {
  return (
    <header className="header header-light dark-text">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <a className="nav-brand fixed-logo" href="/">
              <img src="/logo.webp" className="logo" alt="Company Logo" />
            </a>
            <div className="nav-toggle"></div>
            <div className="mobile_nav">
              <ul>
                <li>
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                    className="theme-cl fs-lg"
                  >
                    <i className="lni lni-user"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="add-listing.html"
                    className="crs_yuo12 w-auto text-white theme-bg"
                  >
                    <span className="embos_45">
                      <i className="fas fa-plus me-2"></i>Add Listing
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-menus-wrapper">
            <ul className="nav-menu">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">About Us</a>
                <ul className="nav-dropdown nav-submenu">
                  <li>
                    <a href="blog.html">Who We Are</a>
                  </li>
                  <li>
                    <a href="about-us.html">FAQ</a>
                  </li>
                  <li>
                    <a href="contact.html">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="checkout.html">Privacy Policy</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Insights</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul className="nav-menu nav-menu-social align-to-right">
              <li>
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#login"
                  className="ft-bold"
                >
                  <i className="fas fa-sign-in-alt me-1 theme-cl"></i>Sign In
                </a>
              </li>
              <li className="add-listing">
                <a href="add-listing.html">
                  <i className="fas fa-plus me-2"></i>Add Listing
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
