import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import Search from "../components/Search";
import MovieDetails from "../components/MovieDetails";

export default function Routes() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
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
        </BrowserRouter>
      </Provider>
    </div>
  );
}
