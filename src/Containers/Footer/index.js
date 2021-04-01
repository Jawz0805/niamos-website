import React from "react";
import "./_Footer.scss";
import FooterNav from "./FooterNav";
import Socials from "../../Components/Socials/Socials";
import FooterNavItem from "./FooterNavItem";
import Button from "../../Components/Button";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="row">
        <div className="first-column">
          <h2 className="roboto footer-heading">Niamos</h2>
          <FooterNav />
        </div>
        <div className="column">
          <h2 className="roboto footer-heading">Projects</h2>
          <ul className="footer-nav-list">
            <FooterNavItem name="Nia TV" path="nia-tv" />
            <FooterNavItem name="Kuumba" path="kuumba" />
            <FooterNavItem name="Starvin Artist" path="starvin-artist" />
            <FooterNavItem name="Bingo Jesus" path="bingo-jesus" />
          </ul>
        </div>
        <div className="column">
          <h2 className="roboto footer-heading">Follow Niamos</h2>
          <div className="socials-wrapper">
            <Socials
              className="footer-socials-container"
              facebook="http://www.facebook.com/niaboxoffice"
              instagram="https://www.instagram.com/niamos_mcr/"
              eMail="niamosideas@gmail.com"
            />
          </div>
          <div style={{ width: "100%" }}>
            <Button text="Subscribe" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="first-column">
          <h4 className="roboto footer-heading">
            Niamos Radical Arts & Culture Centre
          </h4>
          <div className="address roboto">
            <p>Chichester Road, Hulme, Manchester, M15 5EU</p>
          </div>
        </div>
        <div className="column">
          <h4 className="roboto footer-heading">Contact</h4>
          <div className="address roboto">
            <a href="mailto:niamosbookings@gmail.com">
              niamosbookings@gmail.com
            </a>
            {/* <p>07387 369323</p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
