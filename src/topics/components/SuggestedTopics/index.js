import React, { Component } from "react";
import { Flex } from "rebass";
import { Link } from '@reach/router'
import data from "../../../data/topics.json";

class SuggestedTopics extends Component {
  state = {
    topics: data.topics
  };
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
