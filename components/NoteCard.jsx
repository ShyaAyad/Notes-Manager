import { useContext } from "react";
import { noteContext } from "../Context/NoteContext";

const NoteCard = () => {
  const { notes } = useContext(noteContext);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="individual-note">
          <h1>{note.title}</h1>
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
