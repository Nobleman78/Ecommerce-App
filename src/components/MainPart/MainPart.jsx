import './MainPart.css'
import sliderOne from '../../assets/Slider.png'
import sliderTwo from '../../assets/Slider-2.png'
import CatagorySlider from '../CatSlider/CatagorySlider';
import Banner from '../Banner/Banner';
import PopularProduct from '../PopularProducts/PopularProduct';
import BestProducts from '../DailyBestSellProducts/BestProducts';
import Deal from '../Deal/Deal';
import Headline from '../Headline/Headline';
import Newsletter from '../Newsletter/Newsletter';


const MainPart = () => {
    return (
        <div className='container-fluid mt-4 mb-3'>
            {/* Carousel Part Start */}
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={sliderOne} className="d-block rounded-img h-75 w-100" alt="..." />
                        <div className="caption d-none d-md-block ">
                            <h5 className='text'>Don&apos;t miss amazing grocery deals.</h5>
                            <p className='fs-3 my-4'>Sign Up for the daily newsletter</p>
                            <div className='d-flex '>
                                <input className='carosel-input my-4' type="text" placeholder='Enter your email' />
                                <button className='carosel-btn my-4' type='submit' tabIndex="-1">Subscribe</button>
                            </div>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={sliderTwo} className="d-block rounded-img w-100" alt="..." />
                        <div className="caption d-none d-md-block">
                            <h5 className='text'>Fresh Vegetables Big discount</h5>
                            <p className='fs-3 my-4'>Save Upto 50% on your first order</p>
                            <div className='d-flex '>
                                <input className='carosel-input my-4' type="text" placeholder='Enter your email' />
                                <button className='carosel-btn my-4' type='submit' tabIndex="-1">Subscribe</button>
                            </div>




                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Carousel Part End */}

            
            <CatagorySlider></CatagorySlider>
            <Banner></Banner>
            <PopularProduct></PopularProduct>
            <BestProducts></BestProducts>
            <Deal></Deal>
            <Headline></Headline>
            <Newsletter></Newsletter>


        </div>



    );
};

export default MainPart;