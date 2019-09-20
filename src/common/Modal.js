import React from "react";
import { Flex } from "rebass";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <Flex
      width="100%"
      height="100%"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1
      }}
    >
      <div onClick={onClose} className={styles.ModalOverlay}>
        {children}
      </div>
    </Flex>
  );
};

export default Modal;
