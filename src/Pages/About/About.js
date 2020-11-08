import React, { useState, useEffect } from "react";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";
import getData from "../../Utilities/getData";
import PageSlide from "../../Components/PageSlide/PageSlide";

const About = () => {
  const [pageData, setPageData] = useState();
  useEffect(() => {
    getData("about-page").then((res, err) => {
      setPageData(res);
    });
    console.log(pageData);
  }, []);

  return (
    <PageWrapper>
      {pageData &&
        pageData.aboutSlides.map((item, i) => {
          return (
            <PageSlide
              title={item.title}
              description={item.description}
              key={item.id}
              backgroundColor={item.backgroundColor}
            />
          );
        })}
    </PageWrapper>
  );
};

export default About;
