import React, { useEffect, useState, useRef } from "react";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";
import getData from "../../Utilities/getData";
import ProjectList from "../../Containers/ProjectList/ProjectList";
import PageHeadingLetters from "../../Components/Animation/PageHeadingLetters";
import ReactMarkdown from "react-markdown";
import Topic from "../../Components/Topic/Topic";

const ProjectPage = () => {
  const [pageData, setPageData] = useState();
  const [page, setPage] = useState("");

  useEffect(() => {
    getData("projects-page").then((res, err) => {
      setPageData(res);
    });
  }, [setPageData]);

  const scrollClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop - 100,
    });
  };

  let ref = useRef();
  return (
    <PageWrapper>
      {pageData && (
        <div className="page-inner-wrapper">
          <PageHeadingLetters heading={pageData.title} color="#FF801F" />

          <ReactMarkdown
            source={pageData.description}
            className="roboto markdown"
          />

          <div
            style={{
              marginTop: "50px",
            }}
          >
            <ProjectList
              data={pageData.project}
              setPage={setPage}
              scrollClick={scrollClick}
            />
          </div>
          <div ref={ref}></div>
          <Topic page={page}></Topic>
        </div>
      )}
    </PageWrapper>
  );
};

export default ProjectPage;
