
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ReviewAll from '../ReviewAll/ReviewAll';


const PlayerReviwe = () => {
    const [singlePlayer, setSinglePlayer] = useState([]);

    useEffect(() => {

        fetch('https://blooming-thicket-66783.herokuapp.com/review')
          .then(res => res.json())
          .then(data => {
            setSinglePlayer(data);
          });
      }, []);

      console.log(singlePlayer.length);

    
    return (
        <Container>
     <h1 style={{marginBottom: "50px"}}>Comments ({singlePlayer.length})</h1>

        <div className="Player_all">
            {
                singlePlayer.map( singlePlayer => <ReviewAll

                    key={singlePlayer._id}
                    playersReview={singlePlayer}

                />)
            }
        </div>

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { callReviews } from "../../features/PlayerReviewSlice/PlayerReviewSlice";
import useAuth from "../../Hook/UseAuth";
import ReviewAll from "../ReviewAll/ReviewAll";

const PlayerReviwe = ({PlayerName}) => {
    console.log(PlayerName);

    
  const [singlePlayerReviews, setSinglePlayerReviews] = useState([]);
  
  const allReviews = useSelector((state) => state.reviews?.reviews);
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(callReviews())
  }, []);
  
    useEffect(() => {
        const _reviews = allReviews?.filter(review=>review.PlayerName === PlayerName)
        setSinglePlayerReviews(_reviews)
    }, [allReviews.length,PlayerName]);

  return (
    <Container>
      <h1 style={{ marginBottom: "50px" }}>Comments ({singlePlayerReviews.length})</h1>

      <div className="Player_all">
        {singlePlayerReviews.map((singlePlayer) => (
          <ReviewAll key={singlePlayer._id} playersReview={singlePlayer} />
        ))}
      </div>
    </Container>
  );
};

export default PlayerReviwe;
