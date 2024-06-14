import React from 'react'
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div >
        <div className='bg-beige sidebar p-2'>
    <div className='m-2'>
    <i class="bi bi-box2-heart me-2 fs-4"></i>
        <span className='brand-name fs-4 '>Admin</span>
    </div>
    <hr className='text-dark'/>
    <div className='list-group list-group-flush'>
      <ul>
        <li>
    <Link className='list-group-item py-2'>
        <i className='bi bi-speedometer2 fs-5 me-3'></i>
        <span className='fs-5'>Dashboard</span>
      </Link>
      </li>
      <li>
      <Link className='list-group-item py-2'>
        <i className='bi bi-house-heart-fill fs-5 me-3'></i>
        <span className='fs-5'>Home</span>
      </Link>
      </li>
      <li>
      <Link className='list-group-item  py-2'>
        <i className='bi bi-table fs-5 me-3'></i>
        <span className='fs-5'>Products</span>
      </Link>
      </li>
      <li>
      <Link className='list-group-item  py-2'>
        <i className='bi bi-clipboard-data fs-5 me-3'></i>
        <span className='fs-5'>Report</span>
      </Link>
      </li>
      <li>
      <Link className='list-group-item  py-2'>
        <i className='bi bi-people fs-5 me-3'></i>
        <span>Customers</span>
      </Link>
      </li>
      <li>
      <Link className='list-group-item  py-2'>
        <i className='bi bi-power fs-5 me-3'></i>
        <span className='fs-5'>Log out</span>
      </Link>
      </li>
      <li>
      <Link className='list-group-item  py-2'>
        <i className='bi bi-gear-fill fs-5 me-3'></i>
        <span className='fs-5'>Settings</span>
      </Link>
      </li>
      </ul>
    </div>

</div>
</div>
  )
}

export default Sidebar