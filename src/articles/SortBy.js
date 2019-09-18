import React from "react";
import Select from "react-select";
import styles from "./SortBy.module.css";
import { Flex, Text, Box } from "rebass";

const options = [
  { value: "created_at", label: "New" },
  { value: "comment_count", label: "Hot" },
  { value: "votes", label: "Popular" }
];

const SortBy = ({ onSort, sortBy }) => {
  const handleChange = selectedOption => {
    onSort(selectedOption.value);
  };

  return (
    <Flex
      mb={3}
      paddingY={3}
      flexDirection="row"
      alignItems="center"
    >
      <Text mr={4} fontWeight={600} fontSize={2} color="body">
        SORT
      </Text>

      <Select
        // as={Select}
        className={styles.SortBy}
        value={options.find(({ value }) => value === sortBy)}
        options={options}
        padding="0.5rem"
        sx={{ border: "none", backgroundColor: "transparent" }}
        onChange={handleChange}
      />
    </Flex>
  );
};

export default SortBy;
