import React from "react";
import { Link } from "@reach/router";
import { Flex, Text } from "rebass";
import ArticleVotes from "../ArticleVotes";

const ArticleItem = ({ article, onUpvote, onDownvote }) => {
  const {
    article_id,
    title,
    votes,
    created_at,
    comment_count,
    author
  } = article;
  return (
    <Flex flexDirection="row" as="li">
      <ArticleVotes
        onUpvote={() => onUpvote(article_id)}
        onDownvote={() => onDownvote(article_id)}
        votes={votes}
      />
      <Flex flexDirection="column">
        <Text>Posted by {author}</Text>
        <Text>{title}</Text>
        <Text>{comment_count} comments</Text>
      </Flex>
      {/* <Link> */}
      {/* </Link> */}
    </Flex>
  );
};

export default ArticleItem;
