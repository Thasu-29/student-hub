import { useState, useEffect } from "react";

import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Sidebar from "./sidebar.jsx";
import Navbar from "./navbar.jsx";

import Planner from "./planner.jsx";
import Timer from "./timer.jsx";
import Notes from "./notes.jsx";
import Mood from "./mood.jsx";
import Progress from "./progress.jsx";
import Login from "./login.jsx";

import WelcomePopup from "./welcomepopup.jsx";

import Confetti from "react-confetti";

import "./style.css";

function App() {

  const [user, setUser] = useState("");

  const [darkMode, setDarkMode] =
    useState(false);

  // CONFETTI

  const [showConfetti, setShowConfetti] =
    useState(false);

  // TASKS

  const [tasks, setTasks] = useState(() => {

    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [];

  });

  // STREAK STATE

  const [streak, setStreak] = useState(() => {

    return Number(
      localStorage.getItem("streak")
    ) || 0;

  });

  const [lastCompletedDate, setLastCompletedDate] =
    useState(
      localStorage.getItem(
        "lastCompletedDate"
      ) || ""
    );

  // SAVE TASKS

  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  // STREAK LOGIC

  useEffect(() => {

    const today =
      new Date().toDateString();

    const hasCompletedTask =
      tasks.some((task) => task.done);

    if (hasCompletedTask) {

      if (lastCompletedDate === "") {

        setStreak(1);

        setLastCompletedDate(today);

        localStorage.setItem(
          "streak",
          1
        );

        localStorage.setItem(
          "lastCompletedDate",
          today
        );
      }

      else {

        const lastDate =
          new Date(lastCompletedDate);

        const currentDate =
          new Date(today);

        const difference =
          Math.floor(
            (currentDate - lastDate)
            /
            (1000 * 60 * 60 * 24)
          );

        // NEXT DAY

        if (difference === 1) {

          const newStreak =
            streak + 1;

          setStreak(newStreak);

          localStorage.setItem(
            "streak",
            newStreak
          );

          localStorage.setItem(
            "lastCompletedDate",
            today
          );

          setLastCompletedDate(today);
        }

        // MISSED DAY

        else if (difference > 1) {

          setStreak(1);

          localStorage.setItem(
            "streak",
            1
          );

          localStorage.setItem(
            "lastCompletedDate",
            today
          );

          setLastCompletedDate(today);
        }
      }
    }

  }, [tasks]);

  // CALCULATIONS

  const completedTasks =
    tasks.filter((t) => t.done).length;

  const totalTasks = tasks.length;

  const progressPercentage =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  // CONFETTI LOGIC

  useEffect(() => {

    if (
      totalTasks > 0 &&
      completedTasks === totalTasks
    ) {

      setShowConfetti(true);

      setTimeout(() => {

        setShowConfetti(false);

      }, 5000);
    }

  }, [completedTasks, totalTasks]);

  // LOGIN

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (

    <div
      className={
        darkMode ? "app dark" : "app"
      }
    >

      {/* CONFETTI */}

      {showConfetti && <Confetti />}

      {/* WELCOME POPUP */}

      <WelcomePopup />

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENT */}

      <div className="content">

        <Navbar
          user={user}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="main">

          <Routes>

            {/* DEFAULT ROUTE */}

            <Route
              path="/"
              element={
                <Navigate to="/dashboard" />
              }
            />

            {/* DASHBOARD */}

            <Route
              path="/dashboard"
              element={

                <div>

                  {/* WELCOME CARD */}

                  <div className="welcome-card">

                    <div>

                      <h1>
                        Welcome back, {user} 👋
                      </h1>

                      <p>
                        Organize your tasks and stay productive.
                      </p>

                    </div>

                  </div>

                  {/* DASHBOARD CARDS */}

                  <div className="dashboard-cards">

                    <div className="dashboard-card purple">

                      <div>

                        <h2>{totalTasks}</h2>

                        <p>Total Tasks</p>

                      </div>

                      <span>📚</span>

                    </div>

                    <div className="dashboard-card blue">

                      <div>

                        <h2>{completedTasks}</h2>

                        <p>Completed</p>

                      </div>

                      <span>✅</span>

                    </div>

                    <div className="dashboard-card pink">

                      <div>

                        <h2>{progressPercentage}%</h2>

                        <p>Progress</p>

                      </div>

                      <span>📊</span>

                    </div>

                    <div className="dashboard-card orange">

                      <div>

                        <h2>{streak}</h2>

                        <p>Day Streak</p>

                      </div>

                      <span>🔥</span>

                    </div>

                  </div>

                  {/* QUICK ACCESS */}

                  <div className="quick-section">

                    <div className="quick-card">

                      <h3>📝 Planner</h3>

                      <p>
                        Manage your daily tasks efficiently.
                      </p>

                    </div>

                    <div className="quick-card">

                      <h3>⏱ Focus Timer</h3>

                      <p>
                        Improve concentration with Pomodoro timer.
                      </p>

                    </div>

                    <div className="quick-card">

                      <h3>😊 Mood Tracker</h3>

                      <p>
                        Track your emotions and productivity.
                      </p>

                    </div>

                  </div>

                </div>

              }
            />

            {/* PLANNER */}

            <Route
              path="/planner"
              element={
                <Planner
                  tasks={tasks}
                  setTasks={setTasks}
                />
              }
            />

            {/* TIMER */}

            <Route
              path="/timer"
              element={<Timer />}
            />

            {/* NOTES */}

            <Route
              path="/notes"
              element={<Notes />}
            />

            {/* MOOD */}

            <Route
              path="/mood"
              element={<Mood />}
            />

            {/* PROGRESS */}

            <Route
              path="/progress"
              element={
                <Progress
                  progressPercentage={
                    progressPercentage
                  }
                />
              }
            />

          </Routes>

        </div>

      </div>

    </div>
  );
}

export default App;
{/* testing github connection */}
{/* test */}