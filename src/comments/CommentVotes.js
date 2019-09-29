import React, { Component } from "react";
import { Flex, Text } from "rebass";
import api from "../api";
import VoteButton from "../articles/VoteButton";
import UpIcon from "../common/UpIcon";
import DownIcon from "../common/DownIcon";
import Toast from "../common/Toast";

class CommentVotes extends Component {
  state = {
    change: 0,
    err: null
  };

  handleVote = async voteDiff => {
    const { comment_id } = this.props;
    this.setState(currentState => ({ change: currentState.change + voteDiff }));
    try {
      await api.patchComment({ comment_id, inc_votes: voteDiff });
    } catch (err) {
      this.setState(currentState => ({
        err,
        change: currentState.change - voteDiff
      }));
    }
  };

  clearError = () => {
    this.setState({ err: null });
  };

  render() {
    const { votes } = this.props;
    const { change, err } = this.state;
    return (
      <Flex alignItems="center">
        <VoteButton onClick={() => this.handleVote(1)}>
          <UpIcon />
        </VoteButton>
        <Text color="action">{votes + change}</Text>
        <VoteButton onClick={() => this.handleVote(-1)}>
          <DownIcon />
        </VoteButton>
        {err && (
          <Toast
            onClick={this.clearError}
            message="Oops! There was a problem updating your vote."
          />
        )}
      </Flex>
    );
  }
}

export default CommentVotes;
