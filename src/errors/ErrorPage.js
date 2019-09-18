import React from "react";
import { Box, Flex, Text } from "rebass";
import ActionLink from "../common/ActionLink";
import Error404 from "./Error404";
import Error500 from "./Error500";

const errorComponents = {
  404: <Error404 />,
  500: <Error500 />
};

const ErrorPage = ({ code, message }) => {
  return (
    <Flex
      flexDirection={{ default: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <Flex flexDirection="column" alignItems="center" mr={{ lg: 9 }}>
        <Text fontSize={16} lineHeight={1.1} fontWeight={600}>
          {code || 404}
        </Text>
        <Text
          color="body"
          mb={4}
          fontSize={3}
          letterSpacing={1}
          fontWeight={600}
        >
          {message || "PAGE NOT FOUND"}
        </Text>
        <Flex mb={{ default: 7, lg: 0 }}>
          <ActionLink to="/">GO HOME</ActionLink>
        </Flex>
      </Flex>
      {code ? errorComponents[code] : errorComponents[500]}
    </Flex>
  );
};

export default ErrorPage;
