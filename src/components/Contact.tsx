import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import "../CSS/Contact.css";
import * as ScrollMagic from "scrollmagic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import api from "../useful/api";

const Contact = () => {
  useEffect(() => {
    var controller = new ScrollMagic.Controller();

    var scene7 = new ScrollMagic.Scene({
      triggerElement: ".contact h1",
      triggerHook: 0.8,
      duration: "100%",
    })
      .setClassToggle(".contact h1", "visible")

      .addTo(controller);

    var scene8 = new ScrollMagic.Scene({
      triggerElement: ".contact h1",
      triggerHook: 0.8,
      duration: "110%",
    })
      .setClassToggle(".contact button", "visible")

      .addTo(controller);

    var scene9 = new ScrollMagic.Scene({
      triggerElement: ".tagline h1",
      triggerHook: 0.8,
      duration: "110%",
    })
      .setClassToggle(".tagline h1", "visible")

      .addTo(controller);

    var scene10 = new ScrollMagic.Scene({
      triggerElement: "h3:nth-child(2)",
      triggerHook: 0.8,
      duration: "100%",
    })
      .setClassToggle("h3:nth-child(2)", "visible")

      .addTo(controller);

    var scene11 = new ScrollMagic.Scene({
      triggerElement: "h3:nth-child(3)",
      triggerHook: 0.8,
      duration: "110%",
    })
      .setClassToggle("h3:nth-child(3)", "visible")

      .addTo(controller);

    var scene12 = new ScrollMagic.Scene({
      triggerElement: "h3:nth-child(4)",
      triggerHook: 0.8,
      duration: "110%",
    })
      .setClassToggle("h3:nth-child(4)", "visible")

      .addTo(controller);

    var scene13 = new ScrollMagic.Scene({
      triggerElement: ".ptext",
      triggerHook: 0.8,
      duration: "220%",
    })
      .setClassToggle(".w", "visible")

      .addTo(controller);

    var scene14 = new ScrollMagic.Scene({
      triggerElement: ".ptext",
      triggerHook: 0.8,
      duration: "220%",
    })
      .setClassToggle(".n", "visible")

      .addTo(controller);

    var scene15 = new ScrollMagic.Scene({
      triggerElement: ".contactformcontainer",
      triggerHook: 0.8,
      duration: "1000%",
    })
      .setClassToggle(".contactformbox", "visible")

      .addTo(controller);
  });

  return (
    <div className="Contact__overhead">
      <div className="Contactus">
        <h1>Contact Us</h1>
      </div>
      <div className="Contactus__details">
        <h3>Starida Sea Services</h3>

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
      <div className="Contactus__main">
        <iframe
          title="hell"
          width="600"
          height="450"
          src={`https://www.google.com/maps/embed/v1/place?key=${api}
    &q=Starida,Beaumaris,Angelsey`}
        ></iframe>

        <div className="contactformcontainer" id="contact">
          <div className="contactformbox">
            <form action="signup.php" method="POST">
              <div className="input-field">
                <input type="text" name="name" id="name" required={true} />
                <label htmlFor="name">Please Enter Your Full Name</label>
                <span></span>
              </div>
              <div className="input-field">
                <input type="email" name="email" id="email" required={true} />
                <label htmlFor="email">Please Enter Your Email</label>
                <span></span>
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required={true}
                />
                <label htmlFor="subject">Please Enter The Subject</label>
                <span></span>
              </div>
              <div className="input-field">
                <textarea
                  className="contact2"
                  id="message"
                  required={true}
                ></textarea>
                <label htmlFor="message">Please Enter Your Message</label>
              </div>
              <input
                type="submit"
                value="Submit"
                name="submit"
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
