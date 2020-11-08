import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Socials = ({
  facebook,
  instagram,
  youtube,
  twitter,
  website,
  eMail,
  direction,
  color,
}) => {
  return (
    <ul className="flexCenter">
      {facebook && (
        <motion.li className="paddingM" whileHover={{ scale: 1.1 }}>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="2x"
              style={{ color: color }}
            />
          </a>
        </motion.li>
      )}
      {instagram && (
        <motion.li className="paddingM" whileHover={{ scale: 1.1 }}>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="2x"
              style={{ color: color }}
            />
          </a>
        </motion.li>
      )}
      {youtube && (
        <motion.li className="paddingM" whileHover={{ scale: 1.1 }}>
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faYoutubeSquare}
              size="2x"
              style={{ color: color }}
            />
          </a>
        </motion.li>
      )}
      {twitter && (
        <motion.li className="paddingM" whileHover={{ scale: 1.1 }}>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="2x"
              style={{ color: color }}
            />
          </a>
        </motion.li>
      )}
      {website && (
        <motion.li className="paddingM" whileHover={{ scale: 1.1 }}>
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faGlobe}
              size="2x"
              style={{ color: color }}
            />
          </a>
        </motion.li>
      )}
      {eMail && (
        <motion.li className="paddingM" whileHover={{ scale: 1.1 }}>
          <a href={`mailto:${eMail}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
              size="2x"
              style={{ color: color }}
            />
          </a>
        </motion.li>
      )}
    </ul>
  );
};

export default Socials;
