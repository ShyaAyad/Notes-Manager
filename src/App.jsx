import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Register from "../components/Register";
import NoteContext from "../Context/NoteContext";
import { Route, Routes } from "react-router-dom";
import SearchContext from "../Context/SearchContext";
import EditContext from "../Context/EditContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <NoteContext>
      <SearchContext>
        <EditContext>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          {/* ToastContainer should be placed outside of the routes and on top of the App component */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />
        </EditContext>
      </SearchContext>
    </NoteContext>
  );
}

export default App;

/* if you wrap the App with BrowserRouter then you don't 
   need to use another Router because react doesn't let you
   use a Router inside another one 
*/
