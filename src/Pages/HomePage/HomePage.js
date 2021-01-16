import React, { useState, useEffect, createRef } from "react";

import getData from "../../Utilities/getData";
import HomeNav from "./HomeNav";
import "./HomePage.scss";
import PageSlide from "../../Components/PageSlide/PageSlide";
import CircleImage from "../../Components/CircleImage/CircleImage";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";
import { backgroundColours } from "../../Components/Styles/Colors";

const HomePage = () => {
  const [pageData, setPageData] = useState();
  const [slide, setSlide] = useState();
  const [backgroundColor, setBackgroundColor] = useState("#FEF6E0");
  const [inView, setInView] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getData("home-page").then((res, err) => {
      setPageData(res);
      setSlide(res.homePageSlide[0]);
    });
  }, []);

  const handleSlideChange = (index) => {
    refs[index].current.scrollIntoView({
      top: refs[index].current * index,
    });
    setIndex(index);
  };
  let refs = [];
  console.log(backgroundColours);

  return (
    <PageWrapper>
      <div className="home-page-container">
        {pageData && (
          <HomeNav
            items={pageData.homePageSlide}
            handleSlideChange={handleSlideChange}
            inView={inView}
          />
        )}
        {slide && (
          <div
            style={{
              backgroundColor: backgroundColor.background,
              transition: "500ms",
            }}
            className="slide-outer-container"
          >
            {pageData.homePageSlide.map((slide, i) => {
              const newRef = createRef();
              refs.push(newRef);

              return (
                <section key={slide.id} ref={refs[i]}>
                  <PageSlide
                    slide={slide}
                    index={i}
                    setBackgroundColor={setBackgroundColor}
                    backgroundColour={backgroundColor}
                    setInView={setInView}
                    setIndex={setIndex}
                    handleSlideChange={handleSlideChange}
                  ></PageSlide>
                </section>
              );
            })}
            <div className="container-right">
              {slide.image && (
                <div className="circle-container">
                  <CircleImage source={pageData.homePageSlide[index].image} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default HomePage;
