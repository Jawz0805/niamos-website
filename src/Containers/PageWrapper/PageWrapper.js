import React from "react";
import "./PageWrapper.scss";
import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  before: { opacity: 0, transition: { duration: 0.5 } },
  after: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 1, transition: { duration: 0.1 } },
};

const PageWrapper = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="page-wrapper"
        key={children}
        initial="before"
        animate="after"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
