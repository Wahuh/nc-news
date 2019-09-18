import React from "react";
import { Flex, Text } from "rebass";
import { Router } from "@reach/router";
import ArticlesList from "../articles/ArticlesList";

const Topic = ({ user, topic }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex
        flexDirection="row"
        alignItems="center"
        paddingX={6}
        sx={{ width: "100%", backgroundColor: "banner", height: "75px" }}
      >
        <Text color="fg" fontWeight={600} fontSize={6}>{`t/${topic}`}</Text>
      </Flex>
      <Router>
        <ArticlesList path="/*" user={user} topic={topic} />
      </Router>
    </Flex>
  );
};

export default Topic;
