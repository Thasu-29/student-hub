import { useState } from "react";
import "./style.css";

function Planner({ tasks, setTasks }) {

  const [task, setTask] =
    useState("");

  const addTask = () => {

    if (task.trim() === "")
      return;

    setTasks([
      ...tasks,

      {
        text: task,
        done: false,
      },
    ]);

    setTask("");
  };

  const completeTask = (index) => {

    const updated = [...tasks];

    updated[index].done = true;

    setTasks(updated);
  };

  const deleteTask = (index) => {

    const updated =
      tasks.filter(
        (_, i) => i !== index
      );

    setTasks(updated);
  };

  return (

    <div className="card">

      <h2>📅 Planner</h2>

      <div className="task-input">

        <input
          value={task}

          onChange={(e) =>
            setTask(e.target.value)
          }

          placeholder="Enter task..."
        />

        <button onClick={addTask}>
          Add Task
        </button>

      </div>

      <div className="task-list">

        {tasks.map((t, i) => (

          <div
            className="task-item"
            key={i}
          >

            <span
              style={{
                textDecoration:
                  t.done
                    ? "line-through"
                    : "none",

                color:
                  t.done
                    ? "gray"
                    : "black",
              }}
            >
              {t.text}
            </span>

            <div>

              <button
                onClick={() =>
                  completeTask(i)
                }
              >
                ✅
              </button>

              <button
                onClick={() =>
                  deleteTask(i)
                }
              >
                ❌
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Planner;