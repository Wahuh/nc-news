import React from "react";
import ClockIcon from "../common/ClockIcon";
import HotIcon from "../common/HotIcon";
import PopularIcon from "../common/PopularIcon";
import { Flex } from "rebass";
import SortByButton from "./SortByButton";

const SortBy = ({ onSort, sortBy }) => {
  return (
    <Flex width="100vw" maxWidth={{ sm: "400px" }} flexDirection="row" mb={6}>
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
