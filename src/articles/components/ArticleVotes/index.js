import React from "react";
import { Button, Flex } from "rebass";

const ArticleVotes = ({ votes, onUpvote, onDownvote }) => {
  return (
    <Flex flexDirection="column">
      <Button onClick={onUpvote}>Upvote</Button>
      {votes}
      <Button onClick={onDownvote}>Downvote</Button>
    </Flex>
  );
};

export default ArticleVotes;
