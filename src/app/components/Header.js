import React from "react";
import { Flex } from "rebass";

const Header = ({ children }) => {
  return (
    <Flex
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "50px",
        backgroundColor: "white",
        borderBottom: "1px solid rgb(237,239,241)",
        zIndex: 2
      }}
      as="header"
      flexDirection="row"
    >
      {children}
    </Flex>
  );
};

export default Header;
