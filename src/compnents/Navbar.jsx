import React from 'react';
import { Link } from 'react-router-dom';

const DashboardOneLink = "/dashboard";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark ">
      <div className="container">
        <Link className="navbar-brand text-dark" to="/"><strong>Admin</strong></Link>
        <button className="navbar-toggler btn-primary d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" to={DashboardOneLink}><strong>Dashboard One</strong></Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
