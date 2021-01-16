import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import "./Projects.scss";
import Button from "../../Components/Button/index";
import { Link, useRouteMatch } from "react-router-dom";

const ProjectCard = ({
  data,
  index,
  setVisible,
  setShowDiv,
  setPage,
  scrollClick,
}) => {
  const [width, setWidth] = useState("30px");
  const [width2, setWidth2] = useState("0px");
  const [zIndex, setZIndex] = useState("0");
  const [yPos, setYPos] = useState(0);

  let position = "right";
  let flip = "flex-end";
  if (index % 2 === 0) {
    position = "left";
    flip = "flex-start";
  }

  const hover = () => {
    setVisible(true);
    setWidth("0px");
    setWidth2("100%");
    setShowDiv("1");
    setZIndex("4");
    setYPos(10);
  };
  const stopHover = () => {
    setVisible(false);
    setWidth("30px");
    setWidth2("0px");
    setShowDiv("0");
    setZIndex("0");
    setYPos(0);
  };

  const handleOnClick = (data) => {
    setPage(data);
    scrollClick();
  };

  return (
    <motion.div
      className={`card-outer-container position-left  `}
      style={{ zIndex: zIndex }}
      onMouseOver={() => hover()}
      onMouseLeave={() => stopHover()}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        handleOnClick(data);
      }}
    >
      {/* <motion.div
        className={`card-image-container left `}
        style={{
          backgroundImage: `url("${data.projectCard.displayImage.url}")`,
          background: "cover",
        }}
        animate={{
          y: -yPos,
          transition: { ease: "easeInOut", duration: 0.5 },
        }}
      ></motion.div> */}
      <img
        src={data.projectCard.displayImage.url}
        className="card-image"
        alt={data.projectCard.id}
      ></img>

      <h3 className="roboto card-title ">{data.projectCard.Title}</h3>
      <div className="text-div">
        <ReactMarkdown
          source={data.projectCard.description}
          className="roboto "
          style={{ textAlign: "center" }}
        />
      </div>
      <Button text="See More" />
    </motion.div>
  );
};

export default ProjectCard;
