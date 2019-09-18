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
      <Flex
        sx={{ position: "relative" }}
        width="100%"
        justifyContent="center"
        alignItems="center"
        paddingY={4}
      >
        {/* <Text sx={{ position: "absolute", left: "50%" }} color="body" mr={5}>
          Suggested topics:
        </Text> */}
        {topics.map(topic => (
          <TopicItem topic={topic} key={topic.slug} />
        ))}
      </Flex>
    );
  }
}

export default SuggestedTopics;
