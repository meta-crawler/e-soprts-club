import React from 'react';
import { Container } from 'react-bootstrap';
import './Fans.css';
import image1 from '../../../Images/02.jpg';
import image2 from '../../../Images/05.jpg';


const Fans = () => {
    return (
        <Container className='Fans'>
            <h1>WHAT FANS ARE SAYING</h1>

            <div className="FansFull">
                <div className="clint">
                    <img src={image1} alt="" />
                    <h2>Stiven Metzler</h2>
                    <h3>Founder, AllSportsShop</h3>
                    <p className='fans-p'>Cleveland became a title town for the first time since Dec. 27, 1964, when the Browns won the ESL championship. There had been so many close calls in between.</p>
                </div>
                <div className="clint">
                <img src={image2} alt="" />
                     <h2>Stiven Metzler</h2>
                    <h3>Founder, AllSportsShop</h3>
                    <p className='fans-p'>Cleveland became a title town for the first time since Dec. 27, 1964, when the Browns won the ESL championship. There had been so many close calls in between.</p>
                </div>



            </div>

        </Container>
    );
};

export default Fans;