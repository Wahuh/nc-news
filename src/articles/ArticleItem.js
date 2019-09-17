import React from "react";
import { Link } from "@reach/router";
import { Flex, Text, Link as RebassLink } from "rebass";
import ArticleVotes from "./ArticleVotes";
import api from "../api";

const ArticleItem = ({ article, onArticleUpdate, path }) => {
  const {
    article_id,
    title,
    votes,
    created_at,
    comment_count,
    author
  } = article;

  const handleUpvote = async e => {
    const article = await api.patchArticle({ article_id, inc_votes: 1 });
    onArticleUpdate(article);
  };

  const handleDownvote = async e => {
    const article = await api.patchArticle({ article_id, inc_votes: -1 });
    onArticleUpdate(article);
  };

  return (
    <Flex flex={1} as="li">
      <RebassLink
        onClick={e => {
          if (
            e.target.nodeName === "BUTTON" ||
            e.target.nodeName === "svg" ||
            e.target.nodeName === "path"
          ) {
            e.preventDefault();
          }
        }}
        as={Link}
        to={path}
        sx={{ textDecoration: "none", display: "flex", flexDirection: "row" }}
      >
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
      </RebassLink>
    </Flex>
  );
};

export default ArticleItem;
