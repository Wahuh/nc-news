import React from "react";
import { Link } from "@reach/router";
import { Flex, Text } from "rebass";
import ArticleVotes from "./ArticleVotes";
import api from "../../api";

const ArticleItem = ({ article, onArticleUpdate, path }) => {
  const {
    article_id,
    title,
    votes,
    created_at,
    comment_count,
    author
  } = article;

  const handleUpvote = async () => {
    const article = await api.patchArticle({ article_id, inc_votes: 1 });
    onArticleUpdate(article);
  };

  const handleDownvote = async () => {
    const article = await api.patchArticle({ article_id, inc_votes: -1 });
    onArticleUpdate(article);
  };

  return (
    <Flex flexDirection="row" as="li">
      <Link to={path}>
        <ArticleVotes
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
          votes={votes}
        />
        <Flex flexDirection="column">
          <Text>Posted by {author}</Text>
          <Text>{title}</Text>
          <Text>{comment_count} comments</Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default ArticleItem;
