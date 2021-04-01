import React from "react";
// import Nav from "../Nav/Nav";
import "./_Menu.scss";
import NavItem from "../NavItem/NavItem";

import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ isOpen, setIsOpen, closeMenu }) => {
  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: "100vh", transition: { duration: 0.5 } },
  };
  const backgroundVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, transition: { duration: 0.5 } },
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="menu-container"
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={() => closeMenu()}
        >
          <motion.div
            className="menu"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="nav-items nav-inner-container">
              <NavItem name="Home" path="/home" />
              <NavItem name="About" path="/about" />
              <NavItem name="What's On" path="whatson" />
              <NavItem name="Projects" path="projects"></NavItem>
              <NavItem name="Community" path="community" />
              <NavItem name="Hire" path="hire" />
              <NavItem name="Contact" path="contact" />
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
