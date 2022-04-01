import React from 'react';
import Nextmatch from '../Nextmatch/Nextmatch';
import Video from '../Video/Video';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Nextmatch></Nextmatch>
            <Video></Video>
        </div>
    );
};

export default Home;