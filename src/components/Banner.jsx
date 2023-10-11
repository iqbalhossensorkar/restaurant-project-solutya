
import cover from '../assets/cover.jpg'
import Header from './Header';


const Banner = () => {
    return (
        <div className='container'>
            <div className="hero min-h-screen" style={{
                backgroundImage:
                    `url("${cover}")`
            }}>
                <div className="hero-overlay bg-black bg-opacity-90"></div>
                <div className="hero-content">
                    <div className="">
                        <Header></Header>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;