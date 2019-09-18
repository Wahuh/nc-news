import React from "react";
import { Link as RebassLink } from "rebass";
import { Link } from "@reach/router";

const ActionLink = ({ children, to }) => {
  return (
    <RebassLink
      as={Link}
      to={to}
      letterSpacing="0.025em"
      paddingX={5}
      paddingY={3}
      fontSize={3}
      fontWeight={600}
      backgroundColor="action"
      color="fg"
      sx={{
        textDecoration: "none",
        borderRadius: "4px",
        "&:hover": {
          backgroundColor: "actionHover"
        },
        transition: "background-color 200ms ease-out"
      }}
    >
      {children}
    </RebassLink>
  );
};

export default ActionLink;
