import React from "react";
import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Cruises from "./components/Cruises";
import Ftrips from "./components/Ftripts";
import Faq from "./components/Faq";
import Gallery from "./components/Gallery";
import PageNotFound from "./PageNotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cruises" component={Cruises} />
        <Route path="/ftrips" component={Ftrips} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/faq" component={Faq} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
