import React from "react";
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import Card from "../useful/Card";
import "../CSS/Ftrips.css";
import fish1 from "../assets/fish1.webp";
import fish2 from "../assets/fish2.webp";
import fish3 from "../assets/fish3.webp";

const Ftrips = () => {
  return (
    <div className="Ftrips">
      <div className="titles">
        <h1>All Fishing Trips</h1>
        <h3>Sea Fishing Trips in North Wales</h3>
      </div>
      <div className="cards">
        <Card
          pic={fish1}
          alt="fisherman"
          title="Family Fishing Trips"
          filler="Starida offers fun fishing for the whole family Our North Wales sea fishing trips are the perfect way to learn something new, hook a few mackerel, and get views of Puffin Island!"
        />
        <Card
          pic={fish2}
          alt="fisherman"
          title="Enthusiast Fishing Trips"
          filler="This North Wales fishing trip is kicked up a notch! For the angler looking for a longer and more advanced experience than our Family Fishing Trip, the Enthusiast Trip is for you!"
        />
        <Card
          pic={fish3}
          alt="fisherman"
          title="Experienced Fishing Trips"
          filler="Hunt for larger fish from more species on this full-day wreck fishing adventure. Catch bigger fish from a wider variety of species with drift, reef, and deep water fishing options."
        />
      </div>
      <div className="details">
        <h2>Sea Fishing Seasons - When's Best?</h2>
        <p>
          The following is a brief overview of a typical year fishing aboard the
          Starida boats, so that depending upon the month you book, you have a
          good idea of what to expect.
        </p>

        <p>
          <span>January, February, March and April:</span> There can be some
          fine, flat calm sunny days in these months and when the water
          visibility is good, then Herring are caught on the flood on small
          tides at Puffin Sound or the boatyard Beaumaris. Thornbacks, Whiting
          and Dabs can be found, plenty some days, poor others, and some Pollack
          & Cod can sometimes be found. During April the fishing `picks up` with
          more plentiful catches of Herring, Whiting, and Dabs, The Great Ormes
          Head can produce some cracking sport, and the inshore banks and bays
          continue to produce some nice Thornbacks on the fresh Herring as bait.
          The wrecks produce some more Pollack and Codling also when the weather
          permits.
        </p>

        <p>
          <span>May and June:</span> Now the fishing begins to come into its
          own, some fantastic sport can be enjoyed down the side of Puffin
          Island at certain states of the tide, for Herring, Pollack Mackeral,
          Coalfish, Codling and a few Bass. Fishing with Hokkai`s and Shrimp
          rigs, a mixture of these fish can be caught on the same cast! The
          wrecks produce some excellent Cod & good Coalfish offshore with some
          Pollack around the beginning of June, along with some excellent
          Spurdog fishing, a few miles away on a couple of banks. Gurnards and
          Tope also start to show, and in June the mackerel arrive in large
          quantities.
        </p>

        <p>
          <span>July, August, September & October:</span> The long hot summer
          days see the boats working from dawn till dusk. The wrecks producing
          good quantities of quality Pollack with some nice Codling and Coalfish
          mixed in; Slack water and the first of the flood over a wreck can
          produce some Conger Eels and Ling. Fishing over the banks and gullies
          produces some fantastic sport for good quality Tope up to 50-60lb+, as
          well as some nice Rays and Gurnards with Bullhuss and the occasional
          Turbot thrown in. The fishing around Puffin Island is also excellent
          with an abundance of Mackeral, and also fishing with live Sandeel will
          produce some top quality Bass fishing.{" "}
        </p>

        <p>
          {" "}
          <span>November and December:</span> These months see the gradual
          departure of species such as Tope, Mackerel and Gurnards etc and a
          slow return to `Winter fishing`. A trip to the wrecks when the weather
          allows will produce Pollack and Codling, and Whitebeach, Moelfre and
          The Great Orme produce some excellent sport for Whiting, Dabs and a
          few Codling. Usually the last hour or two is spent in the Menai
          Straits around Low water time as the sun is going down trying for a
          few nice `plump Codling and the odd plaice. The Herring return once
          again.
        </p>
      </div>
    </div>
  );
};

export default Ftrips;
