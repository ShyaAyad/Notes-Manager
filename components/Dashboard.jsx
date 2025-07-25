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
      <Row className="notes-list">
        <NoteCard />
      </Row>
    </div>
  );
};

export default Dashboard;
