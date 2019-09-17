import React from "react";
import { Flex, Text } from "rebass";
import { Router } from "@reach/router";
import ArticlesList from "../articles/ArticlesList";

const Topic = ({ user, topic }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex sx={{ width: "100%", backgroundColor: "red", height: "100px" }}>
        <Text>{`t/${topic}`}</Text>
      </Flex>
      <Router>
        <ArticlesList path="/*" user={user} topic={topic} />
      </Router>
    </Flex>
  );
};

export default Topic;
