import React from "react";
import ReactMarkdown from "react-markdown";
import "./_SingleImage.scss";

const SingleImage = ({ image, index }) => {
  let side = "left";
  let color = "black";

  if (index % 2 === 0) {
    side = "right";
    color = "white";
  }
  return (
    <div className={`single-image-outer-container ${side}`}>
      <div className="single-image-text-container">
        <h2 className={`single-image-title color`}>{image.title}</h2>
        <ReactMarkdown
          source={image.description}
          className={`markdown-${color}`}
        />
      </div>
      <div className="single-image-container">
        <img
          src={image.image.url}
          alt={image.image.id}
          className="single-image"
        />
      </div>
    </div>
  );
};

export default SingleImage;
