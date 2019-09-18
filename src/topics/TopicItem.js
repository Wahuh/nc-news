import React from "react";
import { Flex, Link as RebassLink } from "rebass";
import { Link } from "@reach/router";

const TopicItem = ({ topic }) => {
  const { slug } = topic;
  return (
    <Flex
      paddingX={4}
      paddingY={1}
      sx={{
        borderRadius: "3rem",
        borderColor: "link",
        borderWidth: "2px",
        borderStyle: "solid"
      }}
      mr={5}
      as="li"
      alignItems="center"
    >
      <RebassLink
        as={Link}
        color="link"
        sx={{ textDecoration: "none" }}
        to={`/t/${slug}`}
        fontWeight={600}
      >
        {slug}
      </RebassLink>
    </Flex>
  );
};

export default TopicItem;
