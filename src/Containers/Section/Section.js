import React from "react";
import "./_Section.scss";

const Section = ({ index, children }) => {
  let background = "odd";
  if (index % 2 === 0) {
    background = "even";
  }
  return (
    <section className={`${background} section-${background}`}>
      {children}
    </section>
  );
};

export default Section;
