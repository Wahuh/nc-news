import React from "react";
import { Flex } from "rebass";
import UserDetails from "../user/UserDetails";

const Header = ({ user }) => {
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
      <UserDetails user={user} />
    </Flex>
  );
};

export default Header;
