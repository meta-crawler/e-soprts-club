import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../Images/next match/team-4-92x98.png'
import img2 from '../../../Images/next match/team-6-79x98.png'
import blueimg from '../../../Images/buleimg.jpg'
import twitter from '../../../Images/twitter.jpg'
import './Nextmatch.css'

const Nextmatch = () => {
    return (
        <div>
       <Container>
  <Row>
    <Col>
        <div className='match-main'>
            <h2 className='next-style'>NEXT MATCH</h2>
       <div  className='match-info'>
       <div>
                <div>
                    <img src={img1} alt="" />
                    <h5 className='team-name'>KANGAROOS</h5>
                </div>
            </div>
            <div>
                <h2 className='vs-style'>VS</h2>
            </div>
            <div>
                <div>
                    <h5 className='team-name'>BLUEBIRDS</h5>
                    <img src={img2} alt="" />

                </div>
            </div>
       </div>
            <h4 className='date-style'>25 Sep, 2021</h4>
            <h6 className='text-style'>Kensingtion</h6>
        </div>
    </Col>
    <Col>
        <div className='tweets-style'>
           
            <div className=''>
            <h2 style={{color:'whitesmoke', paddingLeft:'10px'}}>RECENT TWEETS</h2>
            </div>
        <Carousel>
  <Carousel.Item>
    <img
      width='250px'
      height='252px'
      className="d-block w-100"
      src={blueimg}
      alt="First slide"
    />
    <Carousel.Caption>
        <img src={twitter} width='100px' alt="" />
      <p>The top 10 prospects on @movethesticks latest big . </p>
      <p> Full list: <a href=""></a></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
        height='252px'

      className="d-block w-100"
      src={blueimg}
      alt="Second slide"
    />

    <Carousel.Caption style={{marginButtom:'800px'}}>
      <img src={twitter} width='100px' alt="" />
      <p>Inspiration & motivation 🤟🏾  .  
        This defense will be elite at all 3 levels, I’m claiming it 🙏🏾  </p>
      <p>@AaronDonald97 @Bwagz @RumsNFL</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
        height='252px'
      className="d-block w-100"
      src={blueimg}
      alt="Third slide"
    />

    <Carousel.Caption>
    <img src={twitter} width='100px' alt="" />
      <p>On the latest @MoveTheSticks  podcast, DJ,@BuckyBrooks  & @RhettNFL  discuss trades that should happen in the 2022 NFL Draft. Find out 👇 APPLE:  
      SPOTIFY: </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
        height='252px'
      className="d-block w-100"
      src={blueimg}
      alt="Third slide"
    />

    <Carousel.Caption>
    <img src={twitter} width='100px' alt="" />
      <p>The two dudes with the most First Team All-Pro selections amongst active players are now on the same defense. Sheesh 😳 </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
        height='252px'
      className="d-block w-100"
      src={blueimg}
      alt="Third slide"
    />

    <Carousel.Caption>
    <img src={twitter} width='100px' alt="" />
      <p>Let's go!! Don't have to play against . @Bwagz anymore!!!!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    </Col>
  </Row>
 
</Container>
        </div>
    );
};

export default Nextmatch;