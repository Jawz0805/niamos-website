import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, path }) => {
  return (
    <li className="roboto regular textS nav-sub-item">
      {path && name && <NavLink to={path}>{name}</NavLink>}
    </li>
  );
};

export default NavItem;
