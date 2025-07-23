import { useContext } from "react";
import { noteContext } from "../Context/NoteContext";

const NoteCard = () => {
  const { notes } = useContext(noteContext);

  return (
    <div>
      {notes.map((note) => (
        <div>
          <h1>{note.title}</h1>
          <p>{note.text}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
