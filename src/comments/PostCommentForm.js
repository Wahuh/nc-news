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
    console.log("event");
    e.preventDefault();
    const {
      article_id,
      user: { username },
      onPostComment
    } = this.props;
    const { body } = this.state.comment;
    const comment = await api.postComment({ article_id, username, body });
    onPostComment(comment);
    this.setState({ comment: { body: "" } });
  };

  render() {
    const { body } = this.state.comment;
    const { username } = this.props.user;
    return (
      <Flex
        mb={7}
        onSubmit={this.handleSubmit}
        as="form"
        flexDirection="column"
      >
        <Text as="label" htmlFor="comment" mb={2} fontSize={2}>
          Comment as{" "}
          <Text fontSize={2} color="link" as="span">
            {username}
          </Text>
        </Text>
        <Flex
          sx={{
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "border",
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px"
          }}
          flexDirection="column"
        >
          <Box
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
          ></Box>
          <Flex
            paddingX={3}
            paddingY={3}
            justifyContent="flex-end"
            backgroundColor="form"
          >
            <Button
              letterSpacing="0.025em"
              paddingX={4}
              paddingY={2}
              fontSize={2}
              fontWeight={600}
              backgroundColor="action"
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
