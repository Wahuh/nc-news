import React from "react";
import { Flex, Text, Box } from "rebass";

const SortBy = ({ onSort }) => {
  const handleChange = e => {
    onSort(e.target.value);
  };

  return (
    <Flex padding="1rem" flexDirection="row" alignItems="center">
      <Text>SORT</Text>

      <Box
        as="select"
        padding="0.5rem"
        sx={{ border: "none", backgroundColor: "transparent" }}
        onChange={handleChange}
      >
        <option value="created_at">New</option>
        <option value="comment_count">Hot</option>
        <option value="votes">Popular</option>
      </Box>
    </Flex>
  );
};

export default SortBy;
