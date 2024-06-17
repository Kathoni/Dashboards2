import React from 'react';
import Sidebar from '../compnents/Sidebar'
import DashboardOne from '../pages/DashboardOne';
import '../styles/style.css';

function Landing() {
  return (
    <div>
      <div className='container-fluid min-vh-100'>
        <div className='row'>
          <div className='col-12'>
          <Sidebar />
          </div>
          <div className='col-auto'>
          <DashboardOne />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
