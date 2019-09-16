import React, { Component } from "react";
import ArticlesList from "../../../articles/components/ArticlesList";
import api from "../../../api";

class Home extends Component {
  state = {
    articles: []
  };

  async componentDidMount() {
    const articles = await api.getArticles();
    this.setState({ articles });
  }

  render() {
    const { articles } = this.state;
    return <ArticlesList articles={articles} />;
  }
}

export default Home;
