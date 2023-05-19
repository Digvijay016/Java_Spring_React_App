import React from "react";
import AddUser from "../users/AddUser";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          CRUD App
        </a>
        <Link className="btn btn-outline-light" to="/adduser">
          Add User
        </Link>
      </div>
    </nav>
  );
}
