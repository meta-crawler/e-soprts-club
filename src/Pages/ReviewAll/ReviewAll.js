import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import './ReviewAll.css';
import { Rating } from '@mui/material';

const ReviewAll = (porps) => {
    console.log(porps.playersReview);
    const {url, name, PlayerName, deatls,email, feedback } = porps.playersReview;
    return (
        
             <div className="Review-Part">
        <div className="images">
          <img src={url} alt="" />
        </div>
        <div className="Text-Areaya">
          
          <div>
          <h4>{name}</h4>
          <Rating
              name="feedback"
              value={feedback}
              

              
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
        

          </div>
          <p className='review-all-pstyle' >{deatls}</p>

          
          
        </div>

       

      
        </div>
    );
};

export default ReviewAll;