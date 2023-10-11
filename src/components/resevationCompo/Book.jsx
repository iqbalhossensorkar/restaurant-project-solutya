import React from 'react';
import {  AiOutlineCheckSquare, AiOutlinePhone } from "react-icons/ai";
import f from "../../assets/slider-images/icons/chinesse.svg";
import g from "../../assets/slider-images/icons/korean.svg";

const Book = () => {
    return (
        <div className='container w-10/12 mx-auto font-roboto text-left'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center mt-32 mb-20">
                <div>
                    <AiOutlinePhone className='text-orange-500 h-12 w-12'></AiOutlinePhone>
                    <p className='font-bold text-2xl mt-8'>Book A Table Via Phone</p>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui accusamus modi optio accusantium quidem laudantium eligendi, praesentium minima reiciendis.</p>
                    <p className='text-xl font-bold mt-5'>Cell:  +001133556222</p>
                </div>
                <img src={f} alt="" className='max-w-sm'/>

                <img src={g} alt="" className='max-w-sm'/>
                <div>
                    <AiOutlineCheckSquare className='text-orange-500 h-12 w-12'></AiOutlineCheckSquare>
                    <p className='font-bold text-2xl mt-8'>Book A Table Via Phone</p>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui accusamus modi optio accusantium quidem laudantium eligendi, praesentium minima reiciendis.</p>
                </div>
            </div>
        </div>
    );
};

export default Book;