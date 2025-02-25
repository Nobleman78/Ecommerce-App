import itemOne from '../../assets/item-1.jpg'
import itemTwo from '../../assets/item-2.jpg'
import itemThree from '../../assets/item-3.jpg'
import itemFour from '../../assets/item-4.jpg'
import itemFive from '../../assets/item-5.jpg'
import itemSix from '../../assets/item-6.jpg'
import itemSeven from '../../assets/item-7.jpg'
import itemEight from '../../assets/item-8.jpg'

import './PopularProduct.css'
const PopularProduct = () => {
    return (
        <div className="container-fluid mt-4">
            <h2>Popular Products</h2>
            <div className="row ">
                <div className="col-12 col-md-6 col-lg-3 my-5 ">
                    <div className="popular-products ">
                        <img className='img-fluid' src={itemOne} alt="" />
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <span></span>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold fs-6 text-success' >$638.00</p>
                            <button className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-5 ">
                    <div className="popular-products ">
                        <img className='img-fluid' src={itemTwo} alt="" />
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <span></span>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-5 ">
                    <div className="popular-products ">
                        <img className='img-fluid' src={itemThree} alt="" />
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <span></span>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-5 ">
                    <div className="popular-products ">
                        <img className='img-fluid' src={itemFour} alt="" />
                        <p className='fw-light'>  Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <span></span>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    <div className="popular-products ">
                        <img className='img-fluid' src={itemFive} alt="" />
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <span></span>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="popular-products ">
                        <img className='img-fluid' src={itemSix} alt="" />
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <span></span>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="popular-products ">
                        <img className='img-fluid' src={itemSeven} alt="" />
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <span></span>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="popular-products ">
                        <img className='img-fluid' src={itemEight} alt="" />
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <span></span>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success'>Add to cart</button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default PopularProduct;