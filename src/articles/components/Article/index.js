import React, { Component } from "react";
import { Flex, Text, Box } from "rebass";
import { Router, navigate } from "@reach/router";
import api from "../../../api";
import ArticleVotes from "../ArticleVotes";
import CommentsList from "../../../comments/components/CommentsList";

class Article extends Component {
  state = {
    article: null,
    isLoading: true,
    err: null
  };

  async componentDidMount() {
    await this.fetchArticle();
  }

  async componentDidUpdate(prevProps) {
    const { article_id } = this.props;
    if (prevProps.article_id !== article_id) {
      await this.fetchArticle();
    }
  }

  fetchArticle = async () => {
    const { article_id } = this.props;
    try {
      const article = await api.getArticleById(article_id);
      this.setState({ article, isLoading: false });
    } catch (err) {
      this.setState({ err });
    }
  };

  goBackToArticles = e => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      const { topic } = this.props;
      navigate(`/t/${topic}`);
    }
  };

  handleUpvote = async () => {
    const { onArticleUpdate, article_id } = this.props;
    const article = await api.patchArticle({ article_id, inc_votes: 1 });
    this.setState({ article });
    onArticleUpdate(article);
  };

  handleDownvote = async () => {
    const { onArticleUpdate, article_id } = this.props;
    const article = await api.patchArticle({ article_id, inc_votes: -1 });
    this.setState({ article });
    onArticleUpdate(article);
  };

  render() {
    const { article, err, isLoading } = this.state;
    const { user } = this.props;
    console.log(this.props);
    if (err) return <div>Invalid article</div>;
    if (isLoading) return <p>LOADING</p>;
    const {
      body,
      author,
      comment_count,
      created_at,
      title,
      topic,
      votes
    } = article;

    return (
      <Flex
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          zIndex: 1
        }}
      >
        <Flex
          onClick={this.goBackToArticles}
          flexDirection="column"
          alignItems="center"
          sx={{
            height: "100%",
            width: "100%",
            position: "relative",
            "&::before": {
              width: "100%",
              height: "100%",
              content: "''",
              position: "absolute",
              opacity: 0.8,
              backgroundColor: "black"
            }
          }}
        >
          <Flex
            sx={{
              width: "100%",
              maxWidth: "1024px",
              backgroundColor: "white",
              zIndex: 1
            }}
            as="section"
            flexDirection="row"
          >
            <ArticleVotes
              onUpvote={this.handleUpvote}
              onDownvote={this.handleDownvote}
              votes={votes}
            />
            <Flex as="div" flexDirection="column">
              <Text as="h1">{title}</Text>
              <p>{body}</p>
              <Router>
                <CommentsList user={user} path="/comments" />
              </Router>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Article;
