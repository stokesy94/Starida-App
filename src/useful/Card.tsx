import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Card.css";

const Card = (props: any) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.pic} alt={props.alt} className="cardpic" />
      </div>
      <div className="bottom">
        <h3>{props.title}</h3>
        <p>{props.filler}</p>
        <div className="cardbuttons">
          <Link to="#">
            <button className="cardbutton">Book Now</button>
          </Link>
          <Link to={props.link}>
            <button className="cardbutton">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
