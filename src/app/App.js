import React, { Component } from "react";
import { Location, Router } from "@reach/router";
import { Flex } from "rebass";
import "./App.css";
import Header from "./Header";
import Home from "../home/Home";
import NavigationDropdown from "./NavigationDropdown";
import Topic from "../topics/Topic";
import UserDetails from "../user/UserDetails";
import api from "../api";
import ErrorPage from "../errors/ErrorPage";

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
        <Header user={user} />

        <Flex
          flexDirection="row"
          justifyContent="center"
          sx={{ flex: 1, position: "relative", marginTop: "50px" }}
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
