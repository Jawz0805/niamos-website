import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../../Pages/HomePage/HomePage";
import About from "../../../Pages/About/About";

const PageRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  );
};

export default PageRouter;
