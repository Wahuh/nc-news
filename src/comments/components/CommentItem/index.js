import React from "react";
import { Button, Flex } from "rebass";

const CommentItem = ({ comment, canBeDeleted, onDelete }) => {
  const { votes, author, created_at, comment_id, body } = comment;

  const handleSubmit = e => {
    e.preventDefault();
    onDelete(comment_id);
  };

  return (
    <Flex as="li">
      {author}
      {body}
      {canBeDeleted && (
        <Flex onSubmit={handleSubmit} as="form">
          <Button>Delete Comment</Button>
        </Flex>
      )}
    </Flex>
  );
};

export default CommentItem;
