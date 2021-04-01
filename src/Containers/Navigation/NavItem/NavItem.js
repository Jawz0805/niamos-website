import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, path, children }) => {
  return (
    <li className="roboto nav-item">
      {path && name && <NavLink to={path}>{name}</NavLink>}
    </li>
  );
};

export default NavItem;
