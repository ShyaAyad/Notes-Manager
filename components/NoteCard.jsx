import { useContext } from "react";
import { noteContext } from "../Context/NoteContext";

const NoteCard = () => {
  const { notes, setNotes, deleteNote } = useContext(noteContext);
  
  const sortNotes = () => {
    // by spreading we change the new array leaving the original as it is
    const sortedNotes = [...notes].sort((note1, note2) =>
      note1.title.localeCompare(note2.title)
    );
    setNotes(sortedNotes); // re-rendering the state based on the sorting
  };

  return (
    <div>
      <button onClick={sortNotes} className="sort-btn">
        Sort by name
      </button>
      {notes.map((note) => (
        <div key={note.id} className="individual-note">
          <h1>{note.title}</h1>
          <p>{note.text}</p>
          <div className="changing-btns">
            <button className="edite-btn">Edite</button>
            <button onClick={() => deleteNote(note.id)} className="delete-btn">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;
