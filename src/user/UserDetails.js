import React from "react";
import { Flex, Image, Text } from "rebass";

const UserDetails = ({ user }) => {
  const { username, name, avatar_url } = user;
  return (
    <Flex sx={{ marginLeft: "auto" }} flexDirection="row" as="section">
      <Image
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "8px"
        }}
        src={avatar_url}
      />
      <Text>{username}</Text>
    </Flex>
  );
};

export default UserDetails;
