import React from 'react';
import { Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';

const AddEventRegister = () => {

    const [ticket, setTicket] = useState([])

    useEffect(() => {
      fetch("https://blooming-thicket-66783.herokuapp.com/eventRegister")
        .then((res) => res.json())
        .then((data) => setTicket(data));
    }, []);
  
    const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to delete?');
      if(proceed){
        const url = `https://blooming-thicket-66783.herokuapp.com/eventRegister/${id}`;
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
  
      fetch(`https://blooming-thicket-66783.herokuapp.com/updatemere/${id}`, {
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
          <h1 style={{margin: "50px" ,color:'#FFB700'}}>All Event Register {ticket.length}</h1>
           <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th className='th-display-block'>Start Date</th>
      <th className='th-display-block'>Sex</th>
      <th>First Name</th>
      <th className='th-display-block'>Club Name</th>
      <th>Number</th>
      <th className='th-display-block'>City</th>
      <th className='th-display-block'>Address</th>
      <th>Status</th>
    </tr>
  </thead>
  {
    ticket.map((pd, index) => (   
      <tbody>
      <tr>
      <td>{index}</td>
      <td className='th-display-block'>{pd.StartDate}</td>
      <td className='th-display-block'>{pd.sex}</td>
      <td>{pd.eventName}</td>
      <td className='th-display-block'>{pd.ClubName}</td>
      <td>{pd.number}</td>
      <td className='th-display-block'>{pd.city}</td>
      <td className='th-display-block'>{pd.address}</td>
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