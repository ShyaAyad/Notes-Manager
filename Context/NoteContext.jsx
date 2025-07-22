import { createContext } from "react";
import { useState } from "react";

export const noteContext = createContext(null)


const NoteContext = (props) => {

    const [notes, setNotes] = useState([]); // for storing the notes that user adds

    // const newNote = {
    //   id: Date.now(),
    //   title,
    //   content,
    // }

    // const addNotes = (noteId) => {
    //   setNotes((prevNote) => [...prevNote, newNote]);
    // }

    const values = { notes, setNotes };

  return (
    <noteContext.Provider value={values}>
        {props.children}
    </noteContext.Provider>
  )
}

export default NoteContext