// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export default function Navbar({ logout }) {
  return (
    <div>
      <nav className="navbar bg-primary border-bottom shadow">
        <div className="container">
          <h1 className="navbar-brand text-white m-0" href="#">
            <i className="bi bi-robot"></i> Lumoshive AI
          </h1>
          <button onClick={logout} className=" btn btn-danger">
            <i className="bi bi-arrow-right me-2"></i>
            LogOut
          </button>
        </div>
      </nav>
    </div>
  );
}
