import React, { Component } from "react";
import { Location, Router } from "@reach/router";
import { Flex } from "rebass";
import "./App.css";
import Header from "../Header";
import Home from "../../../home/components/Home";
import NavigationDropdown from "../NavigationDropdown";
import Topic from "../../../topics/components/Topic";
import Article from "../../../articles/components/Article";
import CommentsList from "../../../comments/components/CommentsList";
import UserDetails from "../../../user/components/UserDetails";
import api from "../../../api";
import ErrorPage from "../../../errors/components/ErrorPage";

class App extends Component {
  state = {
    user: null
  };

  async componentDidMount() {
    const user = await api.getUserByUsername("jessjelly");
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    if (!user) return null;
    return (
      <Flex sx={{ height: "100vh", width: "100%" }} flexDirection="column">
        <Header>
          <Location>
            {({ location }) => <NavigationDropdown path={location.pathname} />}
          </Location>
          <UserDetails user={user} />
        </Header>

        <Flex
          flexDirection="column"
          alignItems="center"
          sx={{ flex: 1 }}
          as="main"
        >
          <Router>
            <Home path="/" />
            <Topic user={user} path="/t/:topic/*" />
            <ErrorPage default />
          </Router>
        </Flex>
      </Flex>
    );
  }
}

export default App;
