import React from "react";
import ArticlesList from "../articles/ArticlesList";
import SuggestedTopics from "../topics/SuggestedTopics";

const Home = () => {
  return (
    <>
      <SuggestedTopics />
      <ArticlesList />
    </>
  );
};

export default Home;
