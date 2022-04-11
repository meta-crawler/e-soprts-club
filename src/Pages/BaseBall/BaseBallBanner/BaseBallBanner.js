import React from 'react';
import { Button, Container} from "react-bootstrap";
import './BaseBallBanner.css';

const BaseBallBanner = () => {
    return (
        <div className='BaseBallBanner'>
            <Container>
            <div className="Shap">

            </div>
            <div className="Text">
                <h1>Find and Download Free Graphic Resources for Football Banner</h1>
                <p>Football Schedule · English Premier League · Spanish LaLiga · Italian Serie A · German Bundesliga · French Ligue 1 · English League Championship ·</p>
                <Button>NEXT MATCH</Button>
                <Button>FULL TABLE</Button>

            </div>
            </Container>
        </div>
    );
};

export default BaseBallBanner;