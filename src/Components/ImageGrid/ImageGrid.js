import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import TextSection from "../TextSection/TextSection";

import "./_ImageGrid.scss";

const ImageGrid = ({ grid, index }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  let images = [];
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  grid.images.map((image, index) => {
    return images.push({
      src: image.url,
      width: image.formats.thumbnail.width,
      height: image.formats.thumbnail.height,
    });
  });

  return (
    <div style={{ width: "100%", minHeight: "500px", height: "100%" }}>
      <TextSection text={grid} index={index} />
      <div style={{ width: "100%", minHeight: "200px" }}>
        <Gallery photos={images} height="100%" />
      </div>
    </div>
  );
};

export default ImageGrid;
