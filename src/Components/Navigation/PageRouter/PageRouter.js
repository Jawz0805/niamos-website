import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../../Pages/HomePage/HomePage";
import About from "../../../Pages/About/About";
import WhatsOn from "../../../Pages/WhatsOn/WhatsOn";

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
      <Route path="/whatson">
        <WhatsOn />
      </Route>
    </Switch>
  );
};

export default PageRouter;
