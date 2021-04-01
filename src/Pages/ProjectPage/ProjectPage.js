import React, { useEffect, useState, useRef } from "react";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";
import getData from "../../Utilities/getData";
import ProjectList from "../../Containers/ProjectList/ProjectList";
import Topic from "../../Components/Topic/Topic";
import PageHeading from "../../Containers/PageHeading/PageHeading";

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
      top: ref.current.offsetTop - 0,
    });
  };

  let ref = useRef();
  return pageData ? (
    <PageWrapper>
      <PageHeading text={pageData} />

      <ProjectList
        data={pageData.project}
        setPage={setPage}
        scrollClick={scrollClick}
      />
      <div ref={ref}></div>
      <Topic page={page}></Topic>
    </PageWrapper>
  ) : (
    <></>
  );
};

export default ProjectPage;
