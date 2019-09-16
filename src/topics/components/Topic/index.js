import React, { Component } from "react";
import ArticlesList from "../../../articles/components/ArticlesList";
import api from "../../../api";

class Topic extends Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    const { topic } = this.props;
    await this.fetchArticles(topic);
  }

  async componentDidUpdate(prevProps) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      await this.fetchArticles(topic);
    }
  }

  async fetchArticles(topic) {
    const articles = await api.getArticles(topic);
    this.setState({ articles });
  }

  render() {
    const { articles } = this.state;
    const { children } = this.props;
    return (
      <>
        {children}
        <ArticlesList articles={articles} />
      </>
    );
  }
}

export default Topic;
