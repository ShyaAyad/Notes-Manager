import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import NoteContext from "../Context/NoteContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <NoteContext>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </NoteContext>
  );
}

export default App;
