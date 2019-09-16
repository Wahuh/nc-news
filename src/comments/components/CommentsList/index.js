import React, { Component } from "react";
import { Flex } from "rebass";
import api from "../../../api";
import PostCommentForm from "../PostCommentForm";

class CommentsList extends Component {
  state = {
    comments: []
  };

  async componentDidMount() {
    const { article_id } = this.props;
    const comments = await api.getCommentsByArticleId(article_id);
    this.setState({ comments });
  }

  handlePostComment = comment => {
    this.setState(currentState => ({
      comments: [...currentState.comments, comment]
    }));
  };

  render() {
    const { comments } = this.state;
    const { user, article_id } = this.props;
    return (
      <div>
        <PostCommentForm
          article_id={article_id}
          user={user}
          onPostComment={this.handlePostComment}
        />
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
      </div>
    );
  }
}

export default CommentsList;
