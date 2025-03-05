import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import Button from '@mui/material/Button';
import './Listing.css'
import Sidebar from '../../Sidebar/Sidebar';
import PopularProduct from '../../PopularProducts/PopularProduct';
import { useState } from 'react';
const Listing = () => {
    const [isOpenDropDown, setOpenDropDown] = useState(false)
    return (
        <div className="container-fluid">
            <section className="listingPage">
                <div className='breadCrumb'>
                    <h1>Snack</h1>
                    <ul className='list list-inline'>
                        <li className='list-inline-item'>
                            <Link className='text-decoration-none text-dark' to={''}>Home<FaArrowRight className=''></FaArrowRight></Link>
                        </li>
                        <li className='list-inline-item'>
                            <Link className='text-decoration-none text-dark' to={''}>Shop<FaArrowRight></FaArrowRight></Link>
                        </li>
                        <li className='list-inline-item'>
                            <Link className='text-decoration-none text-dark' to={''}>Snack</Link>
                        </li>
                    </ul>

                </div>
                {/* Listing Data */}
                <div className='listingData'>
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-3  '>
                            <Sidebar></Sidebar>

                        </div>
                        <div className='col-12 col-md-12 col-lg-9 '>
                            <div className='d-flex justify-content-between '>
                                <p className='mt-4 ms-4'>We find <span className='text-success'>34</span> items for you</p>
                                <div className='d-flex align-items-center gap-2 mt-4 ms-4' >
                                    <div className='tab_ position-relative'>
                                        <Button variant="outlined" onClick={() => setOpenDropDown(!isOpenDropDown)}>
                                
                                            Show
                                        </Button>
                                        {
                                            isOpenDropDown == true &&
                                            <div className='user-dropdown-menu'>
                                                <ul>
                                                    <li>Login</li>
                                                    <li>Registration</li>

                                                </ul>
                                            </div>
                                        }
                                    </div>
                                    <div>
                                        <Button variant="outlined">Sort By</Button>
                                    </div>
                                </div>
                            </div>

                            <PopularProduct></PopularProduct>

                        </div>

                    </div>

                </div>




            </section>
        </div>
    );
};

export default Listing;