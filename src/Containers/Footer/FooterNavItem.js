import React from "react";
import { NavLink } from "react-router-dom";

const FooterNavItem = ({ name, path }) => {
  return (
    <li className="footer-nav-item roboto regular textS">
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};

export default FooterNavItem;
