import React, { useState, useEffect, useCallback } from "react";

const SimpleTimer = () => {
  const [myInput, setMyInput] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [start, setStart] = useState(false);

  const startTimer = useCallback(() => {
    endTime > 0 &&
      setTimeout(() => {
        setEndTime(endTime - 1);
      }, 1000);
  }, [endTime]);
  // Subscriptions

  useEffect(() => {
    if (start && endTime > 0) {
      startTimer();
    } else {
      setStart(false);
    }
    if (endTime === 0) {
      setMyInput(0);
    }
  }, [start, endTime, startTimer]);

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
            setEndTime(e.target.value);
          }}
        />
        <button onClick={() => setStart(true)}>Start</button>
      </div>
      <hr />
      <h2>Seconds Remaining: {endTime}</h2>
    </div>
  );
};

export default SimpleTimer;
