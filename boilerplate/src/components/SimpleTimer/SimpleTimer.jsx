import React, { useState } from "react";

const SimpleTimer = () => {
  const [myInput, setMyInput] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    console.log("1");
    const timeNow = new Date().getTime();
    const endTime = timeNow + myInput * 1000;

    const inter = setInterval(() => {
      console.log("2");
      const currentTime = new Date().getTime();
      const timeRemain = endTime + 2 * 1000 - currentTime;

      let minutes = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeRemain % (1000 * 60)) / 1000);
      let timeFormatted = `min: ${minutes} seconds: ${seconds}`;
      console.log("running, timeRemain => ", timeRemain);

      setTimeLeft(timeFormatted);

      if (timeRemain < 0) {
        clearInterval(inter);
        timeFormatted = `Hr: 0 min: 0, seconds: 0`;
        setTimeLeft(timeFormatted);
      }
    }, 1000);

    setIntervalId(inter);
  };

  const stop = () => clearInterval(intervalId);

  return (
    <div>
      <div>
        <h2>Timer</h2>
        <label>Seconds: </label>
        <input
          type="number"
          value={myInput}
          onChange={(e) => {
            setMyInput(e.target.value);
          }}
        />
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
      <hr />
      <h2>Seconds Remaining: {timeLeft}</h2>
    </div>
  );
};

export default SimpleTimer;
