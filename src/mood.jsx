import { useState } from "react";
import "./style.css";

function Mood() {

  const [mood, setMood] = useState("");

  return (
    <div className="card">

      <h2>😊 Mood Tracker</h2>

      <p className="mood-text">
        Today's Mood:
        <strong> {mood || "Not Selected"} </strong>
      </p>

      <div className="mood-buttons">

        <button onClick={() => setMood("😊 Happy")}>
          😊
        </button>

        <button onClick={() => setMood("😎 Motivated")}>
          😎
        </button>

        <button onClick={() => setMood("😴 Tired")}>
          😴
        </button>

        <button onClick={() => setMood("😔 Sad")}>
          😔
        </button>

      </div>
    </div>
  );
}

export default Mood;