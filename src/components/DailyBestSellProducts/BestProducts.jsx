import greenLeaf from '../../assets/greenLeaf.png'
import { FaArrowRight } from "react-icons/fa";
import imageOne from '../../assets/best-deal-1.png'
import imageTwo from '../../assets/best-deal-2.png'
import imageThree from '../../assets/best-deal-3.png'
import imageFour from '../../assets/best-deal-4.png'
import imageFive from '../../assets/best-deal-5.png'
import imageSix from '../../assets/best-deal-6.png'
import './BestProducts.css'
import Slider from 'react-slick';
const BestProducts = () => {
        var settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
      

    };
    return (
        <div className="container-fluid my-4">
            <h2>Daily Best Sells</h2>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-3 position-relative ">
                    <img className='img-fluid position-relative h-auto best-deal-img' src={greenLeaf} alt="" />
                    <p className='position-absolute best-deal-title  w-50  fw-bold  text-justify ms-5   '>Bring nature into your home</p>
                    <button className='position-absolute btn btn-success border-none shadow-none best-deal-btn '>Shop Now< FaArrowRight className='ms-2'></FaArrowRight></button>
                </div>
                <div className='col-lg-9'>

                    <Slider {...settings} className='best-slider-main '>
                        <div className='best-item-1  '>
                            <div className='best-info-1 '>
                                <img className='best-item-img img-fluid' src={imageOne} alt="" />
                                <p className='best-catagory-name'>Cake </p>
                                <p>6 Items</p>

                            </div>

                        </div>
                        <div className='best-item-2 '>
                            <div className='best-info-2'>
                                <img className='best-item-img img-fluid' src={imageTwo} alt="" />
                                <p>Vegetables</p>
                                <p>6 Items</p>
                            </div>

                        </div>
                        <div className='best-item-3 '>
                            <div className='best-info-3'>
                                <img className='best-item-img img-fluid' src={imageSix} alt="" />
                                <p>Pet Toy</p>
                                <p>6 Items</p>
                            </div>

                        </div>
                        <div className='best-item-4 '>
                            <div className='best-info-4 '>
                                <img className='best-item-img img-fluid' src={imageThree} alt="" />
                                <p>Fast Food</p>
                                <p>6 Items</p>
                            </div>

                        </div>
                        <div className='best-item-5 '>
                            <div className='best-info-5'>
                                <img className='best-item-img img-fluid' src={imageFour} alt="" />
                                <p>Dairies</p>
                                <p>6 Items</p>
                            </div>

                        </div>
                        <div className='best-item-6 '>
                            <div className='best-info-6'>
                                <img className='best-item-img img-fluid' src={imageFive} alt="" />
                                <p>Meat </p>
                                <p>6 Items</p>
                            </div>

                        </div>

                    </Slider>



                </div>
            </div>
        </div>
    );
};

export default BestProducts;