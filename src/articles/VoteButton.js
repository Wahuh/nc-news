import React from "react";
import { Button } from "rebass";

const VoteButton = ({ onClick, children }) => {
  return (
    <Button
      sx={{
        border: "none",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        svg: {
          height: "20px",
          width: "20px",
          fill: "black"
        }
      }}
      paddingX={4}
      paddingY={3}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default VoteButton;
