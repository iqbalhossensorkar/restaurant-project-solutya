import React from 'react';

import cover from '../assets/cover.jpg'
import Book from '../components/resevationCompo/Book';
import Form from '../components/resevationCompo/Form';
const Reservation = () => {
    return (
        <div>
            <div className='container mx-auto text-center'>
                <div className="hero h-96" style={{
                    backgroundImage:
                        `url("${cover}")`
                }}>
                    <div className="hero-overlay bg-black bg-opacity-70"></div>
                    <div className="hero-content">
                        <div className="">
                            <h1 className='text-white text-5xl font-black font-roboto'>Reservation</h1>
                            <h1 className='text-orange-500 text-5xl  font-imperial'>Come & Join</h1>
                        </div>
                    </div>
                </div>
                <Book></Book>
                <Form></Form>
            </div>
        </div>
    );
};

export default Reservation;