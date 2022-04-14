import React from 'react';
import './WorkHome.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFootball,
    faHockeyPuck,
    faTableTennis,
    faBaseball,
    faBasketball,
    faVolleyballBall, 
    
  } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const WorkHome = () => {
    return (
        <Container>
        <div className='WorkHome'>
           
            <h1>New Responsive  Gaming Category Development for Desktop &amp; Mobile Devices</h1>
       

            <div className='WorkHomeMain'>

        <div>
            <Link style={{textDecoration: "none", color: "#000"}} to='/football'>
        <div className="WorkText">
        <div className="WorkShap"></div>
        <FontAwesomeIcon className='icon' icon={faFootball} />
         <h2>Football</h2>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
         </div>
         </Link>
        </div>


        <div >
        <Link style={{textDecoration: "none", color: "#000"}} to='/cricket'>
        <div className="WorkText">
        <div className="WorkShap"></div>
        <FontAwesomeIcon className='icon' icon={faHockeyPuck} />
        <h2>Cricket</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
        </Link>
        </div>


        
        <div>
        <Link style={{textDecoration: "none", color: "#000"}} to='/tableTennis'>
        <div className="WorkText">
        <div className="WorkShap"></div>  
       
        <FontAwesomeIcon className='icon' icon={faTableTennis} />
        <h2>Table Tennis</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
        </Link>
         </div>

         <div >

         <Link style={{textDecoration: "none", color: "#000"}} to='/baseBall'>
        <div className="WorkText">
        <div className="WorkShap"></div>  
       
        <FontAwesomeIcon className='icon' icon={faBaseball} />
        <h2>Base Ball</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
        </Link>
         </div>


         <div>
         <Link style={{textDecoration: "none", color: "#000"}} to='/basketBall'>
        <div className="WorkText"> 
        <div className="WorkShap"></div>
       
        <FontAwesomeIcon className='icon' icon={faBasketball} />
        <h2>Basket Ball</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
        </Link>
         </div>

         <div>
         <Link style={{textDecoration: "none", color: "#000"}} to='/volleyBall'>
        <div className="WorkText">  
        <div className="WorkShap"></div>
        <FontAwesomeIcon className='icon' icon={faVolleyballBall} />
        <h2>Volley Ball</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Link>
         </div>
         
        </div>

        </div>
        </Container>
    );
};

export default WorkHome;