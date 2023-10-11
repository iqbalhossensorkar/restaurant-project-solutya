import React from 'react';

const Reserved = () => {
    return (
        <div className='text-center mt-16 container w-11/12 mx-auto'>
            <p className='font-imperial text-orange-500 text-3xl'>Reservation</p>
            <p className='text-3xl font-bold mb-20'>Fell Happiness By Reservation</p>
            <div className="grid grid-cols-3 justify-center justify-items-center items-center">
                <img src="/public/reserve/kindpng_159381.png" className="max-w-xs" />
                <div>
                    <div className="card w-80 mb-10 text-center border py-10 cursor-pointer bg-black hover:border-none rounded-full hover:shadow-xl">
                        <div className="card-body text-center">
                            <p className='font-roboto font-bold text-2xl mb-5 text-white'>BOOK TABLE</p>
                            <div className=''>
                                <input type="text" placeholder="Type here" className="mb-3 input border-none bg-orange-300 text-black rounded-full w-full max-w-xs" />
                                <input type="email" placeholder="Type here" className="mb-3 input border-none bg-orange-300 text-black rounded-full w-full max-w-xs" />
                                <input type="text" placeholder="Type here" className="mb-3 input border-none bg-orange-300 text-black rounded-full w-full max-w-xs" />
                                <div className='flex gap-2 mb-3'>
                                    <input type="number" placeholder="Type here" className="input border-none bg-orange-300 text-black rounded-full w-full max-w-xs" />
                                    <input type="number" placeholder="Type here" className=" input border-none bg-orange-300 text-black rounded-full w-full max-w-xs" />
                                </div>
                                <div className='flex gap-2 mb-3'>
                                    <input type="date" placeholder="Date" className="input border-none bg-orange-300 text-black rounded-full w-full max-w-xs" />
                                    <input type="time" placeholder="Type here" className=" input border-none bg-orange-300 text-black rounded-full w-full max-w-xs" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/public/reserve/kindpng_20093.png" className="max-w-xs" />
            </div>
        </div>
    );
};

export default Reserved;