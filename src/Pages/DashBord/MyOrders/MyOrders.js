import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/UseAuth';
import './MyOrders.css';


const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth({});

    useEffect(() => {
        fetch(`https://enigmatic-garden-34025.herokuapp.com/ordersInfo/${user?.email}`)
            .then(res => res.json())
            .then(result => setMyOrders(result));
    }, [user.email]);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete booking?');
        if (confirm) {
            fetch(`https://enigmatic-garden-34025.herokuapp.com/ordersInfo/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = myOrders.filter(orders => orders._id !== id);
                    setMyOrders(remaining);
                })
        }

    }

    return (
        <div className="mt-4 mb-5">
            <h4 className="text-white text-center">My Orders</h4>
            <hr className="bg-success w-25 mx-auto" />
            <div className="shadow  order-table p-2 mt-5 mb-5 w-75 mx-auto">
                <div>
                    <Table responsive className="mb-3 striped bordered hover">
                        <thead className="">
                            <tr className="text-white">
                                <th className="header-text fw-bold" scope="col">User Name</th>
                                <th className="header-text fw-bold" scope="col">Product Title</th>
                                <th className="header-text fw-bold" scope="col">Price</th>
                                <th className="header-text fw-bold" scope="col">Email</th>
                                <th className="header-text fw-bold" scope="col">Status</th>
                                <th className="header-text fw-bold" scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map(orders =>
                                    <tr key={orders._id}>
                                        <td>{orders.name}</td>
                                        <td>{orders.quantity > 1 ? <span>{orders.title} x {orders.quantity}</span> : orders.title}</td>
                                        <td>{orders?.price}</td>
                                        <td>{orders.email}</td>
                                        <td>
                                            {
                                                orders?.status === "Pending" ?
                                                    <button className="btn btn-warning">Pending</button>
                                                    :
                                                    <button className="btn btn-success">Shipped</button>
                                            }
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <button onClick={() => handleDelete(orders?._id)} className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
                                                <span>{orders.payment ? 'Paid' : <Link to={'/dashbord/pay'} style={{ textDecoration: 'none', color: 'black' }}>Pay</Link>}</span>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>

                </div>

            </div>
            {/* <div className='proceed-to-pay'>
                <Link to='/dashbord/pay'> <button >Proceed To Pay</button></Link>
            </div> */}
        </div>
    );
};

export default MyOrders;