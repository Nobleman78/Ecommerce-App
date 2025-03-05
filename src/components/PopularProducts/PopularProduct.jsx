import itemOne from '../../assets/item-1.png'
import itemTwo from '../../assets/item-2.png'
import itemThree from '../../assets/item-3.png'
import itemFour from '../../assets/item-4.png'
import itemFive from '../../assets/item-5.png'
import itemSix from '../../assets/item-6.png'
import itemSeven from '../../assets/item-7.png'
import itemEight from '../../assets/item-8.png'
import itemNine from '../../assets/item-9.png'
import itemTen from '../../assets/item-10.png'
import { GrFormView } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { GrCart } from "react-icons/gr";
import { Rating } from "@mui/material";


import './PopularProduct.css'
const PopularProduct = () => {
    return (
        <div className="container-fluid mt-4 ">
            <h2>Popular Products</h2>
            <div className="row ">
                <div className="col-12 col-md-6 col-lg-3 my-5 ">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid mb-2' src={itemOne} alt="" />
                            <p className='position-absolute    highlight-text'>Sale</p>
                            <div className='overlay'>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
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
                        </div>
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold fs-6 text-success' >$638.00</p>
                            <button className='btn btn-success shadow-none '> <GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-5 ">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid mb-2' src={itemTwo} alt="" />
                            <div className='overlay'>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
                                        <Tooltip title="Quick View" placement="top">
                                            <a className='ms-2'>
                                                <GrFormView className='fs-4 '></GrFormView>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor   '>
                                        <Tooltip title="Add to the Wishlist" placement="top">
                                            <a className=''>
                                                <CiHeart className='fs-4'></CiHeart>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor'>
                                        <Tooltip title="Compare Item" placement="top">
                                            <a className=''>
                                                <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                            </a>
                                        </Tooltip>
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success shadow-none'><GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-5 ">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid mb-2' src={itemThree} alt="" />
                            <div className='overlay'>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
                                        <Tooltip title="Quick View" placement="top">
                                            <a className='ms-2'>
                                                <GrFormView className='fs-4 '></GrFormView>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor   '>
                                        <Tooltip title="Add to the Wishlist" placement="top">
                                            <a className=''>
                                                <CiHeart className='fs-4'></CiHeart>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor'>
                                        <Tooltip title="Compare Item" placement="top">
                                            <a className=''>
                                                <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                            </a>
                                        </Tooltip>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success shadow-none'><GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 my-5 ">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid mb-2' src={itemFour} alt="" />
                            <div className='overlay'>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
                                        <Tooltip title="Quick View" placement="top">
                                            <a className='ms-2'>
                                                <GrFormView className='fs-4 '></GrFormView>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor   '>
                                        <Tooltip title="Add to the Wishlist" placement="top">
                                            <a className=''>
                                                <CiHeart className='fs-4'></CiHeart>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor'>
                                        <Tooltip title="Compare Item" placement="top">
                                            <a className=''>
                                                <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                            </a>
                                        </Tooltip>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p className='fw-light'>  Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success shadow-none'><GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid mb-2' src={itemFive} alt="" />
                            <div className='overlay'>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
                                        <Tooltip title="Quick View" placement="top">
                                            <a className='ms-2'>
                                                <GrFormView className='fs-4 '></GrFormView>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor   '>
                                        <Tooltip title="Add to the Wishlist" placement="top">
                                            <a className=''>
                                                <CiHeart className='fs-4'></CiHeart>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor'>
                                        <Tooltip title="Compare Item" placement="top">
                                            <a className=''>
                                                <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                            </a>
                                        </Tooltip>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success shadow-none'><GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3  ">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid mb-2' src={itemSix} alt="" />
                            <div className='overlay'>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
                                        <Tooltip title="Quick View" placement="top">
                                            <a className='ms-2'>
                                                <GrFormView className='fs-4 '></GrFormView>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor   '>
                                        <Tooltip title="Add to the Wishlist" placement="top">
                                            <a className=''>
                                                <CiHeart className='fs-4'></CiHeart>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor'>
                                        <Tooltip title="Compare Item" placement="top">
                                            <a className=''>
                                                <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                            </a>
                                        </Tooltip>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success shadow-none'><GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid' src={itemSeven} alt="" />
                            <div className='overlay'>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
                                        <Tooltip title="Quick View" placement="top">
                                            <a className='ms-2'>
                                                <GrFormView className='fs-4 '></GrFormView>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor   '>
                                        <Tooltip title="Add to the Wishlist" placement="top">
                                            <a className=''>
                                                <CiHeart className='fs-4'></CiHeart>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor'>
                                        <Tooltip title="Compare Item" placement="top">
                                            <a className=''>
                                                <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                            </a>
                                        </Tooltip>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success shadow-none'><GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid ' src={itemEight} alt="" />
                            <div className='overlay '>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
                                        <Tooltip title="Quick View" placement="top">
                                            <a className='ms-2'>
                                                <GrFormView className='fs-4 '></GrFormView>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor   '>
                                        <Tooltip title="Add to the Wishlist" placement="top">
                                            <a className=''>
                                                <CiHeart className='fs-4'></CiHeart>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor'>
                                        <Tooltip title="Compare Item" placement="top">
                                            <a className=''>
                                                <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                            </a>
                                        </Tooltip>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>

                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <button className='btn btn-success shadow-none '><GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-5 ">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid ' src={itemNine} alt="" />
                            <div className='overlay '>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
                                        <Tooltip title="Quick View" placement="top">
                                            <a className='ms-2'>
                                                <GrFormView className='fs-4 '></GrFormView>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor   '>
                                        <Tooltip title="Add to the Wishlist" placement="top">
                                            <a className=''>
                                                <CiHeart className='fs-4'></CiHeart>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor'>
                                        <Tooltip title="Compare Item" placement="top">
                                            <a className=''>
                                                <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                            </a>
                                        </Tooltip>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Seeds of Change Organic Quinoe</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>
                        <p>Sold By Global Office</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <p className='fw-bold text-muted text-decoration-line-through'>$800</p>
                            <button className='btn btn-success shadow-none '><GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 my-5">
                    <div className="popular-products ">
                        <div className='image-wrapper'>
                            <img className='img-fluid ' src={itemTen} alt="" />
                            <div className='overlay '>
                                <ul className='list list-inline mb-0 border border-success  pt-1'>
                                    <li className='list-inline-item cursor '>
                                        <Tooltip title="Quick View" placement="top">
                                            <a className='ms-2'>
                                                <GrFormView className='fs-4 '></GrFormView>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor   '>
                                        <Tooltip title="Add to the Wishlist" placement="top">
                                            <a className=''>
                                                <CiHeart className='fs-4'></CiHeart>
                                            </a>
                                        </Tooltip>
                                    </li>
                                    <li className='list-inline-item cursor'>
                                        <Tooltip title="Compare Item" placement="top">
                                            <a className=''>
                                                <MdOutlineCompareArrows className='fs-4'></MdOutlineCompareArrows>
                                            </a>
                                        </Tooltip>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <p className='fw-light'>Vegetables</p>
                        <p className='fw-bold'>Gorton’s Beer Battered Fish Fillets</p>
                        <div className='d-flex '>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
                            <span className='mt-1 ms-1'>(10)</span>
                        </div>
                        <p>Sold By GoPro</p>
                        <div className='d-flex justify-content-between'>
                            <p className='fw-bold text-success'>$638.00</p>
                            <p className='fw-bold text-muted text-decoration-line-through'>$717</p>
                            <button className='btn btn-success shadow-none '><GrCart className='me-2'></GrCart>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default PopularProduct;