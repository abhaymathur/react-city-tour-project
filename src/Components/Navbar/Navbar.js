import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="company logo" />
      <ul className="nav-links">
        <li className="nav-link">
          <a href="">Home</a>
        </li>
        <li className="nav-link">
          <a href="">About</a>
        </li>
        <li className="nav-link active">
          <a href="">Tour</a>
        </li>
      </ul>
    </nav>
  );
}
