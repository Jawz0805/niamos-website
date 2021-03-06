import React from "react";
import { motion } from "framer-motion";
import "./_HomePage.scss";

const HomeNav = ({ items, handleSlideChange, inView }) => {
  return (
    <ul className="home-nav">
      {items &&
        items.map((item, i) => {
          const className = inView === i ? "dot-active" : "dot";

          return (
            <li key={item.id}>
              <motion.span
                onClick={() => handleSlideChange(i)}
                className={`${className}`}
                style={{ transition: "duration 300ms" }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.span>
            </li>
          );
        })}
    </ul>
  );
};

export default HomeNav;
