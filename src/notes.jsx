import { useState, useEffect } from "react";
import "./style.css";

function Notes() {

  const [note, setNote] = useState("");

  const [notes, setNotes] = useState(() => {

    const savedNotes =
      localStorage.getItem("notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );

  }, [notes]);

  const addNote = () => {

    if (note.trim() === "") return;

    setNotes([...notes, note]);

    setNote("");
  };

  const deleteNote = (index) => {

    const updated = notes.filter(
      (_, i) => i !== index
    );

    setNotes(updated);
  };

  return (
    <div className="card">

      <h2>📝 Notes</h2>

      <div className="note-input">

        <textarea
          placeholder="Write your notes..."
          value={note}
          onChange={(e) =>
            setNote(e.target.value)
          }
        />

        <button onClick={addNote}>
          Add Note
        </button>

      </div>

      <div className="notes-list">

        {notes.map((n, i) => (

          <div className="note-item" key={i}>

            <p>{n}</p>

            <button
              onClick={() =>
                deleteNote(i)
              }
            >
              ❌
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Notes;