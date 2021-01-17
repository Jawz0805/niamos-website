import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ data, setPage, scrollClick }) => {
  const [showDiv, setShowDiv] = useState("0");
  // const [visible, setVisible] = useState(false);

  return (
    <div className="project-list">
      <div
        className="transparent-div"
        style={{ opacity: showDiv, zIndex: showDiv }}
      ></div>
      <div className="projects-grid">
        {data &&
          data.map((data, index) => {
            return (
              <ProjectCard
                data={data}
                index={index}
                // setVisible={setVisible}
                setShowDiv={setShowDiv}
                key={data.id}
                setPage={setPage}
                scrollClick={scrollClick}
              />
            );
          })}
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default ProjectList;
