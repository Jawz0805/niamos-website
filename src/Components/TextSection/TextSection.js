import React from "react";
import ReactMarkdown from "react-markdown";

const TextSection = ({ text, index }) => {
  let color = "black";

  if (index % 2 === 0) {
    color = "white";
  }
  return (
    <div style={{ padding: "5% 5% 5% 5%" }}>
      <h2 className={`title ${color}`}>{text.title}</h2>
      <ReactMarkdown
        source={text.description}
        className={`markdown-${color}`}
      />
    </div>
  );
};

export default TextSection;
