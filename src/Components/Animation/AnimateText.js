import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  before: { opacity: 0, transition: { staggerChildren: 0.1, duration: 1 } },
  after: { opacity: 1, transition: { staggerChildren: 0.1, duration: 1 } },
};
const AnimateText = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={textVariants}
        initial="before"
        animate="after"
        exit="before"
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimateText;
