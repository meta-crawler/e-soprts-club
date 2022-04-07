import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/Untitled-1.png agin.png'
import cartlogo from '../../../Images/download.png'
import './Navigation.css'
import useAuth from '../../../Hook/UseAuth';
// import cartlogo from "../../../Images/download.png";
// import logo from "../../../Images/Untitled-1.png agin.png";


const Navigation = () => {
  const {user,logOut} = useAuth()


    return (
        <div>
   <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/home"><img width="75px" src={logo} alt="" />  </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>

          <Nav.Link className='link-style ms-auto' as={Link} to="/home"><h5 className='text-style' >Home</h5></Nav.Link>
          
          

          <NavDropdown title="PAGES" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/footballHome">Football</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          
        </NavDropdown>
          
          <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>NEWS</h5></Nav.Link>
          {/* <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>SHOP</h5></Nav.Link> */}

          <Nav.Link className='link-style' as={Link} to="/contact"><h5 className='text-style'>Contact</h5></Nav.Link>
          
          <Nav.Link className='link-style' as={Link} to="/login"><h5 className='text-style'>Login</h5></Nav.Link>
          {/* <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>DONATIONS</h5></Nav.Link> */}
          <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>CONTACTS</h5></Nav.Link>
       { user?.email ? 
      <h5 onClick={logOut} style={{cursor:'pointer'}} className='text-style'>Logout</h5>
       : 
        <Nav.Link className='link-style' as={Link} to="/login"><h5 className='text-style'>Login</h5></Nav.Link>}
         
          <Nav.Link className='link-style' as={Link} to="/footballHome"><h5 className='text-style'>Football</h5></Nav.Link>
         

          <Nav.Link className='link-style cart-button' as={Link} to="/cart"><img src={cartlogo} width="50px" alt="" /> </Nav.Link>
          


           

         
           
           

            <Nav.Link className="link-style" as={Link} to="/booking">
              <h5 className="text-style">BOOKING</h5>
            </Nav.Link>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
