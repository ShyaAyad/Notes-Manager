import { useContext } from "react";
import { noteContext } from "../Context/NoteContext";
import { theSearchContext } from "../Context/SearchContext";

const NoteCard = () => {
  const { notes, setNotes, deleteNote } = useContext(noteContext);
  const { searchTerm, setSearchTerm } = useContext(theSearchContext);

  const sortByTitle = () => {
    // by spreading we change the new array leaving the original as it is
    const sortedNotesByName = [...notes].sort((note1, note2) =>
      note1.title.localeCompare(note2.title)
    );
    setNotes(sortedNotesByName); // re-rendering the state based on the sorting
  };

  const sortByDate = () => {
    const sortedNotesByDate = [...notes].sort((note1, note2) =>
      note1.date.localeCompare(note2.date)
    );
    setNotes(sortedNotesByDate);
  };

  const handleSorting = (value) => {
    if(value === "title"){
      sortByTitle();
    }else if(value === "date"){
      sortByDate();
    }
  }

  /* you can't directly use onClick event on options so instead, you should use onChange on the select 
     and handle the changes by the value and a method like i did.
  */

  return (
    <div className="note-list">
      <select onChange={(e) => handleSorting(e.target.value)} className="sort-btn">
        <option value="title">Sort by name</option>
        <option value="date">Sort by date</option>
      </select>
      {notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase())).map((note) => (
        <div key={note.id} className="individual-note">
          <h1>{note.title}</h1>
          <p>{note.text}</p>
          <div className="changing-btns">
            <button className="edite-btn">Edit</button>
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
