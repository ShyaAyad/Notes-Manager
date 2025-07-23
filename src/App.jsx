import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import NoteContext from "../Context/NoteContext";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <NoteContext>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </NoteContext>
  );
}

export default App;

/* if you wrap the App with BrowserRouter then you don't 
   need to use another Router because react doesn't let you
   use a Router inside another one 
*/
