import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../Images/sport team img/image-4-110x70.jpg'
import img2 from '../../../Images/sport team img/image-5-110x70.jpg'
import img3 from '../../../Images/sport team img/image-7-110x70.jpg'
import './Video.css'


const Video = () => {
    return (
        <div className='main-video'>
           <Container>
  <Row>
    <Col>
        <div>
            <h1 className='video-title'>MOST POPULAR </h1>
            <h1 className='video-title'> VIDEOS</h1>
            <p className='video-describtion'>Stumptown flexitarian schlitz adaptogen neutra sartorial edison bulb brunch</p>
            <Button className='video-button'>WATCH ON YOUTUBE  </Button>
        </div>
    </Col>
    <Col>
   <div className='video'>
   <iframe width="370" height="250" src="https://www.youtube.com/embed/HdOa5EOTzdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
   </div>
    </Col>
    <Col>
    <div className='video-team'>
        <div>
            <img src={img1} alt="" />
        </div>
        <div style={{paddingTop:'20px', paddingLeft:'20px'}}>
            <h3 className='team-des'>16 Celebrities Who Own Sports Teams</h3>
            <p className='team-date'>05 May, 2016</p>
        </div>
    </div>
    <div className='video-team'>
        <div>
            <img src={img2} alt="" />
        </div>
        <div style={{ paddingLeft:'20px'}}>
            <h3 className='team-des'>Which player in the 2016 ESL Draft?</h3>
            <p className='team-date'>05 May, 2016</p>
        </div>
    </div>
    <div className='video-team'>
        <div>
            <img src={img3} alt="" />
        </div>
        <div style={{ paddingLeft:'20px'}}>
            <h3 className='team-des'>Game 5: 24 Second Thoughts before Start</h3>
            <p className='team-date'>29 Apr, 2016</p>
        </div>
    </div>
   
    </Col>
  </Row>
</Container>
            
        </div>
    );
};

export default Video;