import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import salad from '../assets/salad.jpg'

const Experties = () => {
    const [cUp, setCUp] = useState(false);
    return (
        <div className='container my-20'>
            <div className="hero h-96" style={{
                backgroundImage:
                    `url("${salad}")`
            }}>
                <div className="hero-overlay bg-black bg-opacity-90"></div>
                <div className="w-10/12 mx-auto">
                    <ScrollTrigger onEnter={() => setCUp(true)} onExit={() => setCUp(false)}>
                        <div className="grid grid-cols-1 lg:grid-cols-4 justify-between place-items-center text-center">
                            <p className='text-white text-3xl font-bold font-roboto p-5 border-4 border-orange-500 rounded-full border-dashed'>{cUp && <CountUp start={0} end={10} duration={3} delay={0}></CountUp>} <br /><span className='text-base font-normal'>Restaurant</span></p>
                            <p className='text-white text-3xl font-bold font-roboto p-5 border-4 border-orange-500 rounded-full border-dashed'>{cUp && <CountUp start={0} end={12} duration={3} delay={0}></CountUp>}<br /><span className='text-base font-normal'>Restaurant</span></p>
                            <p className='text-white text-3xl font-bold font-roboto p-5 border-4 border-orange-500 rounded-full border-dashed'>{cUp && <CountUp start={0} end={50} duration={2} delay={0}></CountUp>}+ <br /><span className='text-base font-normal'>Restaurant</span></p>
                            <p className='text-white text-3xl font-bold font-roboto p-5 border-4 border-orange-500 rounded-full border-dashed'>{cUp && <CountUp start={0} end={200} duration={2} delay={0}></CountUp>}+ <br /><span className='text-base font-normal'>Restaurant</span></p>
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </div>
    );
};

export default Experties;