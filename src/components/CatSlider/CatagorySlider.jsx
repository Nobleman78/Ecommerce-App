import React from 'react';
import './CatagorySlider.css'

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
                <h2>Top Catagories</h2>

                <Slider {...settings} className='cat-slider-main'>

                    <div className='item'>
                        <img src="" alt="" />
                        <p>Cake and Milk</p>

                    </div>
                    <div className='item'>
                        <img src="" alt="" />
                        <p>Coffe</p>

                    </div>
                    <div className='item'>
                        <img src="" alt="" />
                        <p>Clothing</p>

                    </div>
                    <div className='item'>
                        <img src="" alt="" />
                        <p>Pet Toy</p>

                    </div>
                    <div className='item'>
                       <img src="" alt="" />
                       <p>Wines and Drinks</p>

                    </div>
                    <div className='item'>
                        <img src="" alt="" />
                        <p>Baking Material</p>

                    </div>
                    <div className='item'>
                        <img src="" alt="" />
                        <p>Fast Food</p>

                    </div>
                    <div className='item'>
                        <img src="" alt="" />
                        <p>Vegetables</p>

                    </div>
                    <div className='item'>
                        <img src="" alt="" />
                        <p>Fruits</p>

                    </div>
                    <div className='item'>
                        <img src="" alt="" />
                        <p>Someting</p>

                    </div>
        
                </Slider>

            </div>

        </div>
    );
};

export default CatagorySlider;