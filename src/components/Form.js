import React from "react";
import { StampContext } from "../context";
const Form = () => {
  const [name, setName] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");
  const inputEl = React.useRef(null);
  React.useEffect(() => {
    inputEl.current.focus();
  }, []);

  let isDisabled = !name || !minutes || !seconds;
  const { addItem, time } = React.useContext(StampContext);

  const handleSubmit = e => {
    e.preventDefault();

    const stamp = {
      id: Date.now().toString(),
      name,
      minutes,
      seconds,
      currentTime: {
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds
      }
    };
    addItem(stamp);
    setName("");
    setMinutes("");
    setSeconds("");
    inputEl.current.focus();
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          ref={inputEl}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Minutes</label>
        <input
          type="text"
          value={minutes}
          onChange={e => setMinutes(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Seconds</label>
        <input
          type="text"
          value={seconds}
          onChange={e => setSeconds(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleSubmit} disabled={isDisabled}>
        submit here
      </button>
    </form>
  );
};

export default Form;
