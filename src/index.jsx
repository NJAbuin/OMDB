import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles.scss";
import Routes from "./views/Routes";

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
); //ADD NEW COMPONENTS TO MAIN
