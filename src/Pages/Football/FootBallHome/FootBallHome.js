import React from 'react';
import ControledSlider from '../../ControledSlider/ControledSlider';
import Banner from '../Banner/Banner';
import FootBallLeague from '../FootBallLeague/FootBallLeague';
import FootBallMatch from '../FootBallMatch/FootBallMatch';

const FootBallHome = () => {
    return (
        <div>
            <Banner />
            <FootBallMatch />
            <ControledSlider />
            <FootBallLeague />
            
        </div>
    );
};

export default FootBallHome;