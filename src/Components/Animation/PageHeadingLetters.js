import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./_Animation.scss";

const HeadingLetters = ({ heading, controls, ref, styleName, color }) => {
  const [string, setString] = useState("");

  useEffect(() => {
    setString(Array.from(heading));
  }, [heading]);

  const containerVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "42%",
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {string && (
          <motion.div
            variants={containerVariants}
            initial={"hidden"}
            animate={"visible"}
            exit="hidden"
            background={""}
            ref={ref}
            className="page-heading-container"
          >
            {string.map((letter, index) => (
              <motion.span
                key={index}
                className="roboto bold page-heading-letters"
                width={"100%"}
                style={{
                  skewX: "-20deg",
                }}
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
