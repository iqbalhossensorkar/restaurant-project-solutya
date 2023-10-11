import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiMenu, FiSearch } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='container m-0'>
            <div className="navbar fixed z-10 bg-opacity-20 bg-black">
                <div className="navbar-start">
                    <Link className='flex justify-center items-center font-roboto font-bold lg:text-3xl text-white border-none' to="/"><span><img src="/public/utensils.svg" alt="" className='h-4 lg:h-8' /> </span> Foodi</Link>
                </div>
                <div className="navbar-center hidden lg:flex text-white">
                    <ul className="menu-horizontal gap-6 px-1">
                        <li><Link className='focus:underline underline-offset-8 focus:text-orange-600 font-roboto' to="/">Home</Link></li>
                        <li><Link className='focus:underline underline-offset-8 focus:text-orange-600 font-roboto flex justify-center items-center gap-1' to="/menu">Menu<FiChevronDown></FiChevronDown></Link></li>
                        <li><Link className='focus:underline underline-offset-8 focus:text-orange-600 font-roboto' to="/reservation">Reservation</Link></li>
                        <li><Link className='focus:underline underline-offset-8 focus:text-orange-600 font-roboto flex justify-center items-center gap-1' to="/service">Service<FiChevronDown></FiChevronDown></Link></li>
                        <li><Link className='focus:underline underline-offset-8 focus:text-orange-600 font-roboto flex justify-center items-center gap-1' to="/gallery">Gallery<FiChevronDown></FiChevronDown></Link></li>
                        <li><Link className='focus:underline underline-offset-8 focus:text-orange-600 font-roboto' to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className="form-control">
                        <div className='relative'>
                            <input type="text" className="input input-xs lg:input-md text-white bg-transparent input-bordered border-2 border-orange-500 rounded-full" />
                            <FiSearch color='#FE5F01' className='absolute top-1.5 right-1.5 lg:top-3 lg:right-4 h-4 w-4 lg:h-6 lg:w-6'></FiSearch>
                        </div>
                    </div>
                    <div>
                        <label className="btn bg-orange-500 border-none btn-square">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item text-orange-500">2</span>
                            </div>
                        </label>
                    </div>
                    <Link to='/login'><button className='btn rounded-full hidden lg:block text-white border-none bg-orange-500 px-4 font-roboto pr-3'>Login</button></Link>
                    <div className='lg:hidden'>
                        <div className="dropdown dropdown-left">
                            <label tabIndex={0} className="btn btn-ghost bg-orange-500 lg:hidden">
                            <FiMenu className='text-white h-5 w-5'></FiMenu>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li>
                                    <a>Parent</a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
                                </li>
                                <li><a>Item 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;