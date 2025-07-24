import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import NoteContext from "../Context/NoteContext";
import { Route, Routes } from "react-router-dom";
import SearchContext from "../Context/SearchContext";

function App() {
  return (
    <NoteContext>
      <SearchContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </SearchContext>
    </NoteContext>
  );
}

export default App;

/* if you wrap the App with BrowserRouter then you don't 
   need to use another Router because react doesn't let you
   use a Router inside another one 
*/
