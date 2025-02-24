import bannerImageOne from '../../assets/1.png'
import bannerImageTwo from '../../assets/2.png'
import bannerImageThree from '../../assets/3.png'
import './Banner.css'


const Banner = () => {
    return (
        <div className="banner-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className='box '>
                            <img src={bannerImageOne} className='w-100 ' alt="" />
                            <div className='banner-one-info'>
                                <p>Everday Fresh and Clean Our Products.</p>
                                <button>Shop Now</button>
                            </div>

                        </div>

                    </div>
                    <div className="col">
                        <div className='box '>
                            <img src={bannerImageTwo} className='w-100' alt="" />
                            <div className='banner-two-info'>
                                <p>Make Your Breakfast Healthy and Easy.</p>
                                <button>Shop Now</button>
                            </div>

                        </div>

                    </div>
                    <div className="col">
                        <div className='box '>
                            <img src={bannerImageThree} className='w-100' alt="" />
                            <div className='banner-three-info'>
                                <p>The best organic Product Online.</p>
                                <button>Shop Now</button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Banner;