import React, { useState, useEffect } from "react";
import getData from "../../Utilities/getData";
import PageWrapper from "../../Containers/PageWrapper/PageWrapper";
import DynamicZone from "../../Containers/DynamicZone/DynamicZone";
import PageHeading from "../../Containers/PageHeading/PageHeading";
import SingleImage from "../../Components/SingleImage/SingleImage";

const TopicPage = ({ page }) => {
  const [pageData, setPageData] = useState("");
  useEffect(() => {
    getData("projects").then((res, err) => {
      setPageData(res);
    });
  }, [setPageData]);

  return (
    <PageWrapper>
      <PageHeading text={page} />

      <DynamicZone zone={page.dynamicZone} />
    </PageWrapper>
  );
};

export default TopicPage;
