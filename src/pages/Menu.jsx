
import cover from '../assets/cover.jpg'
import Breakfast from '../components/menuCompo/Breakfast';
import Dessert from '../components/menuCompo/Dessert';
import Dinner from '../components/menuCompo/Dinner';
import Lunch from '../components/menuCompo/Lunch';
import Others from '../components/menuCompo/Others';


const Menu = () => {
    return (
        <div className='container mx-auto text-center'>
            <div className="hero h-96" style={{
                backgroundImage:
                    `url("${cover}")`
            }}>
                <div className="hero-overlay bg-black bg-opacity-90"></div>
                <div className="hero-content">
                    <div className="">
                        <h1 className='text-white text-5xl font-black font-roboto'>Our Menu</h1>
                        <h1 className='text-orange-500 text-5xl  font-imperial'>Fresh & Delicious</h1>
                    </div>
                </div>
            </div>
            <div className="tabs justify-center font-roboto font-bold mt-24 mb-8">
                <a className="tab text-orange-500">ALL</a>
                <a className="tab active:text-orange-500">BREAKFAST</a>
                <a className="tab active:text-orange-500">LUNCH</a>
                <a className="tab active:text-orange-500">DINNER</a>
                <a className="tab active:text-orange-500">DESSERT</a>
                <a className="tab active:text-orange-500">OTHERS</a>
            </div>
            <Breakfast></Breakfast>
            <Lunch></Lunch>
            <Dinner></Dinner>
            <Dessert></Dessert>
            <Others></Others>
        </div>
    );
};

export default Menu;