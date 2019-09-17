import React, { Component } from "react";
import { Box } from "rebass";
import SuggestedTopics from "../../topics/components/SuggestedTopics";

class NavigationDropdown extends Component {
  state = {
    showDropdown: false
  };

  toggleDropdown = () => {
    this.setState(currentState => ({
      showDropdown: !currentState.showDropdown
    }));
  };

  render() {
    const { showDropdown } = this.state;
    const { path } = this.props;
    return (
      <Box>
        <Box
          sx={{
            border: "none",
            backgroundColor: "transparent",
            fontFamily: "inherit"
          }}
          as="button"
          onClick={this.toggleDropdown}
        >
          {path === "/" ? "Home" : path}
        </Box>

        {showDropdown && (
          <Box sx={{ position: "fixed", top: '50px' }}>
            <SuggestedTopics />
          </Box>
        )}
      </Box>
    );
  }
}

export default NavigationDropdown;
