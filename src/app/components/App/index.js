import React from "react";
import { Location, Router } from "@reach/router";
import { Flex } from "rebass";
import "./App.css";
import Header from "../Header";
import Home from "../../../home/components/Home";
import NavigationDropdown from "../NavigationDropdown";
import Topic from "../../../topics/components/Topic";
import Article from "../../../articles/components/Article";
import CommentsList from "../../../comments/components/CommentsList";

const App = () => {
  return (
    <Flex sx={{ height: "100vh", width: "100%" }} flexDirection="column">
      <Header>
        <Location>
          {({ location }) => <NavigationDropdown path={location.pathname} />}
        </Location>
      </Header>

      <Flex
        flexDirection="column"
        alignItems="center"
        sx={{ flex: 1 }}
        as="main"
      >
        <Router>
          <Home path="/" />
          <Topic path="/t/:topic">
            <Article path="/articles/:article_id">
              <CommentsList path="comments" />
            </Article>
          </Topic>
        </Router>
      </Flex>
    </Flex>
  );
};

export default App;
