import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Render Backend URL
  const API_URL =
    "https://weekly-assessment-mern-stack.onrender.com/api/notes";

  // Fetch Notes
  const getNotes = async () => {

    try {

      const response = await axios.get(API_URL);

      setNotes(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  // Add Note
  const addNote = async () => {

    if (title === "" || description === "") {
      alert("Please fill all fields");
      return;
    }

    try {

      await axios.post(API_URL, {
        title,
        description,
      });

      setTitle("");
      setDescription("");

      getNotes();

    } catch (error) {
      console.log(error);
    }
  };

  // Delete Note
  const deleteNote = async (id) => {

    try {

      await axios.delete(`${API_URL}/${id}`);

      getNotes();

    } catch (error) {
      console.log(error);
    }
  };

  // Update Note
  const updateNote = async (id) => {

    const newTitle = prompt("Enter new title");
    const newDescription = prompt("Enter new description");

    if (!newTitle || !newDescription) {
      return;
    }

    try {

      await axios.put(`${API_URL}/${id}`, {
        title: newTitle,
        description: newDescription,
      });

      getNotes();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="main">

      <h1>Employee Notes Dashboard</h1>

      <div className="form">

        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button onClick={addNote}>
          Add Note
        </button>

      </div>

      <div className="notes">

        {notes.map((note) => (

          <div className="card" key={note._id}>

            <h3>{note.title}</h3>

            <p>{note.description}</p>

            <small>
              Created At:
              {" "}
              {new Date(note.createdAt).toLocaleDateString()}
            </small>

            <br />
            <br />

            <button
              onClick={() => updateNote(note._id)}
            >
              Update
            </button>

            <button
              className="deleteBtn"
              onClick={() => deleteNote(note._id)}
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;