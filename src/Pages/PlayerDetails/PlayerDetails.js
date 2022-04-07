import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
        <div>
            <h1>HSaklsf</h1>
        </div>
    );
};

export default PlayerDetails;