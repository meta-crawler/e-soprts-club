import React from 'react';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import './AddTicketBooking.css';
import { Link } from 'react-router-dom';


const AddTicketBooking = () => {
  const [ticket, setTicket] = useState([])

  useEffect(() => {
    fetch("https://blooming-thicket-66783.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setTicket(data));
  }, []);

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if(proceed){
      const url = `https://blooming-thicket-66783.herokuapp.com/booking/${id}`;
    fetch(url,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=> {
     if(data.deletedCount > 0) {
       alert('Booking Succefully Deleted');
       const remaining = ticket.filter(order=> order._id !== id);
       setTicket(remaining);
       console.log(setTicket);
       
     }

     });
    }
  
  }




  const handleApprove = (id) => {
    console.log(id);

    fetch(`https://blooming-thicket-66783.herokuapp.com/update/${id}`, {
    method: "PUT"


    })
    .then(res=>res.json())
    .then(data => {
      const remaining = ticket.filter(order=> order._id !== id);
       setTicket(remaining);
    })


  }
  console.log(ticket)



    return (
        <div >
          <h1 style={{margin: "50px"}}> All Ticket Booking ({ticket.length}) </h1>
           <Table className='ticket-table' striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th className='th-display-block' >Email</th>
      <th>Number</th>
      <th className='th-display-block'>Date</th>
      {/* <th className='th-display-block'>City</th> */}
      {/* <th className='th-display-block'>Address</th> */}
      <th style={{display:'inline-block'}}>Status</th>
    </tr>
  </thead>
  {
    ticket.map((pd, index) => (   
      <tbody>
      <tr>
      <td>{index}</td>
      <td>{pd.name}</td>
      <td className='th-display-block'>{pd.email}</td>
      <td>{pd.number}</td>
      <td className='th-display-block'>{pd.date}</td>
      {/* <td className='th-display-block'>{pd.city}</td> */}
      <td className='th-display-block'> <Link to='checkout'><button>Payment</button></Link> </td>
      <button onClick={()=> handleDelete(pd._id)} className="btn bg-danger p-2">Delete</button>
{pd.status === "pending" ? <button onClick={()=> handleApprove(pd._id)} className="btn bg-danger p-2">Approve</button>: <span><AddTaskIcon style={{
  color: "dc3545", fontSize: "20px"
}} /></span>}
      
      </tr>
      </tbody>
   ))}
  
  
</Table>
        </div>
    );
};

export default AddTicketBooking;