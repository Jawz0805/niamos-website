import React from "react";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./_Topic.scss";
import PageHeading from "../../Containers/PageHeading/PageHeading";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";

const Topic = ({ page, ref }) => {
  return page ? (
    <PageWrapper>
      <PageHeading text={page} />
      <div className="topic-list-container">
        {page.projects &&
          page.projects.map((project, index) => {
            let text = "order-1";
            let img = "order-2";

            if (index % 2 === 0) {
              text = "order-2";
              img = "order-1";
            }
            return (
              <Link
                to={project.title}
                className="topic-grid page-heading-outer-container"
              >
                <div className={`topic-text-container black ${text}`}>
                  <h3 className="">{project.title}</h3>
                  <ReactMarkdown
                    source={project.description}
                    className="markdown-black "
                  />
                </div>
                <div className={`topic-image-container ${img}`}>
                  <img
                    src={project.coverImage.url}
                    alt={project.coverImage.id}
                    className="topic-image"
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </PageWrapper>
  ) : (
    <div></div>
  );
};

export default Topic;

// {page.images && (
//
//           </div>
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             {page.video && (
//               <div className="topic-grid">
//                 {page.video.map((video, i) => {
//                   let side = "left";

//                   if (i % 2 === 0) {
//                     side = "right";
//                   }
//                   return (
//                     <div
//                       key={video.id}
//                       className={`topic-container flex-${side}`}
//                     >
//                       <div className="topic-text-container">
//                         <h2 className="roboto ">{video.title}</h2>
//                         <ReactMarkdown
//                           source={video.description}
//                           className="markdown-white roboto"
//                         />
//                       </div>
//                       <ReactPlayer
//                         url={video.linkURL}
//                         className="topic-image"
//                         width="50%"
//                         height="auto"
//                       />
//                     </div>
//                   );
//                 })}
