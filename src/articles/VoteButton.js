import React from "react";
import { Button } from "rebass";

const VoteButton = ({ onClick, children, ariaLabel }) => {
  return (
    <Button
      aria-label={ariaLabel}
      sx={{
        border: "none",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
          svg: {
            fill: "white"
          }
        },
        svg: {
          height: "32px",
          width: "32px",
          fill: "icon",
          transition: "fill 150ms ease-out"
        }
      }}
      paddingX={3}
      paddingY={0}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default VoteButton;
