import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import biograpy from "../../Images/player-about3-img.jpg";
import './PlayerDetails.css';

const PlayerDetails = () => {


  const { id } = useParams();

  const [playerDetails, setPlayerDetails] = useState([]);
  const [detailsItam, setDetailsItam] = useState([]);


  useEffect(() => {

    fetch('https://enigmatic-garden-34025.herokuapp.com/players')
      .then(res => res.json())
      .then(data => {
        setPlayerDetails(data);
      });
  }, []);









  useEffect(() => {
    if (playerDetails?.length > 0) {
      const matchItam = playerDetails.find(playerDetails => playerDetails.id == id)
      setDetailsItam(matchItam);
    }

  }, [playerDetails])



  console.log(detailsItam);

    return (
      <div className='biography'>
      <div className='row'>
          <div className='col-md-6'>
          <div className='style-playerDetails'>
          <h1 className='playerHeading'>Biography</h1>
          <p>Thomas Smith is an Argentine professional footballer who plays as a forward and captains both Barcelona and the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has a record-tying five Ballond Or awards, four of which he won consecutively, and a record six European Golden Shoes.</p>
          <p>He has spent his entire professional career with Barcelona, where he has won a club-record 34 trophies, including ten La Liga titles, four UEFA Champions League titles and six Copas del Rey.</p>
          <p>A prolific goalscorer and a creative playmaker, Messi holds the records for most goals in La Liga (419), a La Liga and European league season (50), most hat-tricks in the UEFA Champions League (8), and most assists in La Liga (169) and the Copa América (12). He has scored 698 senior career goals for club and country.</p>
          <div>
              <table>
                  <tbody>
                      <tr>
                          <td><strong>Height</strong></td>
                          <td>6.5'</td>
                      </tr>
                      <tr>
                          <td><strong>Weight</strong></td>
                          <td>195 LBS</td>
                      </tr>
                      <tr>
                          <td><strong>Position</strong></td>
                          <td>Goalkeeper</td>
                      </tr>
                      <tr>
                          <td><strong>Nationality</strong></td>
                          <td>Bangladesh</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          </div>
          </div>
          <div className='col-md-6'>
              <img src={biograpy} alt="" />
          </div>
      </div>
  </div>
    );
};

export default PlayerDetails;