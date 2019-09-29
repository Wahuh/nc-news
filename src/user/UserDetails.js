import React from "react";
import { Link } from "@reach/router";
import { Flex, Image, Text } from "rebass";

const UserDetails = ({ user }) => {
  const { username, name, avatar_url } = user;
  return (
    <Flex
      as={Link}
      to="/me"
      sx={{ marginLeft: "auto", textDecoration: "none" }}
      flexDirection="row"
      alignItems="center"
      paddingX="1rem"
    >
      <Image
        sx={{
          width: "30px",
          height: "30px",
          borderRadius: "2rem",
          marginRight: "0.5rem"
        }}
        alt={`${username}'s profile image`}
        src={avatar_url}
      />
      <Text color="#bdcadb" fontWeight={600}>
        {username}
      </Text>
    </Flex>
  );
};

export default UserDetails;
