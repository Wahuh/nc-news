import React from "react";
import { Text } from "rebass";
import DateTimeAgo from "../common/DateTimeAgo";

const PostedBy = ({ author, date }) => {
  return (
    <Text color="caption" fontSize={1}>
      Posted by{" "}
      <Text as="span" fontSize={1} color="link">
        {author}
      </Text>{" "}
      <DateTimeAgo date={date} />
    </Text>
  );
};

export default PostedBy;
