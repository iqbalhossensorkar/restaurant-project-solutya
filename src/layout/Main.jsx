import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <div className=''>
            <div className=''>
                <Navbar></Navbar>
            </div>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;