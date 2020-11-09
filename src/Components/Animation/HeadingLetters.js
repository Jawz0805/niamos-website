import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeadingLetters = ({ heading, controls, ref, styleName }) => {
  const [string, setString] = useState("");

  useEffect(() => {
    setString(Array.from(heading));
  }, [heading]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 1 } },
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
      <div className={`${styleName}`}>
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
              width: "100%",
            }}
          >
            {string.map((letter, index) => (
              <motion.span
                key={index}
                className="roboto textL"
                width={"100%"}
                style={{ position: "relative" }}
                variants={letterVariants}
                style={{ color: "rgba(15,15,40)" }}
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
