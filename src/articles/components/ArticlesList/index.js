import React, { Component } from "react";
import { Flex } from "rebass";
import ArticleItem from "../ArticleItem/index.js";
import SortBy from "../SortBy/index.js";
import api from "../../../api.js";

class ArticlesList extends Component {
  state = {
    articles: [],
    sortBy: "created_at",
    err: null
  };

  async componentDidMount() {
    await this.fetchArticles();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy } = this.state;
    if (prevProps.topic !== topic || prevState.sortBy !== sortBy) {
      await this.fetchArticles();
    }
  }

  async fetchArticles() {
    const { topic } = this.props;
    const { sortBy } = this.state;
    try {
      const articles = await api.getArticles({ topic, sort_by: sortBy });
      this.setState({ articles });
    } catch (err) {
      this.setState({ err });
    }
  }

  handleUpvote = async article_id => {
    const article = await api.patchArticle({ article_id, inc_votes: 1 });
    this.updateArticles(article);
  };

  handleDownvote = async article_id => {
    const article = await api.patchArticle({ article_id, inc_votes: -1 });
    this.updateArticles(article);
  };

  updateArticles(newArticle) {
    this.setState(currentState => {
      const updatedArticles = currentState.articles.map(article =>
        article.article_id === newArticle.article_id ? newArticle : article
      );
      return {
        articles: updatedArticles
      };
    });
  }

  handleSort = sortBy => {
    this.setState({ sortBy });
  };

  render() {
    const { articles, err } = this.state;
    if (err) return <div>OH NOOOOO</div>;

    return (
      <Flex sx={{ position: "relative" }} flexDirection="column">
        <Flex flexDirection="row" justifyContent="flex-end">
          <SortBy onSort={this.handleSort} />
        </Flex>
        <Flex as="ul" flexDirection="column">
          {articles.map(article => (
            <ArticleItem
              onUpvote={this.handleUpvote}
              onDownvote={this.handleDownvote}
              key={article.article_id}
              article={article}
            />
          ))}
        </Flex>
      </Flex>
    );
  }
}

export default ArticlesList;
