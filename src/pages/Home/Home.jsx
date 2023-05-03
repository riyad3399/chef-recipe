import React from 'react';
import Banner from '../Banner/Banner';
import AllChef from '../AllChef/AllChef';
import FreshFood from '../FreshFood/FreshFood';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllChef></AllChef>
            <FreshFood></FreshFood>
        </div>
    );
};

export default Home;