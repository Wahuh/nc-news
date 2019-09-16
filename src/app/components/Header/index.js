import React from "react";
import { Flex } from "rebass";

const Header = ({ children }) => {
  return (
    <Flex
      sx={{
        flex: "0 0 50px",
        backgroundColor: "white",
        borderBottom: "1px solid rgb(237,239,241)"
      }}
      as="header"
      flexDirection="row"
    >
      {children}
    </Flex>
  );
};

export default Header;
