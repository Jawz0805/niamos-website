import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import Socials from "../../Socials/Socials";
import "./_NavBar.scss";
import Logo from "../../../Assets/Images/NiamosPurple.png";
import NavSubItem from "../NavItem/NavSubItem";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState("7vh");

  const onMouseOver = () => {
    setVisible(true);
    setHeight("18vh");
  };
  const onMouseOut = () => {
    setVisible(false);
    setHeight("7vh");
  };
  return (
    <div
      className="nav-container"
      // onMouseOver={() => onMouseOver()}
      // onMouseLeave={() => onMouseOut()}
      style={{ height: height }}
    >
      <img
        src={Logo}
        height="100%"
        alt="Niamos"
        style={{ padding: "0 5px", maxWidth: "100%" }}
      />

      <ul className="nav-flex roboto ">
        <div className="nav-items">
          <NavItem name="Home" path="/home" className="" />
          <NavItem name="About" path="/about" />
          <NavItem name="What's On" path="whatson" />
          <NavItem name="Projects" path="projects">
            {/* {visible && (
              <ul className="grid-5">
                <NavSubItem name="Nia TV" path="projects/nia-tv" />
                <NavSubItem name="Kuumba" path="projects/Kuumba" />
                <NavSubItem
                  name="Starvin Artist"
                  path="projects/StarvinArtist"
                />
                <NavSubItem name="Bingo Jesus" path="projects/BingoJesus" />
              </ul>
            )} */}
          </NavItem>
          <NavItem name="Community" path="community" />
          <NavItem name="Hire" path="hire" />
          <NavItem name="Contact" path="contact" />
          <Socials
            className="paddingL"
            facebook="http://www.facebook.com/niaboxoffice"
            instagram="https://www.instagram.com/niamos_mcr/"
            eMail="niamosideas@gmail.com"
            color="#0f1923"
          />
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
