import React, { Component } from "react";
import { Flex, Text } from "rebass";
import { Router, navigate } from "@reach/router";
import api from "../api";
import ArticleVotes from "./ArticleVotes";
import CommentsList from "../comments/CommentsList";
import Spinner from "../common/Spinner";
import PostedBy from "./PostedBy";
import CommentsCount from "./CommentsCount";
import Modal from "../common/Modal";
import ErrorPage from "../errors/ErrorPage";

class Article extends Component {
  state = {
    article: null,
    isLoading: true,
    err: null
  };

  enableTabbing() {
    const noTab = document.getElementById("notab");
    const tabbables = noTab.querySelectorAll("a, button, input");
    tabbables.forEach(tabbable => {
      tabbable.removeAttribute("tabIndex");
    });
  }

  disableTabbing() {
    const noTab = document.getElementById("notab");
    const tabbables = noTab.querySelectorAll("a, button, input");
    tabbables.forEach(tabbable => {
      tabbable.setAttribute("tabIndex", -1);
    });
  }

  async componentDidMount() {
    this.disableTabbing ();
    await this.fetchArticle();
  }

  componentWillUnmount() {
    this.enableTabbing();
  }

  async componentDidUpdate(prevProps) {
    const { article_id, articlesLength } = this.props;
    if (prevProps.articlesLength !== articlesLength) {
      this.disableTabbing();
    }
    if (prevProps.article_id !== article_id) {
      await this.fetchArticle();
    }
  }

  fetchArticle = async () => {
    const { article_id, topic } = this.props;
    try {
      const article = await api.getArticleById(article_id);
      this.setState({ article, isLoading: false });
    } catch (err) {
      const { status } = err.response;
      this.setState({
        err: {
          code: status,
          message:
            status === 404
              ? "We couldn't find the article"
              : "This article does not exist",
          actionTo: `/t/${topic}`,
          actionLabel: `Back to t/${topic}`
        },
        isLoading: false
      });
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
      <Modal onClose={this.goBackToArticles}>
        <Flex
          flexDirection="row"
          justifyContent="center"
          mt={{ sm: 0, md: 9 }}
          mb={{ sm: 0, md: 9 }}
          width="100%"
          backgroundColor="fg"
          sx={{
            maxWidth: "700px",
            zIndex: 1,
            borderRadius: { sm: 0, md: 1 }
          }}
        >
          {isLoading ? (
            <Spinner />
          ) : err ? (
            <Flex height="calc(100vh - 50px)">
              <ErrorPage
                code={err.code}
                message={err.message}
                actionTo={err.actionTo}
                actionLabel={err.actionLabel}
              />
            </Flex>
          ) : (
            <>
              <ArticleVotes
                onArticleUpdate={onArticleUpdate}
                article_id={article_id}
                votes={article.votes}
              />
              <Flex
                paddingX={{ md: 8 }}
                paddingRight={{ default: 6, md: 10 }}
                paddingY={3}
                flex={1}
                as="div"
                flexDirection="column"
              >
                <PostedBy date={article.created_at} author={article.author} />
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
      </Modal>
    );
  }
}

export default Article;
