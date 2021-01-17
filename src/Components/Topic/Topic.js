import React from "react";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import "./_Topic.scss";

const Topic = ({ page }) => {
  return (
    <div>
      {page && (
        <div>
          <h2 className="roboto bold">{page.title}</h2>
          <div>
            <ReactMarkdown
              source={page.description}
              className="markdown roboto"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {page.images && (
              <div className="topic-grid">
                {page.images.map((image, i) => {
                  let side = "left";

                  if (i % 2 === 0) {
                    side = "right";
                  }
                  return (
                    <div
                      key={image.id}
                      className={`topic-container flex-${side}`}
                    >
                      <div className="topic-text-container">
                        <h2 className="roboto ">{image.title}</h2>
                        <ReactMarkdown
                          source={image.description}
                          className="markdown roboto"
                        />
                      </div>
                      <div className="topic-image-container">
                        <img
                          src={image.image.url}
                          alt={image.image.id}
                          className="topic-image"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {page.video && (
              <div className="topic-grid">
                {page.video.map((video, i) => {
                  let side = "left";

                  if (i % 2 === 0) {
                    side = "right";
                  }
                  return (
                    <div
                      key={video.id}
                      className={`topic-container flex-${side}`}
                    >
                      <div className="topic-text-container">
                        <h2 className="roboto ">{video.title}</h2>
                        <ReactMarkdown
                          source={video.description}
                          className="markdown roboto"
                        />
                      </div>
                      <ReactPlayer
                        url={video.linkURL}
                        className="topic-image"
                        width="50%"
                        height="auto"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Topic;
