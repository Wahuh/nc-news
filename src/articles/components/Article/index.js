import React, { Component } from "react";
import { Flex, Text } from "rebass";
import api from "../../../api";

class Article extends Component {
  state = {
    article: null,
    err: null
  };

  async componentDidMount() {
    const { article_id } = this.props;
    try {
      const article = await api.getArticleById(article_id);
      this.setState({ article });
    } catch (err) {
      this.setState({ err });
    }
  }

  render() {
    const { article, err } = this.state;
    const { children } = this.props;
    if (err) return <div>Invalid article</div>;
    if (!article) return null;
    const { body, author, comment_count, created_at, title, topic } = article;
    return (
      <Flex as="section" flexDirection="column">
        <Text as="h1">{title}</Text>
        <p>{body}</p>
        {children}
      </Flex>
    );
  }
}

export default Article;
