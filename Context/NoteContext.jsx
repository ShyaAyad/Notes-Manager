import { createContext } from "react";
import { useState } from "react";

export const noteContext = createContext(null); // this is used to access context

// provider component
const NoteContext = (props) => {
  const [notes, setNotes] = useState([]); // for storing the notes that user adds

  console.log(notes);

  const addNotes = (title, text) => {
    // for adding a new note we add the title and the text to an object
    const newNote = {
      id: Date.now(),
      title,
      text,
      date: new Date().toString().slice(0, 16),
    };
    setNotes((prevNote) => [...prevNote, newNote]);
  };

  const values = { notes, setNotes, addNotes };

  return (
    <noteContext.Provider value={values}>{props.children}</noteContext.Provider>
  );
};

export default NoteContext;
