import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span className="brand">gsd-eventz</span>
          </Link>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#mainNav"
            className="navbar-toggler"
          >
            <i className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/events" className="nav-link">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/training" className="nav-link">
                  Training
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
