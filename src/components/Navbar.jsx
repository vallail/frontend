import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="ProShop" />
        <a href="/">Pro-shop</a>
      </div>
      <nav className="navbar-links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
