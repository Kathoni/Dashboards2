import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import Navbar from '../compnents/Navbar';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='m-2'>
      <button className="btn btn-primary" type="button" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </button>
      <Navbar />

      <div className={`offcanvas offcanvas-start ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasSidebar" style={{ visibility: isOpen ? 'visible' : 'hidden' }}>
        <div className="offcanvas-header">
        <button className="btn btn-primary" type="button" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>
      </button>

        </div>
        <div className="offcanvas-body">
          <div className='m-2'>
            <i className="bi bi-box2-heart me-2 fs-4"></i>
            <span className='brand-name fs-4'>Admin</span>
          </div>
          <hr className='text-dark' />
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5">
                <i className="bi bi-speedometer2 fs-5 me-2"></i>Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5">
                <i className="bi bi-house-heart-fill fs-5 me-2"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5">
                <i className="bi bi-table fs-5 me-2"></i>Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5">
                <i className="bi bi-clipboard-data fs-5 me-2"></i>Report
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5">
                <i className="bi bi-people fs-5 me-2"></i>Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5">
                <i className="bi bi-power fs-5 me-2"></i>Log out
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fs-5">
                <i className="bi bi-gear-fill fs-5 me-2"></i>Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
