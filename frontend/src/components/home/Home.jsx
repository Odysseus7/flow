import React from 'react';
import Cards from './Cards/Cards';
import Intro from './Intro';

const Home = () => {
    return (
        <div className="main">
            <Intro />
            <div className="cards__container">
                <Cards />
            </div>
        </div>
    );
};

export default Home;