import React, { Component } from "react";
import { Flex, Button } from "rebass";
import api from "../api";
import PostCommentForm from "./PostCommentForm";
import CommentItem from "./CommentItem";
import ErrorPage from "../errors/ErrorPage";
import Spinner from "../common/Spinner";

class CommentsList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: null,
    hasMore: true,
    page: 1,
    areMoreCommentsLoading: false
  };

  async componentDidMount() {
    const { article_id } = this.props;
    try {
      const comments = await this.fetchComments(article_id);
      this.setState({ comments, isLoading: false });
    } catch (err) {
      this.setState({ err, isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { article_id } = this.props;
    const { page, hasMore } = this.state;
    if (page !== prevState.page) {
      if (hasMore) {
        const comments = await this.fetchComments(article_id);
        if (comments.length < 10) {
          this.setState(currentState => ({
            comments: [...currentState.comments, ...comments],
            hasMore: false,
            areMoreCommentsLoading: false
          }));
        } else {
          this.setState(currentState => ({
            comments: [...currentState.comments, ...comments],
            areMoreCommentsLoading: false
          }));
        }
      }
    }
  }

  async fetchComments(article_id) {
    const { page } = this.state;
    const comments = await api.getCommentsByArticleId(article_id, { p: page });
    return comments;
  }

  handleInfiniteComments = () => {
    this.setState(currentState => ({
      areMoreCommentsLoading: true,
      page: currentState.page + 1
    }));
  };

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
    } catch (err) {}
  };

  render() {
    const {
      comments,
      err,
      isLoading,
      hasMore,
      areMoreCommentsLoading
    } = this.state;
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
              {areMoreCommentsLoading && <Spinner />}
              {hasMore && (
                <Button
                  letterSpacing="0.025em"
                  backgroundColor="#4183c4"
                  mt={5}
                  paddingX={4}
                  paddingY={3}
                  fontSize={2}
                  fontWeight={600}
                  color="heading"
                  onClick={this.handleInfiniteComments}
                >
                  LOAD MORE
                </Button>
              )}
            </Flex>
          </>
        )}
      </Flex>
    );
  }
}

export default CommentsList;
