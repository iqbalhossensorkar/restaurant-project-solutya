import React from 'react';

const Special = () => {
    return (
        <div className='text-center mt-16 mb-20 w-11/12 mx-auto'>
            <p className='font-imperial text-orange-500 text-3xl'>Discover</p>
            <p className='text-3xl font-bold mb-10'>Our Special Cuisine</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='bg-black p-5 gap-3 rounded-full flex justify-start items-start'>
                    <img src="/src/assets/slider-images/icons/chinesse.svg" alt="" className='h-8 w-8' />
                    <div className='text-left'>
                        <p className='text-orange-500 font-bold font-roboto'>Korean Food</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias recusandae tenetur ipsa sit. Nostrum suscipit .</p>
                    </div>
                </div>
                <div className='bg-black p-5 gap-3 rounded-full flex justify-start items-start'>
                    <img src="/src/assets/slider-images/icons/korean.svg" alt="" className='h-8 w-8' />
                    <div className='text-left'>
                        <p className='text-orange-500 font-bold font-roboto'>Western Food</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias recusandae tenetur ipsa sit. Nostrum suscipit .</p>
                    </div>
                </div>
                <div className='bg-black p-5 gap-3 rounded-full flex justify-start items-start'>
                    <img src="/src/assets/slider-images/icons/western.svg" alt="" className='h-8 w-8' />
                    <div className='text-left'>
                        <p className='text-orange-500 font-bold font-roboto'>Chineese Food</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias recusandae tenetur ipsa sit. Nostrum suscipit .</p>
                    </div>
                </div>
                <div className='bg-black p-5 gap-3 rounded-full flex justify-start items-start'>
                    <img src="/src/assets/slider-images/icons/middleeast.svg" alt="" className='h-8 w-8' />
                    <div className='text-left'>
                        <p className='text-orange-500 font-bold font-roboto'>Middle-East Food</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis alias recusandae tenetur ipsa sit. Nostrum suscipit .</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Special;