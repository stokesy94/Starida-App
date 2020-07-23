import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import "../CSS/Faq.css";

const Faq = () => {
  useEffect(() => {
    var acc = document.querySelectorAll(".accordion");
    var panel = document.querySelectorAll(".panel");
    var pane = Array.from(panel);

    for (let i = 0; i < pane.length; i++) {
      acc[i].addEventListener("click", function () {
        acc[i].classList.toggle("active");
        pane[i].classList.toggle("active");
      });
    }
  });

  return (
    <div className="Faq">
      <h1>FAQ's</h1>
      <button className="accordion">What is the check-in process?</button>
      <div className="panel">
        <p>
          Unless otherwise stated, all trips depart from Beaumaris Pier. You
          will need to call at our booking kiosk at least 20 minutes prior to
          the scheduled departure time to allow sufficient time to collect your
          boarding cards and pay any balance due; please bring your booking
          confirmation or payment receipt with you. We are unable to delay
          departure if you are late so please allow sufficient travelling time.
        </p>
      </div>
      <button className="accordion">What Should I Bring?</button>
      <div className="panel">
        <p>
          You are strongly advised to bring suitable clothing with you as it is
          often cooler out at sea. If you’re still feeling the chill, we have a
          limited number of blankets available onboard – ask your crew if you’d
          like to borrow one. We will do our best to get you as close as
          possible to the wildlife without disturbing nesting birds, but you may
          want to bring a pair of binoculars with you for that close-up view.
          And of course, don’t forget your camera!
        </p>
      </div>
      <button className="accordion">
        Are your boats accessible if I have a disability?
      </button>
      <div className="panel">
        <p>
          All vessels can pose accessibility issues at times so we have prepared
          a guide to help you judge the potential ease of access for yourself.
          We think safety comes first, so, unfortunately, coastguard regulations
          mean that some passengers with reduced mobility may be unable to
          travel on some vessels. We are currently working to upgrade the fleet
          so that all passengers can travel, irrespective of their levels of
          mobility; once this work is complete we will update our website
          accordingly. We will not deny boarding to anyone, irrespective of
          ability or level of mobility unless to do so would be unsafe. It is
          not always possible to take all mobility equipment on board, but
          arrangements for their safe storage can be made if you let us know in
          advance. We know that not all disabilities can be seen, so if you have
          any special requirements, please call us ahead of time so we can
          discuss how best to make your trip memorable, for all the right
          reasons. Just so that you’re aware, EU Regulation 1177/2010 does not
          apply to any of our trips.
        </p>
      </div>
      <button className="accordion">Do you allow dogs on board?</button>
      <div className="panel">
        <p>
          Well behaved dogs are more than welcome to join us on our cruises, as
          long as they’re on a lead. If you’d like to bring your dog along, let
          us know at the time of booking. We usually have water available for
          dogs at our booking kiosk, but please make your own arrangements
          whilst on the boat. Unfortunately, we only allow assistance dogs on
          our fishing trips, and then we encourage passengers to make
          alternative arrangements. Dogs often can’t tolerate the rocking motion
          of the vessel whilst drifting, and the hooks and sharp knives on board
          can pose a risk to your pet.
        </p>
      </div>
      <button className="accordion">
        What facilities are available on board?
      </button>
      <div className="panel">
        <p>
          Each boat has a basic toilet, but you are strongly advised to make use
          of the public toilets in town before boarding. You are more than
          welcome to bring drinks and snacks on board, please make use of the
          bins provided or take any rubbish off with you: it is against the law
          to dispose of any waste into the sea. Tea and coffee are available on
          most fishing trips of 3 hours or longer. There are no facilities to
          heat food on board the fishing boats so please bear that in mind when
          deciding what to bring for lunch.
        </p>
      </div>
      <button className="accordion">
        Do you supply lifejackets for passengers?
      </button>
      <div className="panel">
        <p>
          LLifejackets for all passengers are carried on board each boat, and
          are only issued in the event of an emergency; full instructions on
          their use can be found on notices on board. We strongly advise against
          wearing lifejackets aboard the fishing boats as the hooks and sharp
          knives we use can damage the lifejacket and render it ineffective.
        </p>
      </div>
      <button className="accordion">Do you sail in all weather?</button>
      <div className="panel">
        <p>
          All sailings are weather permitting. You are strongly advised to check
          whether your trip will sail as planned prior to joining us. Full
          details of how to check will be emailed to you at time of booking, and
          vary depending on what trip you’ve booked and what time it is due to
          sail. Sometimes the weather at home may be different to the weather in
          Beaumaris, and sometimes it can be different in Beaumaris to what it’s
          like out at sea, so please do call to confirm sailing, don’t just
          assume because it’s sunny where you are that we’ll be sailing! When
          the weather does limit sailing, we will attempt to contact everyone as
          soon as possible, so please make sure you give us the correct contact
          number when you book. We cannot be held responsible for any costs or
          inconvenience you may incur if you fail to confirm your trip with us
          or we are unable to contact you in the event of any last-minute
          cancellation or change. Please call us on 01248 810379 after 09:30 on
          the morning of your trip to confirm whether your trip will sail as
          planned.
        </p>
      </div>
      <button className="accordion">Do you take group bookings?</button>
      <div className="panel">
        <p>
          Yes. And we have special rates depending on the number and makeup of
          your group. We also have special rates for school and college groups,
          as well as youth groups such as Scouts and Guides. If you’d like to
          know more about group bookings, please call 01248 810907.
        </p>
      </div>
    </div>
  );
};

export default Faq;
