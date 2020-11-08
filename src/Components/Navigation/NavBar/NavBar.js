import React from "react";
import NavItem from "../NavItem/NavItem";
import Socials from "../Socials/Socials";
import "./NavBar.scss";
import Logo from "../../../Assets/Images/NiamosPurple.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <img src={Logo} height="100%" alt="Niamos" style={{ padding: "10px" }} />

      <ul className="flexStretch roboto paddingL">
        <NavItem item="Home" />
        <NavItem item="About" />
        <NavItem item="What's On" />
        <NavItem item="Projects" />
        <NavItem item="Community" />
        <NavItem item="Hire" />
        <NavItem item="Contact" />
      </ul>
      <div style={{ position: "absolute", right: 0 }}>
        <Socials
          className="paddingL"
          facebook="http://www.facebook.com/niaboxoffice"
          instagram="https://www.instagram.com/niamos_mcr/"
          eMail="niamosideas@gmail.com"
          color="white"
        />
      </div>
    </nav>
  );
};

export default NavBar;
