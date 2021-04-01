import React from "react";
import PageHeadingLetters from "./PageHeadingLetters";
import ReactMarkdown from "react-markdown";
import "./_PageHeading.scss";

const PageHeading = ({ text }) => {
  return (
    <div className="page-heading-outer-container">
      <div className="page-heading-text-container">
        <PageHeadingLetters heading={text.title} className="page-heading" />
        <h2 className="subtitle fredoka">{text.subTitle}</h2>
        <ReactMarkdown source={text.description} className="markdown-black" />
        {text.coverImage && (
          <div className="page-heading-image">
            <img src={text.coverImage.url} alt={text.coverImage.id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeading;
