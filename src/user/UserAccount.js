import React from "react";
import { Flex, Image, Text } from "rebass";

const UserAccount = ({ user }) => {
  const { name, username, avatar_url } = user;
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="250px"
        width="250px"
        backgroundColor="fg"
        borderRadius="5px"
      >
        <Text as="h1" fontSize={7} fontWeight={600} color="heading">
          {username}
        </Text>
        <Text as="h2" fontSize={4} fontWeight={400} mb={5} color="body">
          {name}
        </Text>
        <Image
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "50%"
          }}
          alt={`${username}'s profile image`}
          src={avatar_url}
        />
      </Flex>
    </Flex>
  );
};

export default UserAccount;
