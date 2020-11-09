import React from "react";
import NavItem from "../NavItem/NavItem";
import Socials from "../Socials/Socials";
import "./NavBar.scss";
import Logo from "../../../Assets/Images/NiamosPurple.png";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <img src={Logo} height="100%" alt="Niamos" style={{ padding: "10px" }} />

      <ul className="flexStretch roboto paddingL">
        <NavItem name="Home" path="/home" />
        <NavItem name="About" path="/about" />
        <NavItem name="What's On" path="whatson" />
        <NavItem name="Projects" path="projects" />
        <NavItem name="Community" path="community" />
        <NavItem name="Hire" path="hire" />
        <NavItem name="Contact" path="contact" />
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
