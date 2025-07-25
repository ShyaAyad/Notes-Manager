import { createContext, useContext } from "react";
import { useState } from "react";
import { noteContext } from "./NoteContext";

export const editContext = createContext(null);

const EditContext = (props) => {
  const { notes, setNotes } = useContext(noteContext);
  const [titleValue, setTitleValue] = useState("");
  const [content, setContent] = useState("");
  const [noteIdToEdit, setNoteIdToEdit] = useState(null); // already in your context

  const startEditing = (noteId) => {
    const noteToEdit = notes.find((note) => note.id === noteId);
    if (noteToEdit) {
      setTitleValue(noteToEdit.title);
      setContent(noteToEdit.text);
      setNoteIdToEdit(noteId);
    }
  };

  const handleEdit = () => {
    const editedNote = {
      id: noteIdToEdit,
      title: titleValue,
      text: content,
    };

    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === noteIdToEdit ? editedNote : note))
    );

    setNoteIdToEdit(null);
    setTitleValue("");
    setContent("");
  };

  const values = { titleValue, setTitleValue, content, setContent, handleEdit, noteIdToEdit, setNoteIdToEdit, startEditing };
  return (
    <editContext.Provider value={values}>{props.children}</editContext.Provider>
  );
};

export default EditContext;
