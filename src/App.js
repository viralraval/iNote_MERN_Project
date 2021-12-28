import "./App.css";
import Nav from "./pages/Nav";
import AddNotes from "./pages/AddNotes";
import Alert from "./pages/Alert";
import Notes from "./pages/Notes";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Hcontent from "./pages/Hcontent";

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Nav />
          <Alert />
          <Routes>
            <Route exact path="/" element={<Hcontent />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/notes" element={<Notes />}></Route>
            <Route exact path="/addnotes" element={<AddNotes />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
