import React from 'react';
import Banner from '../components/Banner';
import Special from '../components/Special';
import Popular from '../components/Popular';
import Chooses from '../components/Chooses';
import Experties from '../components/Experties';
import Review from '../components/Review.JSX';
import Reserved from '../components/Reserved';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div>
            <div className=''>
            <Banner></Banner>
            <Special></Special>
            <Popular></Popular>
            <Chooses></Chooses>
            <Experties></Experties>
            <Review></Review>
            <Reserved></Reserved>
            <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;