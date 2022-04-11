import React from 'react';
import ControledSlider from '../../ControledSlider/ControledSlider';
import CountSlider from '../../CountSlider/CountSlider';
import NextMathTimer from '../../NextMathTimer/NextMathTimer';
import Banner from '../Banner/Banner';
import BookingTactk from '../BookingTactk/BookingTactk';
import FootBallLeague from '../FootBallLeague/FootBallLeague';


const FootBallHome = () => {
    return (
        <div>
            <Banner />
            <NextMathTimer />
            <BookingTactk />
            <ControledSlider />
            <FootBallLeague />
            <CountSlider />

            
        </div>
    );
};

export default FootBallHome;