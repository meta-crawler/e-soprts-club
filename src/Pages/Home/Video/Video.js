import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../Images/sport team img/image-4-110x70.jpg'
import img2 from '../../../Images/sport team img/image-5-110x70.jpg'
import img3 from '../../../Images/sport team img/image-7-110x70.jpg'
import video from '../../../Images/simple.mp4'
import './Video.css'


const Video = () => {
    return (
        <div className='main-video'>
           <Container>
  <div className='video-grid'>
    <div>
        <div>
            <h1 className='video-title'>MOST POPULAR </h1>
            <h1 className='video-title'> VIDEOS</h1>
            <p className='video-describtion'>Stumptown flexitarian schlitz adaptogen neutra sartorial edison bulb brunch</p>
   
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style={{color:'ButtonText'}} id="exampleModalToggleLabel">WATCH ON YOUTUBE</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       {/* <video src={video}></video> */}
       <iframe width="455" height="250" src="https://www.youtube.com/embed/387782CRNQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
     
    </div>
  </div>
</div>

<a class=" video-button" data-bs-toggle="modal" href="#exampleModalToggle" role="button">WATCH ON YOUTUBE</a>
            {/* <Button className='video-button modal-dialog modal-dialog-centered'> WATCH ON YOUTUBE  </Button> */}
        </div>
    </div>
    <div>
   <div className='video'>
   <iframe width="370" height="250" src="https://www.youtube.com/embed/HdOa5EOTzdQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
   
   </div>
    </div>
    <div>
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
   
    </div>
  </div>
</Container>
            
        </div>
    );
};

export default Video;