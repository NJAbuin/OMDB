import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Search from "../components/Search";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/search" component={Search} />
        <Route exact path="/home">
          <Redirect to="/search" />
        </Route>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </div>
  );
}
