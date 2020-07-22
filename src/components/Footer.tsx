import React from "react";
import "../CSS/Footer.css";
import starida from "../assets/Starida.webp";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <div>
          <FontAwesomeIcon icon={faPhone} /> : XXXXX XXXXXX
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} /> : info@starida.co.uk
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> : Beaumaris, Anglesey, LL58
          9JJ
        </div>
      </div>
      <div className="logo2">
        <img src={starida} alt="logo" className="starida" />
      </div>
      <div className="links">
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"Cruises"}>
            <li>Cruises</li>
          </Link>
          <Link to={"Ftrips"}>
            <li>Fishing Trips</li>
          </Link>
          <Link to={"Gallery"}>
            <li>Gallery</li>
          </Link>
          <Link to={"Faq"}>
            <li>FAQ's</li>
          </Link>
          <Link to={"Contact"}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
