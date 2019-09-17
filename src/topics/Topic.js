import React from "react";
import { Router } from "@reach/router";
import ArticlesList from "../articles/ArticlesList";

const Topic = ({ user, topic }) => {
  return (
      <Router>
        <ArticlesList path="/*" user={user} topic={topic} />
      </Router>
  );
};

export default Topic;
