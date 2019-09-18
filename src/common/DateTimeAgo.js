import React from "react";
import { Text } from "rebass";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-UK");

const DateTimeAgo = ({ date }) => {
  return (
    <Text as="span" color="caption" fontSize={1}>
      {timeAgo.format(new Date(date))}
    </Text>
  );
};

export default DateTimeAgo;
