import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './globalstyles.css';

import Home from "../src/pages/Home";
import ProductsList from "../src/pages/ProductsList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:pocId" component={ProductsList} />
      </Switch>
    </Router>
  );
};

export default App;
