import React from "react";

const TimeStamp = ({ name, currentTime }) => {
  let { hours, minutes, seconds } = currentTime;
  function setHours(item) {
    if (item === 0) {
      return "";
    }
    if (item < 10) {
      return `${item}:`;
    }
  }
  function setMinutes(item) {
    if (item < 10) {
      return `0${item}:`;
    }
    return `${item}:`;
  }

  function setSeconds(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  return (
    <p className="timestamp">
      {name}{" "}
      <span>{`${setHours(hours)}${setMinutes(minutes)}${setSeconds(
        seconds
      )}`}</span>
    </p>
  );
};

export default TimeStamp;
