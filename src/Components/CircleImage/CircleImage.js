import React from "react";
import "./_CircleImage.scss";
import { motion, AnimatePresence } from "framer-motion";

const CircleImage = ({ source, offset }) => {
  const imageVariants = {
    before: {
      opacity: 0,
      scale: 0.95,

      transition: { transition: 1.5, duration: 1 },
    },
    after: {
      opacity: 1,
      scale: 1,

      transition: { transition: 1.5, duration: 1 },
    },
    exit: {
      opacity: 1,
      scale: 0.9,

      transition: { transition: 0.5, duration: 0.3 },
    },
  };
  return (
    <AnimatePresence>
      <motion.img
        variants={imageVariants}
        initial="before"
        animate="after"
        exit="exit"
        src={source.formats.small.url}
        alt={source.id}
        className="circle-image"
        key={source.id}
      />
    </AnimatePresence>
  );
};

export default CircleImage;
