import { Row } from "antd";
import SearchBar from "./SearchBar";
import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SearchBar />
      <Row className="note-editor">
        <NoteForm />
      </Row>
      <div className="notes-list">
        <NoteCard />
      </div>
    </div>
  );
};

export default Dashboard;
