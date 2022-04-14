import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BasketBallBanner from '../BasketBallBanner/BasketBallBanner';


const BasketBallHome = () => {
    return (
        <div>
            <Navigation />
            <BasketBallBanner />
            <Footer />
        </div>
    );
};

export default BasketBallHome;