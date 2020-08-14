import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Profile from "./views/Profile.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Redirect from="/" component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
