import React from 'react';
import Banner from '../Banner/Banner';
import FootBallLeague from '../FootBallLeague/FootBallLeague';
import FootBallMatch from '../FootBallMatch/FootBallMatch';

const FootBallHome = () => {
    return (
        <div>
            <Banner />
            <FootBallMatch />
            <FootBallLeague />
            
        </div>
    );
};

export default FootBallHome;