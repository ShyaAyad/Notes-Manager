import { useContext } from "react";
import { noteContext } from "../Context/NoteContext";

const NoteCard = () => {
  const { notes, deleteNote } = useContext(noteContext);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="individual-note">
          <h1>{note.title}</h1>
          <p>{note.text}</p>
          <div className="changing-btns">
            <button className="edite-btn">Edite</button>
            <button onClick={() => deleteNote(note.id)} className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
