import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, path }) => {
  return (
    <li className="paddingS roboto regular marginXL textS">
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};

export default NavItem;
