import React from 'react';
import './WorkHome.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFootball,
    faHockeyPuck,
    faTableTennis,
    faBaseball,
    faBasketball,
    faVolleyballBall
  } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';




const WorkHome = () => {
    return (
        <Container>
        <div className='WorkHome'>
           
            <h1 className='work-home-title'>New Responsive  Gaming Category Development for Desktop &amp; Mobile Devices</h1>


            <div className='WorkHomeMain'>
        <div>
        <div className="WorkText">
        <div className="WorkShap"></div>
        <FontAwesomeIcon className='icon' icon={faFootball} />
         <h2>Football</h2>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
         </div>
        </div>
        <div >
        <div className="WorkText">
        <div className="WorkShap"></div>
        <FontAwesomeIcon className='icon' icon={faHockeyPuck} />
        <h2>Hockey Puck</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
        </div>

        
        <div>
        <div className="WorkText">
        <div className="WorkShap"></div>  
       
        <FontAwesomeIcon className='icon' icon={faTableTennis} />
        <h2>Table Tennis</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </div>

         <div >
        <div className="WorkText">
        <div className="WorkShap"></div>  
       
        <FontAwesomeIcon className='icon' icon={faBaseball} />
        <h2>Base Ball</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </div>


         <div>
        <div className="WorkText"> 
        <div className="WorkShap"></div>
       
        <FontAwesomeIcon className='icon' icon={faBasketball} />
        <h2>Basket Ball</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </div>

         <div>
        <div className="WorkText">  
        <div className="WorkShap"></div>
        <FontAwesomeIcon className='icon' icon={faVolleyballBall} />
        <h2>Volley Ball</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </div>
        </div>

        </div>
        </Container>
    );
};

export default WorkHome;