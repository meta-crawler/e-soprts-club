import React from 'react';
import Nextmatch from '../Nextmatch/Nextmatch';
import Banner from './Banner/Banner';
import OurTeam from './OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Nextmatch></Nextmatch>
            <OurTeam />
        </div>
    );
};

export default Home;