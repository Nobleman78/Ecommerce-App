import React from 'react';
import './Headline.css'
import topOne from '../../assets/top-1.jpg'
import topTwo from '../../assets/top-2.jpg'
import topThree from '../../assets/top-3.jpg'
import topFour from '../../assets/top-4.jpg'
import topFive from '../../assets/top-5.jpg'
import topSix from '../../assets/top-6.jpg'
import topSeven from '../../assets/top-7.jpg'
import topEight from '../../assets/top-8.jpg'
import topNine from '../../assets/top-9.jpg'

const Headline = () => {
    return (
        <div className='container-fluid  '>
            <div className='row mt-5'>
                <div className='col-12 col-md-6 col-lg-3 mt-5 '>
                    <p className='fw-bold fs-4'>Top Selling</p>
                    <hr />
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topOne} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topTwo} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topThree} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <img className='top-one-img' src={topFour} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>

                </div>
                <div className='col-12 col-md-6 mt-5 col-lg-3'>
                    <p className='fs-4 fw-bold'>Trending Products</p>
                    <hr />
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topOne} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topTwo} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topThree} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <img className='top-one-img' src={topFour} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    

                </div>
                <div className='col-12 col-md-6 mt-5 col-lg-3'>
                    <p className='fs-4 fw-bold'>Recently Added</p>
                    <hr />
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topOne} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topTwo} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topThree} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <img className='top-one-img' src={topFour} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>

                </div>
                <div className='col-12 col-md-6 mt-5 col-lg-3'>
                    <p className='fs-4 fw-bold'>Top Rated</p>
                    <hr />
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topOne} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topTwo} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3 mb-4'>
                        <img className='top-one-img' src={topThree} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>
                    <div className='d-flex gap-3'>
                        <img className='top-one-img' src={topFour} alt="" />
                        <div>
                            <p>Organic Foods are Good.</p>
                            <span></span>
                            <p>$1000</p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Headline;