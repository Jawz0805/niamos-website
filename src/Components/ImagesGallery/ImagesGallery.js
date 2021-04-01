import React from "react";
import ImageGallery from "react-image-gallery";
import TextSection from "../TextSection/TextSection";
import "./_ImagesGallery.scss";

const ImagesGallery = ({ gallery, index }) => {
  let images = [];

  let color = "black";

  if (index % 2 === 0) {
    color = "white";
  }

  gallery.image.map((image, index) => {
    return images.push({
      thumbnail: image.formats.thumbnail.url,
      original: image.url,
    });
  });

  return (
    <div className={`${color}`}>
      <TextSection text={gallery} index={index} />
      {images && (
        <div className="image-gallery-container">
          <ImageGallery items={images} showBullets />
        </div>
      )}
    </div>
  );
};

export default ImagesGallery;
