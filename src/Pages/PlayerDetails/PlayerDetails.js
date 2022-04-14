import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import biograpy from "../../Images/player-about3-img.jpg";

import Navigation from '../Shared/Navigation/Navigation';
=======
import PlayerDetailsBanner from '../PlayerDetailsBanner/PlayerDetailsBanner';

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

      <>
        <Navigation />
      <div className='biography container'>
      <div className='biography'>
           <PlayerDetailsBanner></PlayerDetailsBanner>

      <div className='row'>
          <div className='col-md-6'>
          <div className='style-playerDetails'>
          <h1 className='playerHeading'>Biography</h1>
          <h2>
            {detailsItam?.name}
          </h2>

          <p>{detailsItam?.describe}</p>
          <p>He has spent his entire professional career with Barcelona, where he has won a club-record 34 trophies, including ten La Liga titles, four UEFA Champions League titles and six Copas del Rey.</p>
          <p>A prolific goalscorer and a creative playmaker, Messi holds the records for most goals in La Liga (419), a La Liga and European league season (50), most hat-tricks in the UEFA Champions League (8), and most assists in La Liga (169) and the Copa América (12). He has scored 698 senior career goals for club and country.</p>
          <div>
              <table>
                  <tbody>
                      <tr>
                          <td><strong>Height</strong></td>
                          <td>{detailsItam?.Height}</td>
                      </tr>
                      <tr>
                          <td><strong>Weight</strong></td>
                          <td>{detailsItam?.Weight}</td>
                      </tr>
                      <tr>
                          <td><strong>Position</strong></td>
                          <td>{detailsItam?.Position}</td>
                      </tr>
                      <tr>
                          <td><strong>Nationality</strong></td>
                          <td>{detailsItam?.Nationality}</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          </div>
          </div>
          <div className='col-md-6'>
              <img src={playerDetails?.img} alt="" />
          </div>
      </div>
  </div>
  </>
    );
};

export default PlayerDetails;