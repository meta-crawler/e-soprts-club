import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/Untitled-1.png agin.png'
import cartlogo from '../../../Images/download.png'
import './Navigation.css'


const Navigation = () => {
    return (
        <div>
   <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/home"><img width="75px" src={logo} alt="" />  </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>

          <Nav.Link className='link-style ms-auto' as={Link} to="/home"><h5 className='text-style' >ABOUT</h5></Nav.Link>
          
          <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>PAGES</h5></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>SPORTSPRESS</h5></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>NEWS</h5></Nav.Link>
          {/* <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>SHOP</h5></Nav.Link> */}
          {/* <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>DONATIONS</h5></Nav.Link> */}
          <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>CONTACTS</h5></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/login"><h5 className='text-style'>Login</h5></Nav.Link>
          <Nav.Link className='link-style cart-button' as={Link} to="/cart"><img src={cartlogo} width="50px" alt="" /> </Nav.Link>
          
        

        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
    );
};

export default Navigation;