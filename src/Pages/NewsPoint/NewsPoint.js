import React from 'react';
import { Button, Container } from 'react-bootstrap';
import images from '../../Images/News/72752f5719a50f923ecc500d8138d343.jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import TableImages from '../../Images/istockphoto-518118714-170667a.jpg';

import lage1 from '../../Images/NewsUpdate/1363501000.jpg';
import lage2 from '../../Images/NewsUpdate/EHGHlETWsAEqy0T.jpg';
import lage3 from '../../Images/NewsUpdate/2021–22_Indian_Super_League_poster.jpg';


import './NewsPoint.css';
import { Link } from 'react-router-dom';

const NewsPoint = () => {
    return (
        <Container id='news'>
             <div className="row">
            <div className="col-lg-8 col-12">
                <h1>LATEST NEWS</h1>
                <span className='Line'></span>

                <img style={{width: "100%", opacity: ".4"}} src={images} alt="" />

                <div className="NewsText">
                    <div className="Text"></div>
                    <p><CalendarMonthIcon /> April 20, 2022</p>
                    <h2>Top Ten Football Leagues In The World</h2>
              <h6>The snatch is a wide-grip, one-move lift. The clean and jerk is a close-grip,...</h6> 
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

            <div style={{marginTop: "50px"}}  className="">
            <Container>
                <div className="BookingPart">
                        <div className="Text">
                        <h1 style={{color:'gold'}} >Why are you still waiting?</h1>
                    <p>PLEASE! <span style={{color: "#E71E68"}} >JOIN OUR QUIZE EVENT THEN  </span></p>
                        </div>
                        
                        <div className="Bottun">
                            <Link to="/contestsregister" > <Button style={{background: "#E71E68", color: "#FFF", padding: "10px", border: "0px", marginTop: "20px"}}>EVENT BOOKING</Button></Link>
                        </div>
                        <div className="Number">
                            <h2><span style={{color: "#E71E68", marginTop: "0px", display: "block"}} >25 </span> March 2022</h2>
                        </div>
                </div>

            </Container>

           
            </div>            
        </Container>
    );
};

export default NewsPoint;