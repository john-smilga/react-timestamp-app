import React from "react";

const StampContext = React.createContext();
function getStorage(item) {
  let value;
  if (item === "stamps") {
    value = [];
  }
  if (item === "time") {
    value = { hours: 0, minutes: 0, seconds: 0 };
  }
  return localStorage.getItem(item)
    ? JSON.parse(localStorage.getItem(item))
    : value;
}

const StampProvider = ({ children }) => {
  const [stamps, setStamps] = React.useState(getStorage("stamps"));
  const [time, setTime] = React.useState(getStorage("time"));

  React.useEffect(() => {
    localStorage.setItem("stamps", JSON.stringify(stamps));
    localStorage.setItem("time", JSON.stringify(time));
  }, [stamps, time]);

  const addItem = stamp => {
    setStamps([...stamps, stamp]);
    let { hours, minutes, seconds } = time;
    // seconds
    seconds += parseInt(stamp.seconds);
    if (seconds >= 60) {
      minutes += 1;
      seconds = seconds - 60;
    }

    // minutes
    minutes += parseInt(stamp.minutes);
    if (minutes >= 60) {
      hours += 1;
      minutes = minutes - 60;
    }
    setTime({ hours, minutes, seconds });
  };
  const clearAll = () => {
    setStamps([]);
    setTime({ hours: 0, minutes: 0, seconds: 0 });
  };
  return (
    <StampContext.Provider value={{ stamps, addItem, time, clearAll }}>
      {children}
    </StampContext.Provider>
  );
};

export { StampProvider, StampContext };
