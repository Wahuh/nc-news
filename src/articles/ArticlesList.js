import React, { Component } from "react";
import { Router } from "@reach/router";
import { Flex } from "rebass";
import ArticleItem from "./ArticleItem";
import SortBy from "./SortBy";
import api from "../api";
import Article from "./Article";
import ErrorPage from "../errors/ErrorPage";
import Spinner from "../common/Spinner";

class ArticlesList extends Component {
  state = {
    articles: [],
    sortBy: "created_at",
    err: null,
    isLoading: true
  };

  async componentDidMount() {
    await this.fetchArticles();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy } = this.state;
    if (prevProps.topic !== topic || prevState.sortBy !== sortBy) {
      this.setState({ isLoading: true });
      await this.fetchArticles();
    }
  }

  async fetchArticles() {
    const { topic } = this.props;
    const { sortBy } = this.state;
    try {
      const articles = await api.getArticles({ topic, sort_by: sortBy });
      this.setState({ articles, isLoading: false });
    } catch (err) {
      this.setState({ err, isLoading: false });
    }
  }

  handleArticleUpdate = newArticle => {
    this.setState(currentState => {
      const updatedArticles = currentState.articles.map(article =>
        article.article_id === newArticle.article_id ? newArticle : article
      );
      return {
        articles: updatedArticles
      };
    });
  };

  handleSort = sortBy => {
    this.setState({ sortBy });
  };

  render() {
    const { user, topic } = this.props;
    const { articles, err, isLoading } = this.state;
    if (err) return <ErrorPage />;

    return (
      <>
        <Router>
          <Article
            topic={topic}
            onArticleUpdate={this.handleArticleUpdate}
            user={user}
            path="/articles/:article_id/*"
          />
        </Router>
        <Flex flexDirection="column" alignItems="center">
          <Flex flexDirection="row" justifyContent="flex-end">
            <SortBy onSort={this.handleSort} />
          </Flex>
          {isLoading ? (
            <Spinner />
          ) : (
            <Flex as="ul" sx={{ maxWidth: "650px" }} flexDirection="column">
              {articles.map(article => (
                <ArticleItem
                  path={`/t/${article.topic}/articles/${article.article_id}/comments`}
                  key={article.article_id}
                  article={article}
                  onArticleUpdate={this.handleArticleUpdate}
                />
              ))}
            </Flex>
          )}
        </Flex>
      </>
    );
  }
}

export default ArticlesList;
