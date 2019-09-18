import React from "react";
import { Text } from "rebass";

const PostedBy = ({ author }) => {
  return (
    <Text color="caption" fontSize={1}>
      Posted by {author}
    </Text>
  );
};

export default PostedBy;
