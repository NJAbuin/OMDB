import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../redux/store";
import Search from "../components/Search";
import MovieDetails from "../components/MovieDetails";

export default function Routes() {
  return (
    <Provider store={store}>
      <div>
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/movies/:movieID" component={MovieDetails} />
          <Route exact path="/home">
            <Redirect to="/search" />
          </Route>
          <Route exact path="/">
            <Redirect to="/search" />
          </Route>
        </Switch>
      </div>
    </Provider>
  );
}
