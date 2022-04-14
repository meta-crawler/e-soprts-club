import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import VolleyBallBanner from '../VolleyBallBanner/VolleyBallBanner';

const VolleyBallHome = () => {
    return (
        <div>
            <Navigation />
            <VolleyBallBanner />
            <Footer />
        </div>
    );
};

export default VolleyBallHome;