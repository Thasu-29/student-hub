import "./style.css";

import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2>Student Hub</h2>

      <Link to="/dashboard">
        🏠 Dashboard
      </Link>

      <Link to="/planner">
        📅 Planner
      </Link>

      <Link to="/timer">
        ⏱ Focus Timer
      </Link>

      <Link to="/notes">
        🧠 Notes
      </Link>

      <Link to="/mood">
        😊 Mood
      </Link>

      <Link to="/progress">
        📊 Progress
      </Link>

    </div>
  );
}

export default Sidebar;