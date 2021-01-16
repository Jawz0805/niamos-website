import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./PageSlide.scss";
import { backgroundColours } from "../../Components/Styles/Colors";
import HeadingLetters from "../Animation/HeadingLetters";
import { useInView } from "react-intersection-observer";

const PageSlide = ({
  slide,
  index,
  setBackgroundColor,
  setInView,
  setIndex,
  handleSlideChange,
  backgroundColour,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [text, setText] = useState("markdown");
  useEffect(() => {
    if (inView) {
      setBackgroundColor(backgroundColours[index]);
      setInView(index);
      setIndex(index);
      if (backgroundColour.textColor === "#FEF6E0") {
        setText("markdown-white");
      } else {
        setText("markdown");
      }
    }
  }, [
    inView,
    index,
    setBackgroundColor,
    setInView,
    setIndex,
    setText,
    backgroundColour,
  ]);
  console.log(backgroundColour);

  return (
    <div className="slide-container roboto" ref={ref}>
      {slide && inView && (
        <HeadingLetters
          styleName="slide-title"
          heading={slide.title}
          key={slide.title}
          textColor={backgroundColour.textColor}
        />
      )}
      {slide.subTitle && inView && (
        <HeadingLetters
          styleName="slide-sub-title"
          key={slide.subTitle}
          heading={slide.subTitle}
          textColor={backgroundColour.textColor}
        />
      )}
      {slide.description && inView && (
        <ReactMarkdown
          className={`slide-paragraph ${text}`}
          source={slide.description}
        ></ReactMarkdown>
      )}
    </div>
  );
};

export default PageSlide;
