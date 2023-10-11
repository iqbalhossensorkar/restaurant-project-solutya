import React from 'react';

const Chooses = () => {
    return (
        <div className='text-center mt-16 container w-11/12 mx-auto'>
            <p className='font-imperial text-orange-500 text-3xl'>The Reason Why</p>
            <p className='text-3xl font-bold mb-20'>Why People Choose Us</p>
            <div className='flex justify-between'>
                <img src="/src/assets/icons/icons.svg" alt="" className='h-10' />
                <img src="/src/assets/icons/icons2.svg" alt="" className='h-10' />
            </div>
            <div className='w-10/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 g-5'>
                    <div className="card w-80 mb-10 text-center border py-10 border-gray-400 cursor-pointer hover:border-none rounded-full hover:shadow-xl">
                        <div className="card-body text-center">
                            <figure><img src="/src/assets/rice.svg" alt="food" className='p-1 bg-orange-500 rounded-full h-14 m-5' /></figure>
                            <p className='font-roboto font-bold text-2xl'>Qualityful Food</p>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card w-80 mb-10 text-center border py-10 border-gray-400 cursor-pointer hover:border-none rounded-full hover:shadow-xl">
                        <div className="card-body text-center">
                            <figure><img src="/src/assets/rice.svg" alt="food" className='p-1 bg-orange-500 rounded-full h-14 m-5' /></figure>
                            <p className='font-roboto font-bold text-2xl'>Qualityful Food</p>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card w-80 mb-10 text-center border py-10 border-gray-400 cursor-pointer hover:border-none rounded-full hover:shadow-xl">
                        <div className="card-body text-center">
                            <figure><img src="/src/assets/rice.svg" alt="food" className='p-1 bg-orange-500 rounded-full h-14 m-5' /></figure>
                            <p className='font-roboto font-bold text-2xl'>Qualityful Food</p>
                            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <img src="/src/assets/icons/icons3.svg" alt="" className='h-10' />
                <img src="/src/assets/icons/icons4.svg" alt="" className='h-10' />
            </div>
        </div>
    );
};

export default Chooses;