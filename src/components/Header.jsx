import React from 'react';

import { Fade, Slide } from 'react-awesome-reveal';

import pizza from '../assets/slider-images/pizza.png'
import cake from '../assets/slider-images/cheesecake.png'
import burger from '../assets/slider-images/burger.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Header = () => {
    return (
        <div className='container w-11/12 mx-auto mt-10'>
            <Swiper
                spaceBetween={40}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5">
                            <div className="text-center lg:text-left">
                                <Slide><p className='text-2xl mt-5 lg:text-5xl font-imperial text-orange-500'>Welcome To Foodi</p></Slide>
                                <Fade delay={1e3} cascade damping={1e-1}><p className=' font-roboto text-4xl lg:text-7xl font-black text-white'>We Deliver The Test Of Life</p> </Fade>
                                <Fade direction='down' delay={1e3}><p className='font-roboto mt-5 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium necessitatibus porro sapiente blanditiis. Beatae iusto officiis amet fugit id laboriosam.</p></Fade>
                                <Slide direction='up'><div className='flex justify-center lg:justify-start items-center gap-4 mt-10'>
                                    <button className=' bg-orange-500 btn border-none rounded-full font-roboto font-medium text-white'>Order Now</button>
                                    <button className='border-orange-500 text-orange-500 btn btn-outline rounded-full font-roboto font-medium'>Order Now</button>
                                </div></Slide>
                            </div>
                            <Slide direction='right'> <div>
                                <img src={burger} className="lg:h-[600px]" />
                            </div></Slide>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5">
                            <div className="text-center lg:text-left">
                                <Slide><p className='text-2xl mt-5 lg:text-5xl font-imperial text-orange-500'>Welcome To Foodi</p></Slide>
                                <Fade delay={1e3} cascade damping={1e-1}><p className=' font-roboto text-4xl lg:text-7xl font-black text-white'>We Deliver The Test Of Life</p> </Fade>
                                <Fade direction='down' delay={1e3}><p className='font-roboto mt-5 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium necessitatibus porro sapiente blanditiis. Beatae iusto officiis amet fugit id laboriosam.</p></Fade>
                                <Slide direction='up'><div className='flex justify-center lg:justify-start items-center gap-4 mt-10'>
                                    <button className=' bg-orange-500 btn border-none rounded-full font-roboto font-medium text-white'>Order Now</button>
                                    <button className='border-orange-500 text-orange-500 btn btn-outline rounded-full font-roboto font-medium'>Order Now</button>
                                </div></Slide>
                            </div>
                            <Slide direction='right'> <div>
                                <img src={pizza} className="lg:h-[600px]" />
                            </div></Slide>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5">
                            <div className="text-center lg:text-left">
                                <Slide><p className='text-2xl mt-5 lg:text-5xl font-imperial text-orange-500'>Welcome To Foodi</p></Slide>
                                <Fade delay={1e3} cascade damping={1e-1}><p className=' font-roboto text-4xl lg:text-7xl font-black text-white'>We Deliver The Test Of Life</p> </Fade>
                                <Fade direction='down' delay={1e3}><p className='font-roboto mt-5 text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium necessitatibus porro sapiente blanditiis. Beatae iusto officiis amet fugit id laboriosam.</p></Fade>
                                <Slide direction='up'><div className='flex justify-center lg:justify-start items-center gap-4 mt-10'>
                                    <button className=' bg-orange-500 btn border-none rounded-full font-roboto font-medium text-white'>Order Now</button>
                                    <button className='border-orange-500 text-orange-500 btn btn-outline rounded-full font-roboto font-medium'>Order Now</button>
                                </div></Slide>
                            </div>
                            <Slide direction='right'> <div>
                                <img src={cake} className="lg:h-[600px]" />
                            </div></Slide>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;