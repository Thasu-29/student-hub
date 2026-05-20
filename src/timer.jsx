import { useState, useEffect } from "react";

function Timer() {

  const [time, setTime] = useState(1500);

  const [running, setRunning] =
    useState(false);

  useEffect(() => {

    let interval;

    if (running && time > 0) {

      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

    }

    return () => clearInterval(interval);

  }, [running, time]);

  const minutes =
    Math.floor(time / 60);

  const seconds =
    time % 60;

  return (

    <div className="timer-card">

      <div className="timer-top">

        <h2>⏱ Focus Timer</h2>

        <select>

          <option>Pomodoro</option>

          <option>Study</option>

          <option>Break</option>

        </select>

      </div>

      <div className="circle-wrap">

        <div className="timer-circle">

          <h1>

            {String(minutes).padStart(2, "0")}
            :
            {String(seconds).padStart(2, "0")}

          </h1>

          <p>Time to focus!</p>

        </div>

      </div>

      <div className="timer-buttons">

        <button
          onClick={() => setRunning(true)}
        >
          ▶
        </button>

        <button
          onClick={() => setRunning(false)}
        >
          ⏸
        </button>

        <button
          onClick={() => {
            setTime(1500);
            setRunning(false);
          }}
        >
          ⟳
        </button>

      </div>

      <div className="session-bar">

        <div className="session-fill"></div>

      </div>

      <p className="session-text">
        Today: 2/4 Sessions
      </p>

    </div>

  );
}

export default Timer;