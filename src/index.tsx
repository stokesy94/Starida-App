import React from "react";
import ReactDOM from "react-dom";
import "./CSS/App.css";
import App from "./App";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
