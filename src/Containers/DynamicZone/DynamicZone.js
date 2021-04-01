import React from "react";
import TextSection from "../../Components/TextSection/TextSection";
import SingleImage from "../../Components/SingleImage/SingleImage";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import ImagesGallery from "../../Components/ImagesGallery/ImagesGallery";
import Section from "../../Containers/Section/Section";
import ImageGrid from "../../Components/ImageGrid/ImageGrid";
import Parallax from "../../Components/Parallax/Parallax";

const DynamicZone = ({ zone }) => {
  return (
    <div style={{ padding: "5% 5% 0" }}>
      {zone &&
        zone.map((zone, index) => {
          if (zone.__component === "text.text-section") {
            return (
              <Section index={index}>
                <TextSection text={zone} key={zone.id} index={index} />
              </Section>
            );
          }
          if (zone.__component === "image.single-image") {
            return (
              <Section index={index}>
                <SingleImage image={zone} key={zone.id} index={index} />
              </Section>
            );
          }
          if (zone.__component === "image.videos") {
            return (
              <Section index={index}>
                <VideoPlayer video={zone} key={zone.id} index={index} />
              </Section>
            );
          }
          if (zone.__component === "image.image-gallery") {
            return (
              <Section index={index}>
                <ImagesGallery gallery={zone} key={zone.id} index={index} />
              </Section>
            );
          }
          if (zone.__component === "image.image-grid") {
            return (
              <Section index={index}>
                <ImageGrid grid={zone} key={zone.id} index={index} />
              </Section>
            );
          }
          if (zone.__component === "image.parallax") {
            return <Parallax props={zone} key={zone.id} />;
          } else {
            return <div key={index}></div>;
          }
        })}
    </div>
  );
};

export default DynamicZone;

//
