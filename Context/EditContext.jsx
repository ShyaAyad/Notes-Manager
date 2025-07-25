import { createContext, useContext } from "react";
import { useState } from "react";
import { noteContext } from "./NoteContext";
import { message } from "antd";
import { toast } from "react-toastify";

export const editContext = createContext(null); // create the context

const EditContext = (props) => {
  const { notes, setNotes } = useContext(noteContext);
  const [titleValue, setTitleValue] = useState("");
  const [content, setContent] = useState("");
  const [noteIdToEdit, setNoteIdToEdit] = useState(null); // state to keep track of the edited notes

  const startEditing = (noteId) => {
    // accepts the id of the note you want to change
    const noteToEdit = notes.find((note) => note.id === noteId); // finding the note in the array of notes
    if (noteToEdit) {
      setTitleValue(noteToEdit.title);
      setContent(noteToEdit.text);
      setNoteIdToEdit(noteId);
    }

    message.success({ content: "Note updated successfully", duration: 2 });
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

    toast.success("Note edited successfully");
    setNoteIdToEdit(null);
    setTitleValue("");
    setContent("");
  };

  const values = {
    titleValue,
    setTitleValue,
    content,
    setContent,
    handleEdit,
    noteIdToEdit,
    setNoteIdToEdit,
    startEditing,
  };
  return (
    <editContext.Provider value={values}>{props.children}</editContext.Provider>
  );
};

export default EditContext;
