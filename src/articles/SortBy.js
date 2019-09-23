import React from "react";
import ClockIcon from "../common/ClockIcon";
import HotIcon from "../common/HotIcon";
import PopularIcon from "../common/PopularIcon";
import Select from "react-select";
import styles from "./SortBy.module.css";
import { Flex, Text, Button } from "rebass";
import SortByButton from "./SortByButton";

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
      width="100vw"
      maxWidth={{ sm: "400px" }}
      flexDirection="row"
      sx={{
        borderTopColor: "border",
        borderTopWidth: "1px",
        borderTopStyle: "solid"
      }}
      mb={1}
    >
      <SortByButton
        isActive={sortBy === "created_at"}
        onClick={() => onSort("created_at")}
        text="New"
      >
        <ClockIcon />
      </SortByButton>

      <SortByButton
        isActive={sortBy === "comment_count"}
        onClick={() => onSort("comment_count")}
        text="Hot"
      >
        <HotIcon />
      </SortByButton>

      <SortByButton
        isActive={sortBy === "votes"}
        onClick={() => onSort("votes")}
        text="Popular"
      >
        <PopularIcon />
      </SortByButton>
    </Flex>
  );
};

export default SortBy;
