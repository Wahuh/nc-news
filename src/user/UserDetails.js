import React from "react";
import { Flex, Image, Text } from "rebass";

const UserDetails = ({ user }) => {
  const { username, name, avatar_url } = user;
  return (
    <Flex
      sx={{ marginLeft: "auto" }}
      flexDirection="row"
      alignItems="center"
      paddingX="1.5rem"
      as="section"
    >
      <Image
        sx={{
          width: "30px",
          height: "30px",
          borderRadius: "2rem",
          marginRight: "0.5rem",
        }}
        src={avatar_url}
      />
      <Text>{username}</Text>
    </Flex>
  );
};

export default UserDetails;
