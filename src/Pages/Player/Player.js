import React from 'react';
import './Player.css';
import { useNavigate } from 'react-router-dom';

const Player = (props) => {

    console.log(props.player);

    const {name, img, Position, Nationality, id} = props.player;
console.log( props.player);


    const navigate = useNavigate();
  
    function detailsPlayer() {
      navigate(`/playerDetails/${id}`);
    }
  

    return (
        <div className='MainPlayer' onClick={
            () => {
                detailsPlayer(id);
            }}>
            <div className="card">
                                    <img src={img} className="card-img-top" alt="..." />
                                    <div className="card-body card-style">
                                    <div>
                                             <h2 className="player-number">{id}</h2>
                                    </div>
                                    <h5 className="card-title player-name">{name}</h5>
                                    <p className="card-text player-title">{Position || Nationality}</p>
                                    </div>
                                    </div>
            


        </div>
    );
};

export default Player;