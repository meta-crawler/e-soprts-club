import React from 'react';
import './Player.css';

const Player = (props) => {

    console.log(props.player);

    const {name, img, Position, id} = props.player;
    return (
        <div className='MainPlayer'>
            <img src={img} alt="" />


            <div className="Head">

            <div className="Number">
            <h1>{id}</h1>
            </div>
            <div className="Text">
            <h3>{name}</h3>
            <h5>{Position}</h5>
            
            </div>

            </div>
            


        </div>
    );
};

export default Player;