import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BaseBallBanner from '../BaseBallBanner/BaseBallBanner';

const BaseBallHome = () => {
    return (
        <div>
            <Navigation />
            <BaseBallBanner />
            <Footer />
        </div>
    );
};

export default BaseBallHome;