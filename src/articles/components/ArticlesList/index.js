import React, { Component } from "react";
import { Flex } from "rebass";
import ArticleItem from "../ArticleItem/index.js";
import SortBy from "../SortBy/index.js";
import api from "../../../api.js";

class ArticlesList extends Component {
  state = {
    articles: [],
    sortBy: "created_at"
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
    const articles = await api.getArticles({ topic, sort_by: sortBy });
    this.setState({ articles });
  }

  handleSort = sortBy => {
    this.setState({ sortBy });
  };

  render() {
    const { articles } = this.state;
    return (
      <Flex sx={{ position: "relative" }} flexDirection="column">
        <Flex flexDirection="row" justifyContent="flex-end">
          <SortBy onSort={this.handleSort} />
        </Flex>
        <Flex as="ul" flexDirection="column">
          {articles.map(article => (
            <ArticleItem key={article.article_id} article={article} />
          ))}
        </Flex>
      </Flex>
    );
  }
}

export default ArticlesList;
