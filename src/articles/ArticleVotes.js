import React, { Component } from "react";
import { Flex, Text } from "rebass";
import UpIcon from "../common/UpIcon";
import DownIcon from "../common/DownIcon";
import VoteButton from "./VoteButton";
import api from "../api";
import Toast from "../common/Toast";

class ArticleVotes extends Component {
  state = {
    change: 0,
    err: null
  };

  handleVote = async voteDiff => {
    const { article_id, onArticleUpdate } = this.props;
    this.setState(currentState => ({ change: currentState.change + voteDiff }));
    const article = await api
      .patchArticle({ article_id, inc_votes: voteDiff })
      .catch(err => {
        this.setState(currentState => ({
          err,
          change: currentState.change - voteDiff
        }));
      });
    onArticleUpdate && onArticleUpdate(article);
  };

  clearError = () => {
    this.setState({ err: null });
  };

  render() {
    const { votes } = this.props;
    const { change, err } = this.state;
    return (
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <VoteButton onClick={() => this.handleVote(1)}>
          <UpIcon />
        </VoteButton>
        <Text color="action" as="p" fontSize={3} fontWeight={600}>
          {votes + change}
        </Text>
        <VoteButton onClick={() => this.handleVote(-1)}>
          <DownIcon />
        </VoteButton>
        {err && (
          <Toast
            onClose={this.clearError}
            message="Oops! There was a problem updating your vote."
          />
        )}
      </Flex>
    );
  }
}
export default ArticleVotes;
