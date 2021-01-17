import React from "react";
import "./_Button.scss";
import { motion } from "framer-motion";

const Button = ({ text, link, color, onClick }) => {
  return (
    <motion.div
      className="button roboto"
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <a href={link} className="transparent">
        <p>
          <span className="bg"></span>
          <span className="base"></span>
          <motion.span className="text" whileHover={{ scale: 1.2 }}>
            {text}
          </motion.span>
        </p>
      </a>
    </motion.div>
  );
};

export default Button;
