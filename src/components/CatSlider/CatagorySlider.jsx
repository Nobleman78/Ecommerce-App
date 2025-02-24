import React from 'react';
import './CatagorySlider.css'
import imageOne from '../../assets/image-1.png'
import imageTwo from '../../assets/image-2.png'
import imageThree from '../../assets/image-3.png'
import imageFour from '../../assets/image-4.png'
import imageFive from '../../assets/image-5.png'
import imageSix from '../../assets/image-6.png'
import imageSeven from '../../assets/image-7.png'
import imageEight from '../../assets/image-8.png'

import Slider from 'react-slick';

const CatagorySlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };




    return (
        <div className='cat-slider-section'>
            <div className='container-fluid'>
                <h2 className='mb-4'>Top Catagories</h2>

                <Slider {...settings} className='cat-slider-main'>

                    <div className='item-1 '>
                        <div className='info-1 '>
                            <img className='item-img' src={imageOne} alt="" />
                            <p className='catagory-name'>Cake </p>
                            <p>6 Items</p>
                        
                        </div>

                    </div>
                    <div className='item-2 '>
                        <div className='info-2'>
                            <img className='item-img' src={imageOne} alt="" />
                            <p>Vegetables</p>
                            <p>6 Items</p>
                        </div>

                    </div>
                    <div className='item-3 '>
                        <div className='info-3'>
                            <img className='item-img' src={imageTwo} alt="" />
                            <p>Pet Toy</p>
                            <p>6 Items</p>
                        </div>

                    </div>
                    <div className='item-4 '>
                        <div className='info-4 '>
                            <img className='item-img' src={imageThree} alt="" />
                            <p>Fast Food</p>
                            <p>6 Items</p>
                        </div>

                    </div>
                    <div className='item-5 '>
                        <div className='info-5'>
                            <img className='item-img' src={imageFour} alt="" />
                            <p>Dairies</p>
                            <p>6 Items</p>
                        </div>

                    </div>
                    <div className='item-6 '>
                        <div className='info-6'>
                            <img className='item-img' src={imageFive} alt="" />
                            <p>Meat </p>
                            <p>6 Items</p>
                        </div>

                    </div>
                    <div className='item-7 '>
                        <div className='info-7'>
                            <img className='item-img' src={imageSix} alt="" />
                            <p>Fish</p>
                            <p>6 Items</p>
                        </div>

                    </div>
                    <div className='item-8 '>
                        <div className='info-8'>
                            <img className='item-img' src={imageSeven} alt="" />
                            <p>Electronics</p>
                            <p>6 Items</p>
                        </div>

                    </div>
                    <div className='item-9 '>
                        <div className='info-9'>
                            <img className='item-img' src={imageSeven} alt="" />
                            <p>Fruits</p>
                            <p>6 Items</p>
                        </div>

                    </div>
                    <div className='item-10 '>
                        <div className='info-10'>
                            <img className='item-img' src={imageSeven} alt="" />
                            <p>Wines</p>
                            <p>6 Items</p>
                        </div>

                    </div>

                </Slider>

            </div>


        </div>
    );
};

export default CatagorySlider;