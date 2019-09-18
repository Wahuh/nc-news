import React from "react";
import { Button } from "rebass";

const ActionButton = ({ children }) => {
  return (
    <Button
      letterSpacing="0.025em"
      paddingX={4}
      paddingY={2}
      fontSize={2}
      fontWeight={600}
      backgroundColor="action"
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
    </Button>
  );
};

export default ActionButton;
