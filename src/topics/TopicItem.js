import React from "react";
import { Flex, Link as RebassLink } from "rebass";
import { Link } from "@reach/router";

const TopicItem = ({ topic }) => {
  const { slug } = topic;
  return (
    <Flex
      paddingX={4}
      paddingY={1}
      backgroundColor="#4183c4"
      mr={5}
      sx={{
        borderRadius: "3px",
        "&:hover": {
          backgroundColor: "#3672ad"
        },
        "&:last-child": {
          marginRight: 0
        },
        transition: "background-color 200ms ease-out"
      }}
      as="li"
      alignItems="center"
    >
      <RebassLink
        as={Link}
        color="heading"
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
