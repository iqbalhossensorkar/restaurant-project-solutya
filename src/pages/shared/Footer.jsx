import React from 'react';
import { FiArrowRight, FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="footer p-10 w-11/12 mx-auto text-white">
                <aside>
                    <img src="/public/utensils.svg" alt="" className='h-10 w-10' />
                    <p>Foodi<br />Providing reliable tech since 1992</p>
                    <div className='grid grid-cols-4 gap-5 mt-5'>
                        <FiInstagram className='text-orange-500'></FiInstagram>
                        <FiFacebook className='text-orange-500'></FiFacebook>
                        <FiLinkedin className='text-orange-500'></FiLinkedin>
                        <FiTwitter className='text-orange-500'></FiTwitter>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <div className='flex items-center'>
                           <input type="text" placeholder="Type here" className="input input-sm max-w-xs rounded-s-full" />
                            <button className='btn rounded-e-full btn-sm bg-orange-500 border-none text-white'><FiArrowRight></FiArrowRight></button>
                           </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;