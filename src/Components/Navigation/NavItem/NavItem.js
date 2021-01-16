import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, path, children }) => {
  return (
    <div className="nav-grid-item">
      <li className="roboto regular textS ">
        {path && name && <NavLink to={path}>{name}</NavLink>}
      </li>
      {children && <div className="nav-sub-menu">{children}</div>}
    </div>
  );
};

export default NavItem;
