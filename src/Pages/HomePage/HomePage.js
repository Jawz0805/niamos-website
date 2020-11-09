import React, { useState, useEffect } from "react";

import getData from "../../Utilities/getData";
import HomeNav from "./HomeNav";
import "./HomePage.scss";
import UseWheelGesture from "../../Utilities/UseWheelGesture";

const HomePage = () => {
  const [pageData, setPageData] = useState();
  const [slide, setSlide] = useState();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    getData("home-page").then((res, err) => {
      setPageData(res);
      setSlide(res.homePageSlide[0]);
    });
  }, []);

  const handleSlideChange = (index) => {
    setSlideIndex(index);
  };
  const handleSlideScroll = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="home-page-container">
      {pageData && (
        <HomeNav
          items={pageData.homePageSlide}
          handleSlideChange={handleSlideChange}
          index={slideIndex}
        />
      )}
      {slide && (
        <UseWheelGesture
          slides={pageData.homePageSlide}
          slideIndex={slideIndex}
          handleSlideScroll={handleSlideScroll}
        ></UseWheelGesture>
      )}
    </div>
  );
};

export default HomePage;
