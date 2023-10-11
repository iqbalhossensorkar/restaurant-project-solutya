import React from 'react';
import pizza from '../../assets/slider-images/pizza.png'
import cover from '../../assets/cover.jpg'


const Form = () => {
    return (
        <div className='text-center mt-16 mb-20'>
            <p className='text-3xl font-bold'>Book A Table</p>
            <p className='font-imperial text-orange-500 text-3xl mb-20'>Make Your Reservation</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-center justify-between items-center justify-items-end">
                <div>
                    <img src={pizza} className="lg:h-[600px]" />
                </div>
                <div>
                    <p className='font-roboto font-bold '>Reservation Form</p>
                    <div className="hero h-auto" style={{
                        backgroundImage:
                            `url("${cover}")`
                    }}>
                        <div className="hero-overlay bg-black bg-opacity-70 "></div>
                        <div className="hero-content">
                            <div className='p-10'>
                                <input type="text" placeholder="Type here" className="mb-3 input input-bordered border-orange-500 bg-transparent text-black  w-full max-w-xs" />
                                <input type="email" placeholder="Type here" className="mb-3 input input-bordered border-orange-500 bg-transparent text-black  w-full max-w-xs" />
                                <input type="text" placeholder="Type here" className="mb-3 input input-bordered border-orange-500 bg-transparent text-black  w-full max-w-xs" />
                                <div className='flex gap-2 mb-3'>
                                    <input type="number" placeholder="Type here" className="input input-bordered border-orange-500 bg-transparent text-black  w-full max-w-xs" />
                                    <input type="number" placeholder="Type here" className=" input input-bordered border-orange-500 bg-transparent text-black  w-full max-w-xs" />
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <input type="date" placeholder="Date" className="input input-bordered border-orange-500 bg-transparent text-black  w-full max-w-xs" />
                                    <input type="time" placeholder="Type here" className=" input input-bordered border-orange-500 bg-transparent text-black  w-full max-w-xs" />
                                </div>
                                    <button className='btn bg-orange-500 text-white border-none mt-5'>Book A Table</button>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/public/reserve/kindpng_20093.png" className="max-w-xs" />
            </div>
        </div>
    );
};

export default Form;