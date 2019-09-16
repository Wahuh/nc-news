import React from "react";
import { Link } from "@reach/router";
import { Flex, Text } from "rebass";

const ArticleItem = ({ article }) => {
  const { title, votes, created_at, comment_count, author } = article;
  return (
    <Flex flexDirection="column" as="li">
      {/* <Link> */}
        <Text>Posted by {author}</Text>
        <Text>{title}</Text>
        <Text>{comment_count} comments</Text>
      {/* </Link> */}
    </Flex>
  );
};

export default ArticleItem;
