import React from "react";
import { Location, Router } from "@reach/router";
import { Flex } from "rebass";
import "./App.css";
import Header from "../Header";
import Home from "../../../home/components/Home";
import NavigationDropdown from "../NavigationDropdown";
import Topic from "../../../topics/components/Topic";

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
          <Topic path="/t/:topic" />
        </Router>
      </Flex>
    </Flex>
  );
};

export default App;
