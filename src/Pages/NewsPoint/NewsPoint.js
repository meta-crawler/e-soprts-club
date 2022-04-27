import React from 'react';
import {  Button, Container } from 'react-bootstrap';
import images from '../../Images/News/72752f5719a50f923ecc500d8138d343.jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import TableImages from '../../Images/istockphoto-518118714-170667a.jpg';

import { Table } from 'react-bootstrap';
import { useState, useEffect } from "react";



import './NewsPoint.css';
import { Link } from 'react-router-dom';


const NewsPoint = () => {
    
    const [event, setEvent] = useState([])

    useEffect(() => {
      fetch("https://blooming-thicket-66783.herokuapp.com/upcomingEvents")
        .then((res) => res.json())
        .then((data) => setEvent(data));
    }, []);

console.log(event);




const Booking = () => {
    console.log("Go There");
    const ref = React.createRef();
    return ref;
    
}



const Permetion = () => {
    const confrom = window.confirm("Are You Agreey With Us");
     let  ref = React.createRef(null);
    if(confrom){
        ref =  React.createRef();
    }
   return ref;

    
}






    return (
        <Container id='news'>
             <div className="row news-responsibe">
            <div className="col-lg-8 col-12">
                <h1>LATEST NEWS</h1>
                <span className='Line'></span>

                <img className='latest-news-img' style={{width: "100%", opacity: ".4" }} src={images} alt="" />

                <div className="NewsText">
                    <div className="Text"></div>
                    <p><CalendarMonthIcon /> April 20, 2022</p>
                    <h2>Top Ten Football Leagues In The World</h2>
              <h6 className='newspont-details-text'>The snatch is a wide-grip, one-move lift. The clean and jerk is a close-grip,...</h6> 
                </div>
            </div>

            <div className="col-lg-4 col-12 TablePoint">
              <h1>POINT TABLE</h1>
              
              <span className='Line'></span>
              <div className="TableImage">
                  <img style={{height: "610px", width: "510px"}} src={TableImages} alt="" />
              </div>






              <table style={{width: "500px"}}>
                  <tbody>
                      <tr style={{background: "rgba(245, 40, 145, 0.8)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px",  padding: "10px", width: "200px"}}><strong>Team</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px", width: "100px"}}><strong>W</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>L</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>PTS</strong></td>
                         
                      </tr>
                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "50px 10px 10px"}}><strong>1 <span style={{marginLeft: "20px"}}>Man. Untied</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px", padding: "50px 0px 10px"}}>26</td>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "50px 0px 10px"}}><strong>03</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "50px 0px 10px"}}><strong>83 <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></strong></td>
                      </tr>


                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "10px 10px"}}><strong>2 <span style={{marginLeft: "20px"}}>Valencia</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px"}}>24</td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>04</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>80 </strong> <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></td>
                      </tr>




                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "10px 10px"}}><strong>3 <span style={{marginLeft: "20px"}}>Real Madrid</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px"}}>24</td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>03</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>79</strong> <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></td>
                      </tr>




                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "10px 10px"}}><strong>4 <span style={{marginLeft: "20px"}}>Man City</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px"}}>22</td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>03</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>75</strong> <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></td>
                      </tr>




                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "10px 10px"}}><strong>5 <span style={{marginLeft: "20px"}}>Barcelona</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px"}}>24</td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>04</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>74</strong> <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></td>
                      </tr>




                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "10px 10px"}}><strong>6 <span style={{marginLeft: "20px"}}>Arsenal</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px"}}>20</td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>04</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>70</strong> <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></td>
                      </tr>




                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "10px 10px"}}><strong>7 <span style={{marginLeft: "20px"}}>Real Sociedad</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px"}}>18</td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>06</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>64</strong> <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></td>
                      </tr>



                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "10px 10px"}}><strong>8 <span style={{marginLeft: "20px"}}>Barcelona</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px"}}>15</td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>09</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>55</strong> <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></td>
                      </tr>


                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "10px 10px"}}><strong>9 <span style={{marginLeft: "20px"}}>Liverpool</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px"}}>12</td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>10</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>48</strong> <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></td>
                      </tr>

                      <tr style={{borderBottom: "2px solid rgba(255,255,255,.1)"}}>
                          <td style={{ fontWeight: "400", fontSize: "20px", padding: "10px 10px"}}><strong>10 <span style={{marginLeft: "10px"}}>Chelsea</span> </strong></td>
                          <td style={{fontWeight: "600", fontSize: "20px"}}>12</td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>12</strong></td>
                          <td style={{ fontWeight: "400", fontSize: "20px"}}><strong>48</strong> <StarBorderPurple500Icon sx={{color: "gold", marginTop: "-5px", marginLeft:"5px"}} /></td>
                      </tr>









                  </tbody>
              </table>







            </div>
            </div>

            <div style={{marginTop: "50px"}}  className="row">
            <div className="col-lg-12 col-12">
                <div className="eventBanner">
                    <div className="UpEvent">
                    <Button className='details-connecting cart-btn'
                    type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{marginRight: "50px", background: "#4e6dfa", padding: "10px", border: "none", cursor: "pointer", position: "absolute", top: "50%", left: "50%", color: "#000000"}}>Up Coming  New Matchs</Button>
                    

                       <Button className='details2-connecting cart-btn'
                    type='button' data-bs-toggle="modal" data-bs-target="#exampleModall"  style={{marginRight: "50px", background: "#E40046", padding: "10px", border: "none", cursor: "pointer", position: "absolute", top: "50%", left: "30%"}}>Up Coming  New Contests</Button>

                       <Button className='details-connecting cart-btn'
                    type='button' data-bs-toggle="modal" data-bs-target="#exampleModall"  style={{marginRight: "50px", background: "#4e6dfa", padding: "10px", border: "none", cursor: "pointer", position: "absolute", top: "50%", left: "30%", color: "#000000"}}>Up Coming  New Contests</Button>



                    </div>



                     </div>


                     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div style={{marginLeft: "300px", marginTop: "50px"}} class="modal-dialog">
                          <div style={{width: "1000px"}} class="modal-content modal-banner">
                            <div class="modal-header-style">
                              <h5 class="modal-titel1 mb-3">Up Coming  New Matchs </h5>
                            </div>
                            <div class="modal-body">

                <Table striped bordered hover >
  <thead style={{color: "#FFFFFF"}}>
    <tr>
      <th>#</th>
      <th>EVENT</th>
      <th>PLACE</th>
      <th>BOOKING</th>
      <th>REGISTER</th>
    </tr>
  </thead>
  {
    event.map((pd, index) => (   
      <tbody style={{color: "#FFFFFF"}}>
      <tr>
      <td style={{color: "#FFFFFF"}}>{index}</td>
      <td style={{color: "#FFFFFF"}}>

          <div style={{position: "relative", width: "170px", padding: "15px"}} className="Event">
              <img style={{width: "80px", height: "50px", borderRadius: "05px", display: "inline-block"}} src={pd.img} alt="" />

              <div style={{display: "inline-block", position: "absolute", top: "13px", right: "-60px"}} className="TextEvent">
              <h5 style={{fontSize: "20px"}}>{pd.name}</h5>
              <h6 style={{fontSize: "18px", color: "#fbc02d"}}>{pd.date}</h6>
              </div>
          </div>
      </td>
      <td style={{color: "#fbc02d"}}><h4>{pd.nationality}</h4> </td>
      <td> <Button  onClick={Booking()} style={{color: "#FFFFFF", background: "#E40046"}} > <Link style={{color: "#FFFFFF", textDecoration: "none"}} to="/booking">	Book Now</Link> </Button></td>
      <td><Button onClick={Booking()}  style={{ background: "#E40046"}} > <Link style={{color: "#FFFFFF", textDecoration: "none"}} to="/event-register">Register Now</Link></Button> </td>
      


      </tr>
      </tbody>
  ))}
  
  
  </Table>




                <div class="modal-footer">
                              <button type="button" class="modal-btn" data-bs-dismiss="modal">Close</button>
                              
                            </div>
                          </div>
                          </div>
                          </div>
                          </div>




                          <div class="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div style={{marginLeft: "300px", marginTop: "50px"}} class="modal-dialog">
                          <div style={{width: "1000px"}} class="modal-content modal-banner">
                            <div class="modal-header-style">
                              <h5 class="modal-titel1 mb-3">Up Coming  New Contests </h5>
                            </div>
                            <div class="modal-body">

               




                <div class="modal-footer">
                              <button type="button" class="modal-btn" data-bs-dismiss="modal">Close</button>
                             <Link onClick={Permetion} to="/contestsregister"><button type="button" class="modal-btn">Next</button></Link> 
                              
                            </div>
                          </div>
                          </div>
                          </div>
                          </div>

                
                </div>
                <div>
                
                



                </div>

           
            </div>            
        </Container>
    );
};

export default NewsPoint;