import { Input, Typography } from "antd";
import { useContext, useState } from "react";
import { noteContext } from "../Context/NoteContext";
import { editContext } from "../Context/EditContext";

const { Title } = Typography;

const NoteForm = () => {
  const { addNotes } = useContext(noteContext);
  const {
    handleEdit,
    noteIdToEdit,
    titleValue,
    setTitleValue,
    content,
    setContent,
  } = useContext(editContext);
  const isEditing = noteIdToEdit !== null;

  const submitNote = (e) => {
    e.preventDefault();

    if(titleValue === '' || content === ''){
      alert("Both fields are required!")
      return;
    }

    if(isEditing){
      handleEdit();
    }else{
      addNotes(titleValue, content);
    }

    setTitle('')
    setText('')
  };

  return (
    <div className="note-form-container">
      <h1>{isEditing ? "Edit note" : "Write note"}</h1>
      <form onSubmit={submitNote} className="note-form">
        <Title level={3}>Title</Title>
        <Input
          placeholder="title..."
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
        <Title level={3}>Note</Title>
        <textarea
          placeholder="Write note..."
          rows={15}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="submit-btn" type="submit">
          {isEditing ? "Edit" : "complete"}
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
