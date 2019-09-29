import React from "react";
import { Button, Text } from "rebass";

const SortByButton = ({ text, children, onClick, isActive }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingY: 3,
        cursor: "pointer",
        "&:hover": {
          div: {
            color: isActive ? "action" : "heading"
          }
        },
        transition: "color 200ms ease-out",
        svg: {
          fill: isActive ? "action" : "icon",
          size: "1.25rem",
          marginRight: 2
        },
        borderRadius: 0,
        backgroundColor: "transparent"
      }}
    >
      {children}
      <Text color={isActive ? "action" : "body"}>{text}</Text>
    </Button>
  );
};

export default SortByButton;
