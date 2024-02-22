import React, { Component } from "react";
import logo from "../../assets/logo5_80.jpg";
import "./navBar.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link to="section2" smooth={true} offset={-70} duration={500}>
                Our Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="section3" smooth={true} offset={-70} duration={500}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="section4" smooth={true} offset={-70} duration={500}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login-signup">Login / Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
