import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <li className="paddingS roboto regular marginXL textS">
      <NavLink to={item}>{item}</NavLink>
    </li>
  );
};

export default NavItem;
