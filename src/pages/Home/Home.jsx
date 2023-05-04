import React from 'react';
import Banner from '../Banner/Banner';
import AllChef from '../AllChef/AllChef';
import FreshFood from '../FreshFood/FreshFood';
import LatestRecipes from '../LatestRecipes/LatestRecipes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllChef></AllChef>
            <FreshFood></FreshFood>
            <LatestRecipes></LatestRecipes>
        </div>
    );
};

export default Home;