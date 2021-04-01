import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import About from "../Pages/About/About";
import WhatsOn from "../Pages/WhatsOn/WhatsOn";
import HirePage from "../Pages/HirePage/HirePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ProjectPage from "../Pages/ProjectPage/ProjectPage";
import ContactPage from "../Pages/ContactPage/ContactPage";

import getData from "../Utilities/getData";
import TopicPage from "../Pages/TopicPage/TopicPage";

const PageRouter = () => {
  const [pageData, setPageData] = useState("");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    getData("projects").then((res, err) => {
      setPageData(res);
    });
  }, [setPageData]);

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
      {pageData &&
        pageData.map((page, index) => {
          return (
            <Route path={`/${page.title}`} key={page.id}>
              <TopicPage page={page} />
            </Route>
          );
        })}
    </Switch>
  );
};

export default PageRouter;
