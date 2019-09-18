import React, { Component } from "react";
import { Flex } from "rebass";
import UpIcon from "../common/UpIcon";
import DownIcon from "../common/DownIcon";
import VoteButton from "./VoteButton";
import api from "../api";

class ArticleVotes extends Component {
  state = {
    change: 0
  };

  handleVote = async voteDiff => {
    const { article_id } = this.props;
    this.setState(currentState => ({ change: currentState.change + voteDiff }));
    await api.patchArticle({ article_id, inc_votes: voteDiff });
  };

  render() {
    const { votes } = this.props;
    const { change } = this.state;
    return (
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <VoteButton onClick={() => this.handleVote(1)}>
          <UpIcon />
        </VoteButton>
        {votes + change}
        <VoteButton onClick={() => this.handleVote(-1)}>
          <DownIcon />
        </VoteButton>
      </Flex>
    );
  }
}
export default ArticleVotes;
