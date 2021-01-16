import React from "react";
import FooterNavItem from "./FooterNavItem";

const FooterNav = () => {
  return (
    <ul className="footer-nav-list">
      <FooterNavItem name="Home" path="/home" />
      <FooterNavItem name="About" path="/about" />
      <FooterNavItem name="What's On" path="whatson" />
      <FooterNavItem name="Projects" path="projects" />
      <FooterNavItem name="Community" path="community" />
      <FooterNavItem name="Hire" path="hire" />
      <FooterNavItem name="Contact" path="contact" />
    </ul>
  );
};

export default FooterNav;
