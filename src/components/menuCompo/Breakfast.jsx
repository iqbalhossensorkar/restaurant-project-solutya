
import cover from '../../assets/cover.jpg'
import food from '../../assets/food.png'


const Breakfast = () => {
    return (
        <div className='container'>
            <div className="hero min-h-screen" style={{
                backgroundImage:
                    `url("${cover}")`
            }}>
                <div className="hero-overlay bg-black bg-opacity-90"></div>
                <div className="hero-content">
                    <div className="">
                        <p className='font-roboto text-2xl text-orange-500 font-bold mt-20 mb-10'>Breakfast</p>

                        <div className='grid grid-cols-1 lg:grid-cols-4 g-5 mb-10'>
                            <div>
                                <div className="card w-72 mr-5 mb-10 text-center bg-white rounded-full shadow-xl">
                                    <figure><img src={food} alt="food" className='' /></figure>
                                    <div className="card-body">
                                        <p className='font-roboto font-bold text-white'>Salmon With Vegetable Salad</p>
                                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p className='text-orange-500 font-roboto font-bold'>$325</p>
                                        <div className="rating justify-center">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                        </div><br />
                                        <div className='text-center'>
                                            <button className=' bg-orange-500 btn w-1/2 border-none rounded-full font-roboto font-medium text-white'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-72 mr-5 mb-10 text-center bg-white rounded-full shadow-xl">
                                    <figure><img src={food} alt="food" className='' /></figure>
                                    <div className="card-body">
                                        <p className='font-roboto font-bold text-white'>Salmon With Vegetable Salad</p>
                                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p className='text-orange-500 font-roboto font-bold'>$325</p>
                                        <div className="rating justify-center">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                        </div><br />
                                        <div className='text-center'>
                                            <button className=' bg-orange-500 btn w-1/2 border-none rounded-full font-roboto font-medium text-white'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-72 mr-5 mb-10 text-center bg-white rounded-full shadow-xl">
                                    <figure><img src={food} alt="food" className='' /></figure>
                                    <div className="card-body">
                                        <p className='font-roboto font-bold text-white'>Salmon With Vegetable Salad</p>
                                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p className='text-orange-500 font-roboto font-bold'>$325</p>
                                        <div className="rating justify-center">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                        </div><br />
                                        <div className='text-center'>
                                            <button className=' bg-orange-500 btn w-1/2 border-none rounded-full font-roboto font-medium text-white'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-72 mr-5 mb-10 text-center bg-white rounded-full shadow-xl">
                                    <figure><img src={food} alt="food" className='' /></figure>
                                    <div className="card-body">
                                        <p className='font-roboto font-bold text-white'>Salmon With Vegetable Salad</p>
                                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p className='text-orange-500 font-roboto font-bold'>$325</p>
                                        <div className="rating justify-center">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                        </div><br />
                                        <div className='text-center'>
                                            <button className=' bg-orange-500 btn w-1/2 border-none rounded-full font-roboto font-medium text-white'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-72 mr-5 mb-10 text-center bg-white rounded-full shadow-xl">
                                    <figure><img src={food} alt="food" className='' /></figure>
                                    <div className="card-body">
                                        <p className='font-roboto font-bold text-white'>Salmon With Vegetable Salad</p>
                                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p className='text-orange-500 font-roboto font-bold'>$325</p>
                                        <div className="rating justify-center">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                        </div><br />
                                        <div className='text-center'>
                                            <button className=' bg-orange-500 btn w-1/2 border-none rounded-full font-roboto font-medium text-white'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-72 mr-5 mb-10 text-center bg-white rounded-full shadow-xl">
                                    <figure><img src={food} alt="food" className='' /></figure>
                                    <div className="card-body">
                                        <p className='font-roboto font-bold text-white'>Salmon With Vegetable Salad</p>
                                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p className='text-orange-500 font-roboto font-bold'>$325</p>
                                        <div className="rating justify-center">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                        </div><br />
                                        <div className='text-center'>
                                            <button className=' bg-orange-500 btn w-1/2 border-none rounded-full font-roboto font-medium text-white'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-72 mr-5 mb-10 text-center bg-white rounded-full shadow-xl">
                                    <figure><img src={food} alt="food" className='' /></figure>
                                    <div className="card-body">
                                        <p className='font-roboto font-bold text-white'>Salmon With Vegetable Salad</p>
                                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p className='text-orange-500 font-roboto font-bold'>$325</p>
                                        <div className="rating justify-center">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                        </div><br />
                                        <div className='text-center'>
                                            <button className=' bg-orange-500 btn w-1/2 border-none rounded-full font-roboto font-medium text-white'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card w-72 mr-5 mb-10 text-center bg-white rounded-full shadow-xl">
                                    <figure><img src={food} alt="food" className='' /></figure>
                                    <div className="card-body">
                                        <p className='font-roboto font-bold text-white'>Salmon With Vegetable Salad</p>
                                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p className='text-orange-500 font-roboto font-bold'>$325</p>
                                        <div className="rating justify-center">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" checked />
                                        </div><br />
                                        <div className='text-center'>
                                            <button className=' bg-orange-500 btn w-1/2 border-none rounded-full font-roboto font-medium text-white'>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mb-20'>
                            <button className=' bg-orange-500 btn btn-md border-none rounded-full font-roboto font-medium text-white'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' grid justify-items-center'>
            <div className="divider bg-orange-500 h-[1px] w-96"></div>
            </div>
        </div>
    );
};

export default Breakfast;