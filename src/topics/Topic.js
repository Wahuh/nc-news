import React from "react";
import { Flex, Text } from "rebass";
import { Router } from "@reach/router";
import ArticlesList from "../articles/ArticlesList";

const Topic = ({ user, topic }) => {
  return (
    <Flex height="100%" flexDirection="column" alignItems="center">
      <Flex
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%", height: "50px" }}
      >
        <Text color="body" fontWeight={600} fontSize={6}>{`t/${topic}`}</Text>
      </Flex>
      <Router>
        <ArticlesList path="/*" user={user} topic={topic} />
      </Router>
    </Flex>
  );
};

export default Topic;
