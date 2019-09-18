import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { Button, Flex, Text } from "rebass";
import CommentVotes from "./CommentVotes";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-UK");

const CommentItem = ({ comment, canBeDeleted, onDelete }) => {
  const { votes, author, created_at, comment_id, body } = comment;

  const handleSubmit = e => {
    e.preventDefault();
    onDelete(comment_id);
  };

  return (
    <Flex
      sx={{
        boxShadow: "0 1px 4px rgba(0,0,0,.04)",
        border: "1px solid rgba(0,0,0,.09)",
        borderRadius: "2px"
      }}
      paddingY={3}
      paddingX={5}
      mb={5}
      as="li"
      flexDirection="column"
    >
      <Flex mb={3} flexDirection="column">
        <Text as="p" mb={1} fontSize={2}>
          {author}
        </Text>
        <Text color="caption" fontSize={1}>
          {timeAgo.format(new Date(created_at))}
        </Text>
      </Flex>
      <Text mb={4} fontSize={3} color="body">
        {body}
      </Text>

      <Flex>
        <CommentVotes comment_id={comment_id} votes={votes} />
        {canBeDeleted && (
          <Flex marginLeft="auto" onSubmit={handleSubmit} as="form">
            <Button
              paddingX={3}
              paddingY={2}
              fontSize={1}
              backgroundColor="transparent"
              color="action"
              fontWeight={600}
              letterSpacing={1}
              fontFamily="inherit"
            >
              DELETE COMMENT
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default CommentItem;
