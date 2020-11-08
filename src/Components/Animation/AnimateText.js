import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = {
  before: { opacity: 0, transition: { staggerChildren: 0.2, duration: 2 } },
  after: { opacity: 1, transition: { staggerChildren: 0.2, duration: 2 } },
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
