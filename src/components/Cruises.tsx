import React from "react";
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import "../CSS/Cruises.css";
import Card from "../useful/Card";
import boat from "../assets/boat.webp";
import menai from "../assets/menai.webp";
import menai2 from "../assets/menai2.webp";

const Cruises = () => {
  return (
    <div className="Cruises">
      <div className="title">
        <h1>Puffin Island Cruises</h1>
        <h3>Explore Our Cruise Options for All Ages!</h3>
      </div>
      <div className="cards">
        <Card
          pic={boat}
          alt="fisherman"
          title="Puffin Island Wildlife Cruise"
          filler="The original Puffin Island Cruise is our most popular sea trip! Perfect for animal lovers, this trip includes an abundance of wildlife in their natural habitat, like seabirds, grey seals and possibly bottlenose dolphins!"
        />
        <Card
          pic={menai}
          alt="fisherman"
          title="Extended Wildlife & Sightseeing Cruise"
          filler="See the wildlife and scenery of Puffin Island and the Menai Strait on this extended North Wales sightseeing cruise that carries you past feats of engineering, local wildlife, and more."
        />
        <Card
          pic={menai2}
          alt="fisherman"
          title="Menai Strait Sightseeing Cruise"
          filler="Join us aboard the Island Princess as we take in the architectural sites of the Menai Strait, like Victorian piers and palatial manor houses, and enjoy the beauty of Anglesey."
        />
      </div>
    </div>
  );
};

export default Cruises;
