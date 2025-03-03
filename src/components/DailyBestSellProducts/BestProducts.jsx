import greenLeaf from '../../assets/greenLeaf.png'
import { FaArrowRight } from "react-icons/fa";
import imageOne from '../../assets/best-deal-1.png'
import imageTwo from '../../assets/best-deal-2.png'
import imageThree from '../../assets/best-deal-3.png'
import imageFour from '../../assets/best-deal-4.png'
import imageFive from '../../assets/best-deal-5.png'
import imageSix from '../../assets/best-deal-6.png'
import { GrCart } from "react-icons/gr";
import { Rating } from "@mui/material";
import { GrFormView } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
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
                            <div className='position-relative'>
                                <img className='best-item-img img-fluid' src={imageOne} alt="" />
                                <div className='overlay'>
                                    <ul className='list list-inline mb-0 border border-success  pt-1'>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Quick View" placement="top">
                                                <a className='ms-2'>
                                                    <GrFormView className='fs-4 '></GrFormView>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor   '>
                                            <Tooltip title="Add to the Wishlist" placement='top'>
                                                <a className=''>
                                                    <CiHeart className='fs-4'></CiHeart>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Compare Item" placement='top'>
                                                <a className=''>
                                                    <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                                </a>
                                            </Tooltip>
                                        </li>
                                    </ul>
                                </div>
                                <p className=''>Vegetables </p>
                                <p>Creamy Garlic Parmesan Pasta Perfection</p>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                                <div className=' d-flex justify-content-between'>
                                    <p className='fw-bold fs-6 text-success' >$638.00</p>
                                    <p className='fw-bold text-muted text-decoration-line-through'>$717</p>
                                </div>
                              
                            </div>
                            <button className='btn btn-success w-100 mx-auto shadow-none '> <GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                        {/* Item One Part End */}



                        {/* Item Part Two Start */}
                        <div className='best-item-2 '>
                            <div className='position-relative'>
                                <img className='best-item-img img-fluid' src={imageTwo} alt="" />
                                <div className='overlay'>
                                    <ul className='list list-inline mb-0 border border-success  pt-1'>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Quick View" placement="top">
                                                <a className='ms-2'>
                                                    <GrFormView className='fs-4 '></GrFormView>
                                                </a>
                                            </Tooltip>

                                        </li>
                                        <li className='list-inline-item cursor   '>
                                            <Tooltip title="Add to the Wishlist" placement='top'>
                                                <a className=''>
                                                    <CiHeart className='fs-4'></CiHeart>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Compare Item" placement='top'>
                                                <a className=''>
                                                    <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                                </a>
                                            </Tooltip>
                                        </li>

                                    </ul>

                                </div>
                                <p>Fruits</p>
                                <p>Homemade Salted Caramel Apple Pie</p>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                                <div className=' d-flex justify-content-between'>
                                    <p className='fw-bold fs-6 text-success' >$638.00</p>
                                    <p className='fw-bold text-muted text-decoration-line-through'>$717</p>
                                </div>
                              
                            </div>
                            <button className='btn btn-success w-100 mx-auto shadow-none '> <GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                        {/* Item Part Two End  */}

                        {/* Item Part Three Start */}
                        <div className='best-item-3 '>
                            <div className='position-relative'>
                                <img className='best-item-img img-fluid' src={imageSix} alt="" />
                                <div className='overlay'>
                                    <ul className='list list-inline mb-0 border border-success  pt-1'>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Quick View" placement="top">
                                                <a className='ms-2'>
                                                    <GrFormView className='fs-4 '></GrFormView>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor   '>
                                            <Tooltip title="Add to the Wishlist" placement='top'>
                                                <a className=''>
                                                    <CiHeart className='fs-4'></CiHeart>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Compare Item" placement='top'>
                                                <a className=''>
                                                    <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                                </a>
                                            </Tooltip>
                                        </li>
                                    </ul>
                                </div>
                                <p>Pet Toy</p>
                                <p>Decadent Triple Chocolate Fudge Brownies</p>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                                <div className=' d-flex justify-content-between'>
                                    <p className='fw-bold fs-6 text-success' >$638.00</p>
                                    <p className='fw-bold text-muted text-decoration-line-through'>$717</p>
                                </div>
                             
                            </div>
                            <button className='btn btn-success w-100 mx-auto shadow-none '> <GrCart className='me-2'></GrCart>Add to cart</button>

                        </div>
                        {/* Item Part Three End */}
                        {/* Item Part Four Added */}
                        <div className='best-item-4 '>
                            <div className='position-relative'>
                                <img className='best-item-img img-fluid' src={imageThree} alt="" />
                                <div className='overlay'>
                                    <ul className='list list-inline mb-0 border border-success  pt-1'>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Quick View" placement="top">
                                                <a className='ms-2'>
                                                    <GrFormView className='fs-4 '></GrFormView>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor   '>
                                            <Tooltip title="Add to the Wishlist" placement='top'>
                                                <a className=''>
                                                    <CiHeart className='fs-4'></CiHeart>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Compare Item" placement='top'>
                                                <a className=''>
                                                    <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                                </a>
                                            </Tooltip>
                                        </li>
                                    </ul>
                                </div>
                                <p>Fast Food</p>
                                <p>Herb-Crusted Salmon with Lemon Butter Sauce</p>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                                <div className=' d-flex justify-content-between'>
                                    <p className='fw-bold fs-6 text-success' >$638.00</p>
                                    <p className='fw-bold text-muted text-decoration-line-through'>$717</p>
                                </div>
                              
                            </div>
                            <button className='btn btn-success w-100 mx-auto shadow-none '> <GrCart className='me-2'></GrCart>Add to cart</button>

                        </div>
                        {/* Item Part Four End */}

                        {/* Item Part Five Start */}
                        <div className='best-item-5 '>
                            <div className='position-relative'>
                                <img className='best-item-img img-fluid' src={imageFour} alt="" />
                                <div className='overlay'>
                                    <ul className='list list-inline mb-0 border border-success  pt-1'>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Quick View" placement="top">
                                                <a className='ms-2'>
                                                    <GrFormView className='fs-4 '></GrFormView>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor   '>
                                            <Tooltip title="Add to the Wishlist" placement='top'>
                                                <a className=''>
                                                    <CiHeart className='fs-4'></CiHeart>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Compare Item" placement='top'>
                                                <a className=''>
                                                    <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                                </a>
                                            </Tooltip>
                                        </li>
                                    </ul>
                                </div>
                                <p>Dairies</p>
                                <p>Ultimate Loaded BBQ Pulled Pork Nachos</p>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                                <div className=' d-flex justify-content-between'>
                                    <p className='fw-bold fs-6 text-success' >$638.00</p>
                                    <p className='fw-bold text-muted text-decoration-line-through'>$717</p>
                                </div>
                              
                            </div>
                            <button className='btn btn-success w-100 mx-auto shadow-none '> <GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                        {/* Item Part Five End */}
                        <div className='best-item-6 '>
                            <div className='position-relative'>
                                <img className='best-item-img img-fluid' src={imageFive} alt="" />
                                <div className='overlay'>
                                    <ul className='list list-inline mb-0 border border-success  pt-1'>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Quick View" placement="top">
                                                <a className='ms-2'>
                                                    <GrFormView className='fs-4 '></GrFormView>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor   '>
                                            <Tooltip title="Add to the Wishlist" placement='top'>
                                                <a className=''>
                                                    <CiHeart className='fs-4'></CiHeart>
                                                </a>
                                            </Tooltip>
                                        </li>
                                        <li className='list-inline-item cursor'>
                                            <Tooltip title="Compare Item" placement='top'>
                                                <a className=''>
                                                    <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                                </a>
                                            </Tooltip>
                                        </li>
                                    </ul>
                                </div>
                                <p>Honey </p>
                                <p>Spicy Honey Glazed Chicken Wings</p>
                                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                                <div className=' d-flex justify-content-between'>
                                    <p className='fw-bold fs-6 text-success' >$638.00</p>
                                    <p className='fw-bold text-muted text-decoration-line-through'>$717</p>
                                </div>
                              
                            </div>
                            <button className='btn btn-success w-100 mx-auto shadow-none '> <GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default BestProducts;