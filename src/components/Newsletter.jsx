import React from 'react';
import salad from '../assets/salad.jpg'

const Newsletter = () => {
    return (
        <div>
            <div className='text-center mt-16 container relative'>
                <p className='font-imperial text-orange-500 text-3xl'>Reservation</p>
                <p className='text-3xl font-bold mb-20'>Fell Happiness By Reservation</p>
                <div className="hero h-96 " style={{
                    backgroundImage:
                        `url("${salad}")`
                }}>
                    <div className="hero-overlay bg-opacity-90" ></div>
                </div>
                <div className="w-11/12 mx-auto">
                    <div className='absolute bottom-0 flex items-center text-left font-roboto text-white'>
                        <img src="/src/assets/slider-images/burger.png" alt="" className='max-w-sm' />
                        <div>
                            <h1 className='font-black text-5xl mb-5 ml-24'>Subscribe to our Newsletter</h1>
                            <p className='ml-24 mr-20 mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis dolorum quae, accusantium ab officia voluptates, aliquid aliquam praesentium sapiente dolores voluptatibus, possimus error corporis repudiandae dolor debitis quas odit necessitatibus?</p>
                           <div className='flex items-center'>
                           <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl rounded-s-full ml-24" />
                            <button className='btn rounded-e-full bg-orange-500 border-none text-white'>Subscribe</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;