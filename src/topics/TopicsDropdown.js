import React, { Component } from "react";
import { Location } from "@reach/router";
import { Box } from "rebass";
import data from "../../../data/topics.json";

class TopicsDropdown extends Component {
  state = {
    topics: data.topics
  };

  render() {
    const { topics } = this.state;
    return (
      <Location>
        {({ location }) => (
          <Box
            sx={{
              border: "none",
              backgroundColor: "transparent",
              fontFamily: "inherit"
            }}
            as="button"
          >
            {location.pathname}
          </Box>
        )}
      </Location>
      /* {topics.map(topic => {
          return <option>t/{topic.slug}</option>;
        })} */
    );
  }
}

export default TopicsDropdown;
