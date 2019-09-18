import React from "react";
import { Link } from "@reach/router";
import { Flex, Text } from "rebass";
import { Cat } from "react-kawaii";

const ErrorPage = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <Text>404</Text>
      <Text>PAGE NOT FOUND</Text>
      <Cat mood="sad" />
      <Link to="/">GO HOME</Link>
    </Flex>
  );
};

export default ErrorPage;
