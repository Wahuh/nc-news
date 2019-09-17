import React, { Component } from "react";
import { Flex, Box, Button, Text } from "rebass";
import api from "../../api";

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
    const comment = await api.postComment({ article_id, username, body });
    onPostComment(comment);
    this.setState({ comment: { body: "" } });
  };

  render() {
    const { body } = this.state.comment;
    const { username } = this.props.user;
    return (
      <Flex onSubmit={this.handleSubmit} as="form" flexDirection="row">
        <Text>Comment as {username}</Text>
        <Box
          onChange={this.handleChange}
          as="textarea"
          placeholder="What are your thoughts?"
          value={body}
        ></Box>
        <Button>Post Comment</Button>
      </Flex>
    );
  }
}

export default PostCommentForm;
