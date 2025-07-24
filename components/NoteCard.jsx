import { useContext } from "react";
import { noteContext } from "../Context/NoteContext";
import { theSearchContext } from "../Context/SearchContext";
import { Dropdown, Card } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

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
    if (value === "title") {
      sortByTitle();
    } else if (value === "date") {
      sortByDate();
    }
  };

  const menuItems = [
    {
      key: "title",
      label: "Sort by name",
    },
    {
      key: "date",
      label: "Sort by date",
    },
  ];

  const handleMenuClick = (e) => {
    handleSorting(e.key); // e.key = title or date will be sent to the handleSorting function based on that it'll be sorted
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="note-list">
      <Dropdown
        menu={{
          items: menuItems,
          onClick: handleMenuClick,
        }}
      >
        <button className="sort-btn">Sort</button>
      </Dropdown>
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => (
          <Card key={note.id} className="individual-note">
            <h1>{note.title}</h1>
            <p>{note.text}</p>
            <div className="changing-btns">
              <button onClick={() => handleEdit(note.id)} className="edit-btn">
                <EditOutlined />
              </button>
              <button
                onClick={() => deleteNote(note.id)}
                className="delete-btn"
              >
                <DeleteOutlined />
              </button>
            </div>
          </Card>
        ))
      ) : (
        <p className="not-found">No note found!</p>
      )}
    </div>
  );
};

export default NoteCard;
