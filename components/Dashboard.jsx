import { Row } from "antd";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import NoteEditor from "./NoteEditor";
import NoteCard from "./NoteCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <Navbar /> */}
      <SearchBar />
      <Row className="note-editor">
        <NoteEditor />
      </Row>
      <div className="notes-list">
        <NoteCard />
      </div>
    </div>
  );
};

export default Dashboard;
