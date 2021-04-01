import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Socials from "../../../Components/Socials/Socials";
import Menu from "../Menu/Menu";
import "./_NavBar.scss";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="nav-container"
      // onMouseOver={() => onMouseOver()}
      // onMouseLeave={() => onMouseOut()}
    >
      {!isOpen && (
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          onClick={openMenu}
          className="nav-toggle"
        />
      )}
      {isOpen && (
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          onClick={closeMenu}
          className="nav-toggle"
        />
      )}
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} closeMenu={closeMenu} />
      <div className="nav-first-row">
        <div className="nav-inner-container">
          <Link
            to="/home"
            className="nav-item"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h1 className="nav-heading">Niamos</h1>
          </Link>
          <div className="nav-socials">
            <Socials
              className="paddingL "
              facebook="http://www.facebook.com/niaboxoffice"
              instagram="https://www.instagram.com/niamos_mcr/"
              eMail="niamosideas@gmail.com"
            />
          </div>
        </div>
      </div>

      <div className="nav-second-row">
        <ul className="nav-items nav-inner-container">
          <NavItem name="Home" path="/home" />
          <NavItem name="About" path="/about" />
          <NavItem name="What's On" path="whatson" />
          <NavItem name="Projects" path="projects"></NavItem>
          <NavItem name="Community" path="community" />
          <NavItem name="Hire" path="hire" />
          <NavItem name="Contact" path="contact" />
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
