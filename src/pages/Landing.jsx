import React from 'react';
import Sidebar from '../compnents/Sidebar'
import DashboardOne from '../pages/DashboardOne';
import '../styles/style.css';

function Landing() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row">
        <div className="col-12 col-md-2 bg-white p-0 vh-100">
          <Sidebar />
        </div>
        <div className="col">
          <DashboardOne />
        </div>
      </div>
    </div>
  );
}

export default Landing;
