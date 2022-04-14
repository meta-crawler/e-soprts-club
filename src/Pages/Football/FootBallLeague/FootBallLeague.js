import React from 'react';
import { Button, Container, Row, Col } from "react-bootstrap";
import image1 from '../../../Images/FootBall/Players/kisspng-mohamed-salah-liverpool-f-c-premier-league-footba-mohammed-sallah-5b12c5f6798468.9686116715279569824977.png';
import image2 from '../../../Images/FootBall/Players/james-milner-png-2-Transparent-Images.png';
import image3 from '../../../Images/FootBall/Players/Francesco-Totti-10-AS-Roma.png';
import image4 from '../../../Images/FootBall/Players/p152760.png';
import banner from '../../../Images/FootBall/Players/7e8b013be07b6c7887d2831efc3dab35.jpg';


import './FootBallLeague.css';

const FootBallLeague = () => {
    return (
        <Container>
            <Row>
    <Col >
        <div>
            <h1>League Table</h1>
            <div className="PlayersLeg">

                <div className="images">
                    <img src={image1} alt="" />
                </div>
                <div className="Text">
                    <h2>Mohamed Salah</h2>
                    <h4>29 Goals</h4>
                    
                     </div>

            </div>


            <div className="PlayersLeg">

                <div className="images">
                    <img src={image2} alt="" />
                </div>
                <div className="Text">
                    <h2>Divock Origi</h2>
                    <h4>16 Goals</h4>
                    
                     </div>

            </div>

            <div className="PlayersLeg">

                <div className="images">
                    <img src={image3} alt="" />
                </div>
                <div className="Text">
                    <h2>James Milner</h2>
                    <h4>10 Goals</h4>
                    
                     </div>

            </div>

            <div className="PlayersLeg">

                <div className="images">
                    <img src={image4} alt="" />
                </div>
                <div className="Text">
                    <h2>David Totti</h2>
                    <h4>9 Goals</h4>
                    
                     </div>

            </div>
            
            
            
        </div>
    </Col>

    <Col  >
        <div className='ImageBanner'>
            <img src={banner} alt="" />
        </div>
    </Col>
    </Row>
        </Container>
    );
};

export default FootBallLeague;