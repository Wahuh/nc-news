import React from "react";
import { Flex, Text } from "rebass";

const SortBy = ({ onSort }) => {
  const handleChange = e => {
    onSort(e.target.value);
  };

  return (
    <Flex>
      <Text>sort by</Text>

      <select onChange={handleChange}>
        <option value="created_at">New</option>
        <option value="comment_count">Hot</option>
        <option value="votes">Popular</option>
      </select>
    </Flex>
  );
};

export default SortBy;
