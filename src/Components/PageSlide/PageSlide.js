import React from "react";
import ReactMarkdown from "react-markdown";
import "./PageSlide.scss";
import { backgroundColours } from "../../Styles/Colors";
import HeadingLetters from "../Animation/HeadingLetters";
import AnimateText from "../Animation/AnimateText";

const PageSlide = ({ slide, index }) => {
  return (
    <div
      className="slide-container roboto"
      style={{ backgroundColor: backgroundColours[index], transition: "800ms" }}
    >
      {slide && (
        <HeadingLetters
          className="slide-title"
          heading={slide.title}
          key={slide.title}
        />
      )}
      <AnimateText key={slide.description}>
        <ReactMarkdown
          className="slide-paragraph"
          source={slide.description}
        ></ReactMarkdown>
      </AnimateText>
      <div className="container-right"></div>
    </div>
  );
};

export default PageSlide;
