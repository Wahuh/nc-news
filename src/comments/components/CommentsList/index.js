import React, { Component } from "react";
import { Flex } from "rebass";
import api from "../../../api";

class CommentsList extends Component {
  state = {
    comments: []
  };

  async componentDidMount() {
    const { article_id } = this.props;
    const comments = await api.getCommentsByArticleId(article_id);
    this.setState({ comments });
  }

  render() {
    const { comments } = this.state;
    return (
      <Flex flexDirection="column">
        {comments.map(comment => {
          const { votes, author, created_at, comment_id, body } = comment;
          return (
            <li>
              {author}
              {body}
            </li>
          );
        })}
      </Flex>
    );
  }
}

export default CommentsList;
