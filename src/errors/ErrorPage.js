import React from "react";
import { Link } from "@reach/router";
import { Flex, Text } from "rebass";
import { Cat } from "react-kawaii";
import ActionLink from "../common/ActionLink";

const ErrorPage = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <Text fontSize={16} lineHeight={1.1} fontWeight={600}>
        404
      </Text>
      <Text color="body" mb={4} fontSize={3} letterSpacing={1} fontWeight={600}>
        PAGE NOT FOUND
      </Text>
      <Flex mb={7}>
        <ActionLink to="/">GO HOME</ActionLink>
      </Flex>
      <Cat size={200} mood="sad" color="hotpink" />
    </Flex>
  );
};

export default ErrorPage;
