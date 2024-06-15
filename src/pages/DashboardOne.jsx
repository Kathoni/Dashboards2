import React from 'react'
import Navbar from '../compnents/Navbar'

function DashboardOne() {
  
  return (
    <div className=' dashboard px-3'>
      <Navbar />
      <div>
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
                  <p className='fs-5'>Delivey</p>
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

      
      </div>
      <table class="table caption-top bg-white rounded mt-2">
        <caption className='text-dark fs-4' > Recent Orders</caption>
  <thead>
    <tr>
      <th scope="col">NO:</th>
      <th scope="col">Order</th>
      <th scope="col">Delivery</th>
      <th scope="col">Status</th>
      <th scope="col">Condition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Clothes</td>
      <td> Happened</td>
      <td>Good Condition</td>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td> phone Cases</td>
      <td> Happened</td>
      <td>Good Condition</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry </td>
      <td> Kitchen equipments</td>
      <td> In Process</td>
      <td>Delivery incomplete</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>sandra</td>
      <td> Shein products</td>
      <td> Happened</td>
      <td>Good Condition</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Cssie</td>
      <td> Amazon Books</td>
      <td> Happened</td>
      <td>Good Condition</td>
    </tr>
  </tbody>
</table>


    </div>
  
  )
}

export default DashboardOne