import React, { useState, useEffect } from "react";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";
import getData from "../../Utilities/getData";

const About = () => {
  const [pageData, setPageData] = useState();
  useEffect(() => {
    getData("about-page").then((res, err) => {
      setPageData(res);
    });
    console.log(pageData);
  }, [pageData]);

  return <PageWrapper></PageWrapper>;
};

export default About;
