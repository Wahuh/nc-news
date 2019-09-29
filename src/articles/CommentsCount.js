import React from "react";
import { Flex, Text } from "rebass";
import CommentIcon from "../common/CommentIcon";

const CommentsCount = ({ count }) => {
  return (
    <Flex
      alignItems="center"
      sx={{
        svg: { fill: "icon", height: "1rem", width: "1rem", marginRight: "4px" }
      }}
    >
      <CommentIcon />
      <Text color="caption" fontWeight="option" fontSize={2}>
        {count} comments
      </Text>
    </Flex>
  );
};

export default CommentsCount;
