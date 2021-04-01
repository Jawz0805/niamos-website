import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ data, setPage, scrollClick }) => {
  const [showDiv, setShowDiv] = useState("0");

  return (
    <div className="projects-grid">
      {data &&
        data.map((data, index) => {
          return (
            <ProjectCard
              data={data}
              index={index}
              setShowDiv={setShowDiv}
              key={data.id}
              setPage={setPage}
              scrollClick={scrollClick}
            />
          );
        })}
    </div>
  );
};

export default ProjectList;
