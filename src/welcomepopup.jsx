import { useState, useEffect } from "react";
import "./style.css";

function WelcomePopup() {

  const [showPopup, setShowPopup] =
    useState(false);

  useEffect(() => {

    // SHOW POPUP EVERY TIME
    setShowPopup(true);

  }, []);

  if (!showPopup) return null;

  return (

    <div className="popup-overlay">

      <div className="popup-box">

        <h1>
          Welcome! ✨
        </h1>

        <p>
          Organize your tasks,
          notes, focus sessions
          and productivity in one place.
        </p>

        <button
          onClick={() =>
            setShowPopup(false)
          }
        >
          Get Started
        </button>

      </div>

    </div>

  );
}

export default WelcomePopup;