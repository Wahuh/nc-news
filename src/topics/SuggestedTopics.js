import React, { Component } from "react";
import { Flex, Text } from "rebass";
import api from "../api";
import TopicItem from "./TopicItem";

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
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text
          padding={4}
          fontWeight={600}
          as="p"
          letterSpacing="0.025em"
          color="body"
          mr={5}
        >
          SUGGESTED TOPICS
        </Text>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          mb={4}
        >
          {topics.map(topic => (
            <TopicItem topic={topic} key={topic.slug} />
          ))}
        </Flex>
      </Flex>
    );
  }
}

export default SuggestedTopics;
