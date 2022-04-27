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
    
    



  </Container>
    );
};

export default PlayerReviwe;