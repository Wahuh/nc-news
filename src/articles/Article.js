import React, { Component } from "react";
import { Flex, Text } from "rebass";
import { Router, navigate } from "@reach/router";
import api from "../api";
import ArticleVotes from "./ArticleVotes";
import CommentsList from "../comments/CommentsList";
import Spinner from "../common/Spinner";
import PostedBy from "./PostedBy";
import CommentsCount from "./CommentsCount";

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
      this.setState({ err, isLoading: false });
    }
  };

  goBackToArticles = e => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      const { topic } = this.props;
      navigate(`/t/${topic}`);
    }
  };

  render() {
    const { article, err, isLoading } = this.state;
    const { user, article_id, onArticleUpdate } = this.props;
    if (err) return <div>Invalid article</div>;
    // const {
    //   body,
    //   author,
    //   comment_count,
    //   created_at,
    //   title,
    //   topic,
    //   votes
    // } = article;

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
              maxWidth: "700px",
              backgroundColor: "white",
              zIndex: 1,
              borderRadius: "4px"
            }}
            as="section"
            flexDirection="row"
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <ArticleVotes
                  onArticleUpdate={onArticleUpdate}
                  article_id={article_id}
                  votes={article.votes}
                />
                <Flex
                  paddingX={5}
                  paddingRight={10}
                  paddingY={3}
                  flex={1}
                  as="div"
                  flexDirection="column"
                >
                  <PostedBy author={article.author} />
                  <Text mb={5} as="h1">
                    {article.title}
                  </Text>
                  <Text color="body" mb={5} as="p">
                    {article.body}
                  </Text>
                  <Flex mb={6}>
                    <CommentsCount count={article.comment_count} />
                  </Flex>
                  <Router>
                    <CommentsList user={user} path="/comments" />
                  </Router>
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Article;
