import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        className={`${styleName}`}
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
            style={{
              letterSpacing: "0em",
              display: "flex",
              width: "42%",
              skewX: "20deg",
              skewY: "-3deg",
              marginBottom: "60px",

              textShadow: "3px 3px #5F0A87",
              justifyContent: "center",
              borderTop: "5px solid #5F0A87",
              borderBottom: "5px solid #5F0A87",
            }}
          >
            {string.map((letter, index) => (
              <motion.span
                key={index}
                className="roboto bold"
                width={"100%"}
                style={{
                  position: "relative",
                  color: color,
                  fontSize: "100px",
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
