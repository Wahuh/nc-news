import React from "react";
import ArticlesList from "../../../articles/components/ArticlesList";

const Topic = ({ children, topic }) => {
  return (
    <>
      {children}
      <ArticlesList topic={topic} />
    </>
  );
};

export default Topic;
