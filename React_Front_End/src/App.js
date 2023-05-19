import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewUser from "./users/ViewUser";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import DeleteUser from "./users/DeleteUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/deleteuser/:id" element={<DeleteUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
