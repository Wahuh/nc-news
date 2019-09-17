import React, { Component } from "react";
import { Flex } from "rebass";
import { Link } from "@reach/router";
import api from "../../../api";

class SuggestedTopics extends Component {
  state = {
    topics: []
  };
  async componentDidMount() {
    const topics = await api.getTopics();
    this.setState({ topics });
  }
  render() {
    const { topics } = this.state;
    return (
      <Flex flexDirection="column">
        {topics.map(({ slug }) => (
          <li>
            <Link to={`/t/${slug}`}>{slug}</Link>
          </li>
        ))}
      </Flex>
    );
  }
}

export default SuggestedTopics;
