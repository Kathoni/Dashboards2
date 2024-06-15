import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import '../styles/style.css';



function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>

      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="sidebarMenuLabel">Admin</h5>
        <button type="button" className="btn-close text-reset" onClick={toggleSidebar}></button>
      </div>
      <div className="offcanvas-body">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-dark fs-5"  >
              <i className="bi bi-speedometer2 me-2"></i>Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fs-5" >
              <i className="bi bi-house-heart-fill me-2"></i>Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fs-5"  >
              <i className="bi bi-table me-2"></i>Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fs-5" >
              <i className="bi bi-clipboard-data me-2"></i>Report
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fs-5" >
              <i className="bi bi-people me-2"></i>Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fs-5"  >
              <i className="bi bi-power me-2"></i>Log out
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark fs-5">
              <i className="bi bi-gear-fill me-2"></i>Settings
            </Link>
          </li>
        </ul>
    </div>
</>
  );
}

export default Sidebar;
