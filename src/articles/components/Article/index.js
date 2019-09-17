import React, { Component } from "react";
import { Flex, Text, Box } from "rebass";
import { Router } from "@reach/router";
import api from "../../../api";
import ArticleVotes from "../ArticleVotes";
import CommentsList from "../../../comments/components/CommentsList";

class Article extends Component {
  state = {
    article: null,
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
      this.setState({ article });
    } catch (err) {
      this.setState({ err });
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
    const { article, err } = this.state;
    const { user, onUpvote, onDownvote, article_id } = this.props;
    if (err) return <div>Invalid article</div>;
    if (!article) return null;
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
      <Flex as="section" flexDirection="row">
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
    );
  }
}

export default Article;
