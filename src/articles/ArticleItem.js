import React from "react";
import { Link } from "@reach/router";
import { Flex, Text, Link as RebassLink } from "rebass";
import ArticleVotes from "./ArticleVotes";
import CommentsCount from "./CommentsCount";
import PostedBy from "./PostedBy";

const ArticleItem = ({ article, path }) => {
  const {
    article_id,
    title,
    votes,
    created_at,
    comment_count,
    author
  } = article;

  return (
    <Flex
      flex={1}
      backgroundColor="fg"
      sx={{ borderBottom: "1px solid rgb(204,204,204)" }}
      as="li"
      // mb={{ default: 0, }}
    >
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
        sx={{
          flex: 1,
          textDecoration: "none",
          display: "flex",
          flexDirection: { default: "column", lg: "row" },

          "&:focus": {
            color: "green"
          },
          "&:active": {
            color: "none"
          }
        }}
      >
        <ArticleVotes article_id={article_id} votes={votes} />
        <Flex
          paddingRight={3}
          paddingY={3}
          flex={1}
          justifyContent="space-between"
          flexDirection="column"
        >
          <Flex flexDirection="column" mb={6}>
            <PostedBy author={author} date={created_at} />
            <Text color="header" fontWeight="heading" fontSize={5}>
              {title}
            </Text>
          </Flex>
          <CommentsCount count={comment_count} />
        </Flex>
      </RebassLink>
    </Flex>
  );
};

export default ArticleItem;
