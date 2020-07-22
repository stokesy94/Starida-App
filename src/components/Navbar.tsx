import React, { useEffect, MouseEvent } from "react";
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import starida from "../assets/Starida.webp";
import "../CSS/Navbar.css";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburgers");
    const overlay = document.getElementById("overlay");
    const item = document.querySelectorAll(".overli");
    const lines = document.querySelector(".hamburgers");

    hamburger?.addEventListener("click", function () {
      overlay?.classList.toggle("active");
      item?.forEach((item) => {
        item.classList.toggle("active");
      });
      lines?.classList.toggle("active");
    });
  });
  return (
    <div>
      <header>
        <nav>
          <div className="navbar">
            <img src={starida} alt="Starida Logo" className="logo" />
            <div className="hamburgers" id="hamburger">
              <div className="hamburger"></div>
            </div>
            <div className="overlay" id="overlay">
              <ul>
                <li className="overli">Home</li>
                <li className="overli">Cruises</li>
                <li className="overli">Fishing Trips</li>
                <li className="overli">Gallery</li>
                <li className="overli">FAQ's</li>
                <li className="overli">Contact</li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
