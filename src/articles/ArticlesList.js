import React, { Component } from "react";
import { Router } from "@reach/router";
import { Flex } from "rebass";
import ArticleItem from "./ArticleItem";
import SortBy from "./SortBy";
import api from "../api";
import Article from "./Article";
import ErrorPage from "../errors/ErrorPage";
import Spinner from "../common/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
class ArticlesList extends Component {
  state = {
    articles: [],
    sortBy: "created_at",
    err: null,
    isLoading: true,
    page: 1,
    hasMore: true
  };

  async componentDidMount() {
    await this.fetchArticles();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy, page } = this.state;

    if (prevState.page !== page) {
      const { topic } = this.props;
      const { sortBy, page } = this.state;
      const articles = await api.getArticles({
        topic,
        sort_by: sortBy,
        p: page
      });
      this.setState(currentState => ({
        articles: [...currentState.articles, ...articles],
        isLoading: false,
        hasMore: !(articles.length < 10)
      }));
    } else {
      if (prevProps.topic !== topic || prevState.sortBy !== sortBy) {
        this.setState({ isLoading: true });
        await this.fetchArticles();
      }
    }
  }

  async fetchArticles() {
    const { topic } = this.props;
    const { sortBy } = this.state;
    try {
      const articles = await api.getArticles({
        topic,
        sort_by: sortBy
      });
      this.setState({
        articles,
        isLoading: false
      });
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

  handleInfiniteArticles = async () => {
    this.setState(currentState => ({
      page: currentState.page + 1,
      isLoading: false
    }));
  };

  handleSort = sortBy => {
    this.setState({ sortBy });
  };

  render() {
    const { user, topic } = this.props;
    const { articles, err, isLoading, sortBy, hasMore } = this.state;
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
        <Flex id="notab" flexDirection="column" alignItems="center">
          <SortBy path="/*" sortBy={sortBy} onSort={this.handleSort} />
          {isLoading ? (
            <Spinner />
          ) : (
            <Flex
              as="ul"
              paddingX={0}
              width={{ default: "100vw", md: "70vw", lg: "60vw", xl: "50vw" }}
              // sx={{ maxWidth: "60vw" }}
              flexDirection="column"
            >
              <InfiniteScroll
                style={{ paddingBottom: "60px" }}
                loader={<Spinner />}
                dataLength={articles.length}
                next={this.handleInfiniteArticles}
                hasMore={hasMore}
              >
                {articles.map(article => (
                  <ArticleItem
                    path={`/t/${article.topic}/articles/${article.article_id}/comments`}
                    key={article.article_id}
                    article={article}
                    onArticleUpdate={this.handleArticleUpdate}
                  />
                ))}
              </InfiniteScroll>
            </Flex>
          )}
        </Flex>
      </>
    );
  }
}

export default ArticlesList;
