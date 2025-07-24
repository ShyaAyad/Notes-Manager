import { createContext, useContext } from "react";
import { useState } from "react";
import { noteContext } from "./NoteContext";

export const editContext = createContext(null);

const EditContext = (props) => {
  const { notes } = useContext(noteContext);
  const [titleValue, setTitleValue] = useState(notes.title);
  const [content, setContent] = useState(notes.text);

  const handleEdit = () => {
    const editedNote = {
      id,
      title: titleValue,
      text: content,
    };
    setNotes(editedNote);
  };

  const values = { titleValue, setTitleValue, content, setContent, handleEdit };
  return <editContext.Provider value={values}>{props.children}</editContext.Provider>;
};

export default EditContext;
