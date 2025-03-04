import './Deal.css'
import { GrCart } from "react-icons/gr";
import dealItemOne from '../../assets/Deal-item-1.png'
import dealItemTwo from '../../assets/Deal-item-2.png'
const Deal = () => {
    return (
        <div className='container-fluid  '>
            <h2>Deal Of the Day</h2>
            <div className="w-75 mx-auto mb-5  position-relative  ">
                <div className="row mt-4">
                    <div className="col-12 col-md-12 col-lg-6 mb-4   ">
                        <img className='w-100 deal-image-one ' src={dealItemOne} alt="" />
                        <div className='position-absolute deal-main top-50'>
                            <div className='duration'>
                                <ul className='list list-inline d-flex'>
                                    <li className='list-inline-item '>
                                        <div className='text-center'>
                                            <p>00</p>
                                            <p>Days</p>
                                        </div>

                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='text-center '>
                                            <p>00</p>
                                            <p>Hours</p>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='text-center'>
                                            <p>00</p>
                                            <p>Mins</p>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='text-center'>
                                            <p>00</p>
                                            <p>Sec</p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            {/* Duration Div End Here */}


                            {/* Card Info Div Start Here */}
                            <div className='position-absolute daily-deal-card shadow-lg bg-white p-4 '>
                                <p> All Natural Italian-Style Chicken Meatballs </p>
                                <span></span>
                                <p className='fw-bold'>Sold By <span className='text-success'>GoPro</span></p>
                                <div className='d-flex justify-content-between'>
                                    <span> $870 <span className='ms-4 text-decoration-line-through'>$1000</span></span> 
                                    <button className='btn btn-success'><GrCart className='me-2'></GrCart>Add</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* First Pat End */}
                    {/* Second Part Start */}

                    <div className="col-12 my-sm-6 col-md-12 col-lg-6 mb-5 ">
                        <img className='w-100 deal-image-two' src={dealItemTwo} alt="" />
                        <div className='position-absolute deal-main-two top-50'>
                            <div className='duration-two'>
                                <ul className='list list-inline d-flex'>
                                    <li className='list-inline-item '>
                                        <div className='text-center'>
                                            <p>00</p>
                                            <p>Days</p>
                                        </div>

                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='text-center '>
                                            <p>00</p>
                                            <p>Hours</p>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='text-center'>
                                            <p>00</p>
                                            <p>Mins</p>
                                        </div>
                                    </li>
                                    <li className='list-inline-item'>
                                        <div className='text-center'>
                                            <p>00</p>
                                            <p>Sec</p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            {/* Duration Div End Here */}


                            {/* Card Info Div Start Here */}
                            <div className='position-absolute daily-deal-card-two shadow-lg  bg-white p-4 '>
                                <p> All Natural Italian-Style Chicken Meatballs </p>
                                <span></span>
                                <p className='fw-bold'>Sold By <span className='text-success'>GoPro</span></p>
                                <div className='d-flex justify-content-between'>
                                    <span> $870 <span className='ms-4 text-decoration-line-through'>$1000</span></span> 
                                    <button className='btn btn-success'><GrCart className='me-2'></GrCart>Add</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className='col-lg-2'>

                    </div> */}
                </div>

            </div>
        </div>
    );
};

export default Deal;