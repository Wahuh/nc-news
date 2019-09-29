import React, { Component } from "react";
import { Flex, Box, Button, Text } from "rebass";
import api from "../api";

class PostCommentForm extends Component {
  state = {
    comment: {
      body: ""
    }
  };

  handleChange = e => {
    const body = e.target.value;
    this.setState({ comment: { body } });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const {
      article_id,
      user: { username },
      onPostComment
    } = this.props;
    const { body } = this.state.comment;
    if (body) {
      const comment = await api.postComment({ article_id, username, body });
      onPostComment(comment);
      this.setState({ comment: { body: "" } });
    }
  };

  render() {
    const { body } = this.state.comment;
    const { username } = this.props.user;
    return (
      <Flex
        width="100%"
        mb={7}
        as="form"
        flexDirection="column"
        onSubmit={this.handleSubmit}
      >
        <Text color="caption" as="label" htmlFor="comment" mb={2} fontSize={2}>
          Comment as{" "}
          <Text fontSize={2} color="heading" as="span">
            {username}
          </Text>
        </Text>
        <Flex
          sx={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#565e80",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            zIndex: 1
          }}
          flexDirection="column"
        >
          <Box
            backgroundColor="header"
            color="body"
            id="comment"
            name="comment"
            rows={5}
            onChange={this.handleChange}
            as="textarea"
            placeholder="What are your thoughts?"
            value={body}
            fontSize={3}
            sx={{
              border: "none",
              fontFamily: "inherit"
            }}
            padding={3}
          />
          <Flex
            paddingX={3}
            paddingY={3}
            justifyContent="flex-end"
            backgroundColor="#565e80"
          >
            <Button
              letterSpacing="0.025em"
              paddingX={4}
              paddingY={2}
              fontSize={2}
              fontWeight={600}
              backgroundColor="#4183c4"
              type="submit"
              sx={{
                transition: "background-color 200ms ease-out",
                "&:disabled": {
                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                  color: "rgba(0, 0, 0, 0.26)"
                },
                "&:hover": {
                  backgroundColor: "#3672ad"
                }
              }}
              disabled={body ? false : true}
              onClick={e => e.stopPropagation()}
            >
              POST COMMENT
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default PostCommentForm;
