import { Button, Input, Typography } from "antd";
import { useContext, useState } from "react";
import { noteContext } from "../Context/NoteContext";

const { Title } = Typography;

const NoteEditor = () => {
  const { addNotes } = useContext(noteContext);

  const [title, setTitle] = useState();
  const [text, setText] = useState();

  const submitNote = (e) => {
    e.preventDefault();

    if(title === '' || text === ''){
      alert("Both fields are required!")
      return;
    }

    addNotes(title, text);

    // clear input field after submission
    setTitle('')
    setText('')
  };

  return (
    <div className="note-form-container">
      <h1>Write note</h1>
      <form onSubmit={submitNote} className="note-form">
        <Title level={3}>Title</Title>
        <Input
          placeholder="title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Title level={3}>Note</Title>
        <textarea
          placeholder="Write note..."
          rows={15}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="submit-btn" type="submit">
          complete
        </button>
      </form>
    </div>
  );
};

export default NoteEditor;
