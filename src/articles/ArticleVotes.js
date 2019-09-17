import React from "react";
import { Button, Flex } from "rebass";
import UpIcon from "../common/UpIcon";
import DownIcon from "../common/DownIcon";

const ArticleVotes = ({ votes, onUpvote, onDownvote }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <Button
        sx={{
          border: "none",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          svg: {
            height: "20px",
            width: "20px",
            fill: "black"
          }
        }}
        onClick={onUpvote}
      >
        <UpIcon />
      </Button>
      {votes}
      <Button
        sx={{
          border: "none",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          svg: {
            height: "20px",
            width: "20px",
            fill: "black"
          }
        }}
        onClick={onDownvote}
      >
        <DownIcon />
      </Button>
    </Flex>
  );
};

export default ArticleVotes;
