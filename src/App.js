import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../src/Pages/Home";
import ProductsList from "../src/Pages/ProductsList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={ProductsList} />
      </Switch>
    </Router>
  );
};

export default App;
