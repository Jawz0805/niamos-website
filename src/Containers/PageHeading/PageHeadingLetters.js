import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import "./_Animation.scss";

const HeadingLetters = ({ heading, controls, ref, styleName, color }) => {
  const [string, setString] = useState("");
  const [words, setWords] = useState([]);
  useEffect(() => {
    setString(Array.from(heading));
    // stringSplit(heading)
  }, [heading]);

  // const stringSplit = (string) => {
  //   let words = string.split(" ");
  //   for (let i = 0; i < words.length - 1; i++) {
  //     words[i] += " ";
  //     console.log(1, words);
  //   }
  //   setWords(words);
  //   console.log(2, words);
  // };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: { staggerChildren: 0.15, duration: 0.5 },
    },
  };
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  };
  return (
    <AnimatePresence>
      <div>
        {string && (
          <motion.div
            variants={containerVariants}
            initial={"hidden"}
            animate={"visible"}
            exit="hidden"
            background={""}
            ref={ref}
            className="page-heading-container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {string.map((letter, index) => (
              <motion.span
                key={index}
                className="fredoka bold page-heading-letters"
                width={"100%"}
                variants={letterVariants}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default HeadingLetters;
