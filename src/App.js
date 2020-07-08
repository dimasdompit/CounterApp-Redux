import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "./pages/Counter";
import Display from "./pages/Display";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Counter} />
          <Route path="/display" component={Display} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    );
  }
}
