import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function DashboardOne() {
  return (
    <div className='dashboard '>
      <div className='row g-3 my-2'>
        <div className='col-md-3'>
          <div className='p-3 shadow-sm bg-white d-flex justify-content-around align-items-center rounded'>
            <div>
              <h5 className='fs-2'>230</h5>
              <p className='fs-5'>Products</p>
            </div>
            <i className='bi bi-cart-plus p-3 fs-1'></i>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='p-3 shadow-sm bg-white d-flex justify-content-around align-items-center rounded'>
            <div>
              <h5 className='fs-2'>20%</h5>
              <p className='fs-5'>Increase</p>
            </div>
            <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='p-3 shadow-sm bg-white d-flex justify-content-around align-items-center rounded'>
            <div>
              <h5 className='fs-2'>2269</h5>
              <p className='fs-5'>Deliveries</p>
            </div>
            <i className='bi bi-truck p-3 fs-1'></i>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='p-3 shadow-sm bg-white d-flex justify-content-around align-items-center rounded'>
            <div>
              <h5 className='fs-2'>2450</h5>
              <p className='fs-5'>Sales</p>
            </div>
            <i className='bi bi-currency-dollar p-3 fs-1'></i>
          </div>
        </div>
      </div>

      <table className='table caption-top bg-white rounded mt-2'>
        <caption className='text-dark fs-4'>Recent Orders</caption>
        <thead>
          <tr>
            <th scope='col'>No:</th>
            <th scope='col'>Order</th>
            <th scope='col'>Delivery</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, order: 'Mark', delivery: 'Clothes', status: 'Completed' },
            { id: 2, order: 'Jacob', delivery: 'Phone Cases', status: 'Completed' },
            { id: 3, order: 'Larry', delivery: 'Kitchen Equipment', status: 'In Process' },
            { id: 4, order: 'Sandra', delivery: 'Shein Products', status: 'Complete' },
            { id: 5, order: 'Cassie', delivery: 'Amazon Books', status: 'Completed' },
          ].map(order => (
            <tr key={order.id}>
              <th scope='row'>{order.id}</th>
              <td>{order.order}</td>
              <td>{order.delivery}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardOne;
