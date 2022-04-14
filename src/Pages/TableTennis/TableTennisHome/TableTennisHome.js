import React from 'react';
import TableTennisBanner from '../TableTennisBanner/TableTennisBanner';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';


const TableTennisHome = () => {
    return (
        <div>
            <Navigation />
            <TableTennisBanner />
            <Footer />
        </div>
    );
};

export default TableTennisHome;