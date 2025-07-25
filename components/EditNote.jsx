import { useContext } from "react";
import { noteContext } from "../Context/NoteContext";
import { editContext } from "../Context/EditContext";

const EditNote = () => {
  const { notes, setNotes } = useContext(noteContext);
  const { titleValue, setTitleValue, content, setContent, handleEdit } = useContext(editContext);

  return (
    <div className="note-form-container">
      <h1>Write note</h1>
      <form onSubmit={handleEdit} className="note-form">
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
          update
        </button>
      </form>
    </div>
  );
};

export default EditNote;
