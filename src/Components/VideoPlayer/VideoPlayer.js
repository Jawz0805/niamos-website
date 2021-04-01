import React from "react";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import "./_VideoPlayer.scss";
import TextSection from "../TextSection/TextSection";

const VideoPlayer = ({ video, index }) => {
  let side = "left";

  if (index % 2 === 0) {
    side = "right";
  }
  let image = "";
  if (video.coverImage) {
    let image = video.coverImage.url;
  }

  console.log(video);
  return (
    <div className={`video-outer-container `}>
      <div className="video-text-container">
        <TextSection text={video} />
      </div>
      <ReactPlayer
        url={video.linkURL}
        className="video-container"
        style={{ padding: "0 5% 5% 5%" }}
        width={"80%"}
        light={image}
      />
    </div>
  );
};
export default VideoPlayer;
