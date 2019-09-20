import React, { Component } from "react";
import { Box, Flex } from "rebass";
import api from "../api";
import PostCommentForm from "./PostCommentForm";
import CommentItem from "./CommentItem";
import ErrorPage from "../errors/ErrorPage";
import Spinner from "../common/Spinner";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: null
  };

  async componentDidMount() {
    const { article_id } = this.props;
    try {
      const comments = await api.getCommentsByArticleId(article_id);
      this.setState({ comments, isLoading: false });
    } catch (err) {
      this.setState({ err, isLoading: false });
    }
  }

  handlePostComment = comment => {
    this.setState(currentState => ({
      comments: [comment, ...currentState.comments]
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
    const { comments, err, isLoading } = this.state;
    const { user, article_id } = this.props;
    const { username } = user;
    if (err) return <ErrorPage />;
    return (
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "340px" }}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
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
          </>
        )}
      </Flex>
    );
  }
}

export default CommentsList;
