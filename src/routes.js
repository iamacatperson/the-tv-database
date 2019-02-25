import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./modules/home/Home";
import MovieDetail from "./modules/movie-list/movie-detail/MovieDetail";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={MovieDetail} path="/movie-detail" />
      </Switch>
    );
  }
}

export default Routes;