import React from 'react';


const Review = () => {
    return (
        <div className='text-center mt-16 container w-11/12 mx-auto'>
            <p className='font-imperial text-orange-500 text-3xl'>Testimonials</p>
            <p className='text-3xl font-bold mb-20'>Customer Review</p>
            <div className="grid grid-cols-3 justify-center items-center">
                <div>
                    <img src="/public/review/kindpng_129859.png" className="max-w-sm" />

                </div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full font-roboto">
                        <div className='text-center mb-16'>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src="/public/review/costomer.jpg" />
                                </div>
                                <div>
                                    <p className='text-orange-500 font-bold'>John thonson</p>
                                    <p>CEO & Co-Founder</p>
                                </div>
                            </div>
                            <p className='-mt-8'>Lorem ipsum dolor sit, amet temporibus magni quae necessitatibus possimus saepe, voluptas quaerat enim facere. Nulla nisi eaque quaerat?</p>
                        </div>
                        <div className="absolute flex bottom-0 left-1/3 justify-items-end justify-center transform gap-3">
                            <a href="#slide4" className="btn btn-circle bg-orange-500 text-white">❮</a>
                            <a href="#slide2" className="btn btn-circle btn-outline border-4 border-orange-500 text-orange-500">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='text-center mb-16'>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src="/public/review/costomer.jpg" />
                                </div>
                                <div>
                                    <p className='text-orange-500 font-bold'>John thonson</p>
                                    <p>CEO & Co-Founder</p>
                                </div>
                            </div>
                            <p className='-mt-8'>Lorem ipsum dolor sit, amet temporibus magni quae necessitatibus possimus saepe, voluptas quaerat enim facere. Nulla nisi eaque quaerat?</p>
                        </div>
                        <div className="absolute flex bottom-0 left-1/3 justify-items-end justify-center transform gap-3">
                            <a href="#slide1" className="btn btn-circle bg-orange-500 text-white">❮</a>
                            <a href="#slide3" className="btn btn-circle btn-outline border-4 border-orange-500 text-orange-500">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='text-center mb-16'>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src="/public/review/costomer.jpg" />
                                </div>
                                <div>
                                    <p className='text-orange-500 font-bold'>John thonson</p>
                                    <p>CEO & Co-Founder</p>
                                </div>
                            </div>
                            <p className='-mt-8'>Lorem ipsum dolor sit, amet temporibus magni quae necessitatibus possimus saepe, voluptas quaerat enim facere. Nulla nisi eaque quaerat?</p>
                        </div>
                        <div className="absolute flex bottom-0 left-1/3 justify-items-end justify-center transform gap-3">
                            <a href="#slide2" className="btn btn-circle bg-orange-500 text-white">❮</a>
                            <a href="#slide4" className="btn btn-circle btn-outline border-4 border-orange-500 text-orange-500">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='text-center mb-16'>
                            <div className="avatar">
                                <div className="w-10 h-10 rounded-full">
                                    <img src="/public/review/costomer.jpg" />
                                </div>
                                <div>
                                    <p className='text-orange-500 font-bold'>John thonson</p>
                                    <p>CEO & Co-Founder</p>
                                </div>
                            </div>
                            <p className='-mt-8'>Lorem ipsum dolor sit, amet temporibus magni quae necessitatibus possimus saepe, voluptas quaerat enim facere. Nulla nisi eaque quaerat?</p>
                        </div>
                        <div className="absolute flex bottom-0 left-1/3 justify-items-end justify-center transform gap-3">
                            <a href="#slide3" className="btn btn-circle bg-orange-500 text-white">❮</a>
                            <a href="#slide1" className="btn btn-circle btn-outline border-4 border-orange-500 text-orange-500">❯</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="/public/review/girl-burger.png" className="max-w-sm" />
                </div>
            </div>
        </div>
    );
};

export default Review;