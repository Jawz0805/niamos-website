import React, { useState } from "react";
import { motion } from "framer-motion";
import "./_Projects.scss";

const ProjectCard = ({ data, index, setShowDiv, setPage, scrollClick }) => {
  const [scale, setScale] = useState(1);

  const hover = () => {
    setScale(1.05);
  };
  const stopHover = () => {
    setScale(1);
  };

  const handleOnClick = (data) => {
    setPage(data);
    scrollClick();
  };

  return (
    <motion.div
      className={`card-outer-container position-left  `}
      onMouseOver={() => hover()}
      onMouseLeave={() => stopHover()}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        handleOnClick(data);
      }}
    >
      <div className="card-image-container">
        <motion.img
          src={data.displayImage.url}
          className="card-image"
          alt={data.id}
          animate={{ scale: scale }}
        ></motion.img>
      </div>
      <div className="text-div">
        <h3 className="card-title">{data.title}</h3>
        <h4 className="card-subtitle">{data.subTitle}</h4>
        <p className="short-description">{data.shortDescription}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
