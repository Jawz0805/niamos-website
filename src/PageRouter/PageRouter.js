import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";
import WhatsOn from "../Pages/WhatsOn/WhatsOn";
import HirePage from "../Pages/HirePage/HirePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ProjectPage from "../Pages/ProjectPage/ProjectPage";
import ContactPage from "../Pages/ContactPage/ContactPage";

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
      <Route path="/hire">
        <HirePage />
      </Route>
      <Route path="/projects">
        <ProjectPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
    </Switch>
  );
};

export default PageRouter;
