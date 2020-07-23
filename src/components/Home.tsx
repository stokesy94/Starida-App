import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/glider.min.css";
import "../CSS/Home.css";
import Card from "../useful/Card";
import fish from "../assets/fishcard.webp";
import cruise from "../assets/cruisecard.webp";
import logo from "../assets/logo.webp";
import boat from "../assets/boat.webp";
import boat2 from "../assets/boat2.webp";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Glider, { GliderMethods } from "react-glider";

const Home = () => {
  return (
    <section>
      <div className="home">
        <div className="seal"></div>
        <div className="welcome">
          <h1>Welcome to our App!</h1>
          <p>
            We are <span>Starida</span>, we provide outstanding experiences to
            our customers along the beautiful coast of North Wales.
          </p>
          <div className="buttons">
            <Link to={"Ftrips"}>
              <button className="button">Book a fishing trip!</button>
            </Link>
            <Link to={"Cruises"}>
              <button className="button">Book a sightseeing trip!</button>
            </Link>
          </div>
        </div>
        <div className="second">
          <div className="gridContainer">
            <Card
              pic={fish}
              alt="fisherman"
              title="Family Fishing Trip"
              filler="Starida offers fun fishing for the whole family Our North Wales sea fishing trips are the perfect way to learn something new, hook a few mackerel, and get views of Puffin Island!"
              link={"Ftrips"}
            />
            <div className="griditem">
              <h3>Explore Our North Wales Experiences</h3>
              <p>
                All trips depart from Beaumaris, in the southeast corner of
                Anglesey.
              </p>
              <p>
                Occasionally fishing trips will depart from Menai Bridge,
                particularly between late October and March.
              </p>
              <p>
                If this is the case, we will send full joining instructions at
                the time of booking.
              </p>
              <p>
                Beaumaris is Anglesey’s former county town and is home to a wide
                variety of shops, coffee shops, pubs and places to eat.
              </p>
            </div>
            <Card
              pic={cruise}
              alt="cruiser"
              title="Puffin Island Wildlife Cruise"
              filler="The original Puffin Island Cruise is our most popular sea trip! Perfect for animal lovers, this trip includes an abundance of wildlife in their natural habitat, like seabirds, grey seals and possibly bottlenose dolphins!"
              link={"Cruises"}
            />
          </div>
        </div>
        <div className="third">
          <img src={logo} alt="wise logo" />
          <div className="pcont">
            <p>
              We are proud to be accredited under the WiSe Scheme which is a
              scheme overseen by the Welsh Government to promote responsible
              wildlife-watching through training, accreditation, and
              awareness-raising.{" "}
            </p>

            <p>
              For more details on the scheme, please visit wisescheme.org.
              Starida are also proud to work with a number of conservation and
              research organisations throughout the year so you can be assured
              that what you hear onboard is as up-to-date as possible!
            </p>
          </div>
        </div>
        <div className="fourth">
          <h3>Choose From One of Our Options Below</h3>
          <div className="duocont">
            <div className="cruises">
              <h4>Explore Our Cruises</h4>
            </div>
            <div className="fishing">
              <h4>Explore Our Fishing Trips</h4>
            </div>
          </div>
        </div>

        <div className="fifth glider-contain">
          <h1>User Testimonials</h1>
          <Glider
            slidesToShow={2.5}
            slidesToScroll={"auto"}
            draggable={true}
            dots="#dots"
            arrows={{ prev: ".glider-prev", next: ".glider-next" }}
          >
            <figure>
              <blockquote>
                "This was such a great experience, will definitley be coming
                back next year!
              </blockquote>
              <figcaption>Jane Doe</figcaption>
            </figure>
            <figure>
              <blockquote>
                "This was such a great experience, will definitley be coming
                back next year!
              </blockquote>
              <figcaption>Jane Doe</figcaption>
            </figure>
            <figure>
              <blockquote>
                "This was such a great experience, will definitley be coming
                back next year!
              </blockquote>
              <figcaption>Jane Doe</figcaption>
            </figure>
            <figure>
              <blockquote>
                "This was such a great experience, will definitley be coming
                back next year!
              </blockquote>
              <figcaption>Jane Doe</figcaption>
            </figure>
            <figure>
              <blockquote>
                "This was such a great experience, will definitley be coming
                back next year!
              </blockquote>
              <figcaption>Jane Doe</figcaption>
            </figure>
          </Glider>

          <div className="glider-dots" id="dots"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
