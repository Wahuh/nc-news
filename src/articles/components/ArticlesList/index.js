import React, { Component } from "react";
import { Flex } from "rebass";
import ArticleItem from "../ArticleItem/index.js";

const ArticlesList = ({ articles }) => {
  return (
    <Flex as="ul" flexDirection="column">
      {articles.map(article => (
        <ArticleItem key={article.article_id} article={article} />
      ))}
    </Flex>
  );
};

export default ArticlesList;
