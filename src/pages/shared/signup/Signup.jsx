import React from 'react';

import cover from '../../../assets/cover.jpg'
import pizza from '../../../assets/slider-images/pizza.png'
import c from '../../../assets/cover.jpg'
import d from '../../../assets/cover.jpg'
import { AiFillFacebook, AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div>
            <div className='container mx-auto text-center'>
                <div className="hero h-56" style={{
                    backgroundImage:
                        `url("${cover}")`
                }}>
                    <div className="hero-overlay bg-black bg-opacity-70"></div>
                    <div className="hero-content">
                        <div className="">
                            <h1 className='text-white text-5xl font-black font-roboto'>Signup</h1>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen mb-20" style={{
                    backgroundImage:
                        `url("${c}")`
                }}>
                    <div className="hero-overlay bg-black bg-opacity-80"></div>
                    <div className="hero-content">
                        <div className="">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-start items-center justify-between">
                                <div>
                                    <img src={pizza} className="h-96" />
                                </div>
                                <div className=''>
                                    <div className="hero h-auto" style={{
                                        backgroundImage:
                                            `url("${d}")`
                                    }}>
                                        <div className="hero-overlay bg-black bg-opacity-70"></div>
                                        <div className="hero-content">
                                            <div className='p-10 text-start font-roboto text-white font-bold'>
                                                <p className=''>Signup</p>
                                                <p className='mb-5'>Welcome Back</p>
                                                <input type="text" placeholder="Name" className=" input input-bordered border-orange-500 bg-transparent text-white font-normal  w-full max-w-xs" />
                                                <input type="email" placeholder="Name" className=" input input-bordered border-orange-500 bg-transparent text-white font-normal  w-full max-w-xs" />
                                                <input type="password" placeholder="Password" className="mb-3 input input-bordered border-orange-500 bg-transparent text-white font-normal  w-full max-w-xs" />
                                                <br />
                                                <button className='btn bg-orange-500 text-white border-none mt-2'>Book A Table</button>
                                                <p className='mt-5'>Continue With:</p>
                                                <div className='flex gap-5 items-start'>
                                                    <AiFillFacebook className='text-orange-500 h-6 w-6'></AiFillFacebook>
                                                    <AiFillGoogleCircle className='text-orange-500 h-6 w-6'></AiFillGoogleCircle>
                                                    <AiFillInstagram className='text-orange-500 h-6 w-6'></AiFillInstagram>
                                                </div>
                                            <p className='font-normal text-center text-xs mt-5'>Already have An Acoount? <Link to='/login'><span className='text-orange-500'>Login</span></Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;