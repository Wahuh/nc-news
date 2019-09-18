import React from "react";
import { Button, Flex, Text } from "rebass";
import CloseIcon from "./CloseIcon";

const Toast = ({ message, isError, onClose }) => {
  const handleClose = e => {
    e.preventDefault();
    onClose();
  };

  return (
    <Flex
      backgroundColor="fg"
      mb={4}
      paddingX={5}
      paddingY={3}
      sx={{
        position: "fixed",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%)",
        borderRadius: "4px",
        border: "1px solid rgb(204,204,204)",
        zIndex: 100
      }}
    >
      <Text fontSize={3}>{message}</Text>
      <Button
        onClick={handleClose}
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "transparent",
          svg: {
            fill: "icon",
            height: "1rem",
            width: "1rem"
          }
        }}
      >
        <Text color="action">CLOSE</Text>
        {<CloseIcon />}
      </Button>
    </Flex>
  );
};

export default Toast;
