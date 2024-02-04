import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" />
        </div>
      </div>

      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <span> SwimmingEase </span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/why" className="nav-link">
                    Why Us
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="/subscription" className="nav-link">
                  Subscription Plans
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <i className="fa fa-user" aria-hidden="true"></i> Login
                  </Link>
                </li>
                <form className="form-inline">
                  <button
                    className="btn my-2 my-sm-0 nav_search-btn"
                    type="submit"
                  >
                    {/* <i className="fa fa-search" aria-hidden="true"></i> */}
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
