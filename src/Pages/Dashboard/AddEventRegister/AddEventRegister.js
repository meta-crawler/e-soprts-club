import React from 'react';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';

const AddEventRegister = () => {

    const [ticket, setTicket] = useState([])

    useEffect(() => {
      fetch("https://enigmatic-garden-34025.herokuapp.com/eventRegister")
        .then((res) => res.json())
        .then((data) => setTicket(data));
    }, []);
  
    const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to delete?');
      if(proceed){
        const url = `https://enigmatic-garden-34025.herokuapp.com/eventRegister/${id}`;
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
  
      fetch(`https://enigmatic-garden-34025.herokuapp.com/updatemere/${id}`, {
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
        <div>
          <h1 style={{margin: "50px"}}>All Event Register {ticket.length}</h1>
           <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Start Date</th>
      <th>Sex</th>
      <th>First Name</th>
      <th>Club Name</th>
      <th>Number</th>
      <th>City</th>
      <th>Address</th>
      <th>Status</th>
    </tr>
  </thead>
  {
    ticket.map((pd, index) => (   
      <tbody>
      <tr>
      <td>{index}</td>
      <td>{pd.StartDate}</td>
      <td>{pd.sex}</td>
      <td>{pd.eventName}</td>
      <td>{pd.ClubName}</td>
      <td>{pd.number}</td>
      <td>{pd.city}</td>
      <td>{pd.address}</td>
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

export default AddEventRegister;