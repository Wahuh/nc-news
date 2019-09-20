import React from "react";
import { Flex, Text, Link as RebassLink } from "rebass";
import { Link } from "@reach/router";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <RebassLink
      as={Link}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: "none",
        width: "120px"
      }}
      to="/"
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        position="relative"
        paddingX={5}
      >
        <div className={styles.Dot1}></div>
        <div className={styles.Dot2}></div>
      </Flex>
      <Text color="body" fontWeight={600} fontSize={4}>
        topical
      </Text>
    </RebassLink>
  );
};

export default Logo;
