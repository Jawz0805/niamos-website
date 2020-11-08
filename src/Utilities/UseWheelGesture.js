import React, { useState, useEffect } from "react";

import { useWheel } from "react-use-gesture";
import { Lethargy } from "lethargy";
import PageSlide from "../Components/PageSlide/PageSlide";

const lethargy = new Lethargy();

const clamp = (value, min, max) => Math.max(Math.min(max, value), min);

const UseWheelGesture = ({ slides, slideIndex, handleSlideScroll }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(slideIndex);
  }, [slideIndex]);
  useEffect(() => {
    handleSlideScroll(index);
  }, [index]);

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    if (!last) {
      const s = lethargy.check(event);
      if (s) {
        if (!wait) {
          setIndex((i) => clamp(i - s, 0, slides.length - 1));
          return true;
        }
      } else return false;
    } else {
      return false;
    }
  });

  return (
    <div {...bind()}>
      <div>
        <PageSlide slide={slides[index]} index={index} />
      </div>
    </div>
  );
};

export default UseWheelGesture;
