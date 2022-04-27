import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShopData = () => {


    const [ordersInfo, setOrdersInfo] = useState([])

    useEffect(() => {
      fetch("https://blooming-thicket-66783.herokuapp.com/ordersInfo")
        .then((res) => res.json())
        .then((data) => setOrdersInfo(data));
    }, []);



    return (
        <div>
          <h1 style={{margin: "50px"}}> All shop payment system ({ordersInfo.length}) </h1>
           <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>      
      <th>Price</th>
      <th>Category</th>
      <th>Tags</th>
      <th>Payment System</th>
    </tr>
  </thead>
  {
    ordersInfo.map((pd, index) => (   
      <tbody>
      <tr>
      <td>{index}</td>
      <td>{pd.name}</td>
      <td>{pd.price}</td>
      <td>{pd.category}</td>
      <td>{pd.tags}</td>
      <td>{pd.payment ? 
      'Paid' : 
      <Link style={{textDecoration: "none", margin: "10px"}} to={`/dashboard/payment/${pd._id}`}>
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