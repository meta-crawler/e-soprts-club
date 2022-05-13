import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShopData.css'

const ShopData = () => {


    const [ordersInfo, setOrdersInfo] = useState([])

    useEffect(() => {
      fetch("https://blooming-thicket-66783.herokuapp.com/ordersInfo")
        .then((res) => res.json())
        .then((data) => setOrdersInfo(data));
    }, []);



    return (
        <div >
          <h1 style={{margin: "50px" , color:'gold'}}> All shop payment system ({ordersInfo.length}) </h1>
           <Table className='shop-data-main' striped bordered hover variant="dark">
  <thead>
    <tr>
      <th className='shop-data-cat'>#</th>
      <th>Product Name</th>      
      <th>Price</th>
      <th className='shop-data-cat'>Category</th>
      <th className='shop-data-cat'>Tags</th>
      <th>Payment System</th>
    </tr>
  </thead>
  {
    ordersInfo.map((pd, index) => (   
      <tbody>
      <tr>
      <td className='shop-data-cat'>{index}</td>
      <td>{pd.name}</td>
      <td>{pd.price}</td>
      <td className='shop-data-cat'>{pd.category}</td>
      <td className='shop-data-cat'>{pd.tags}</td>
      <td>{pd.payment ? 
      'Paid' : 
      <Link style={{textDecoration: "none", margin: "10px"}} to={`/dashboard2/payment/${pd._id}`}>
      <button className="btn bg-danger p-2">Payment </button>
      </Link>
      }
      
       </td>
      

      {/* <Link style={{textDecoration: "none", margin: "10px"}} to="/payment">
      <button className="btn bg-danger p-2">Payment </button>
      </Link> */}
      </tr>
      </tbody>
   ))}
  
  
</Table>
        </div>
    );
};

export default ShopData;