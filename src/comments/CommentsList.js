import React, { Component } from "react";
import { Flex } from "rebass";
import api from "../api";
import PostCommentForm from "./PostCommentForm";
import CommentItem from "./CommentItem";

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

  handleDeleteComment = async comment_id => {
    try {
      await api.deleteCommentById(comment_id);
      this.setState(currentState => ({
        comments: currentState.comments.filter(
          comment => comment.comment_id !== comment_id
        )
      }));
    } catch (err) {
      console.log("oh dear", err);
    }
  };

  render() {
    const { comments } = this.state;
    const { user, article_id } = this.props;
    const { username } = user;
    return (
      <div>
        <PostCommentForm
          article_id={article_id}
          user={user}
          onPostComment={this.handlePostComment}
        />
        <Flex flexDirection="column">
          {comments.map(comment => (
            <CommentItem
              key={comment.comment_id}
              onDelete={this.handleDeleteComment}
              canBeDeleted={username === comment.author}
              comment={comment}
            />
          ))}
        </Flex>
      </div>
    );
  }
}

export default CommentsList;
