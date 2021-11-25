import React from 'react';
import Cards from './Cards/Cards';
import Intro from './Intro';

const Home = () => {
    return (
        <section className="main">
            <Intro />
            <main className="cards__container">
                <Cards />
            </main>
        </section>
    );
};

export default Home;