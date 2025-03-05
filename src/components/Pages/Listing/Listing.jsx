import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import Button from '@mui/material/Button';
import './Listing.css'
import { IoIosCheckmark } from "react-icons/io";
import Sidebar from '../../Sidebar/Sidebar';
import PopularProduct from '../../PopularProducts/PopularProduct';
import { useState } from 'react';
import { ClickAwayListener } from '@mui/material';


const Listing = () => {
    const [isshowDropDown, setShowDropDown] = useState(false)
    const [issortByDropDown, setsortByDropDown] = useState(false);

    // How many numbers of item will be shown in the page.

    const [pageNumber, setPageNumber] = useState(12);
    const handleItemsNumber = (value) => {
        setPageNumber(value)
    }

    const [sortby, setSortBy] = useState('Default')
    const handleSortBy = (value) => {
        setSortBy(value)
    }

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
                    <div className='row d-flex'>
                        <div className='col-12 col-md-12 col-lg-3 sideBar '>
                            <Sidebar ></Sidebar>

                        </div>
                        {/* Main Content */}
                        <div className='col-12 col-md-12 col-lg-9 main-content '>
                            <div className='d-flex justify-content-between '>
                                <p className='mt-4 ms-4'>We find <span className='text-success'>34</span> items for you</p>
                                <div className='d-flex align-items-center me-5 gap-2 mt-4 ms-4' >
                                    <div className='position-relative '>
                                        <Button className='pt-2 pb-2 text-dark ps-5 pe-5' variant="outlined" onClick={() => setShowDropDown(!isshowDropDown)}>
                                            Show :  <span className='ms-1'>{pageNumber}</span>
                                        </Button>
                                        {
                                            isshowDropDown == true &&
                                            <div className='show-dropdown-menu'>
                                                <ul className='list list-inline  cursor position-relative'>

                                                    {

                                                        [12, 24, 36].map((value,idx) => (
                                                            <ClickAwayListener key={idx} onClickAway={()=>setShowDropDown(false)}>
                                                                <li className=' d-flex gap-3  my-2  '
                                                                    key={value}
                                                                    onClick={() => handleItemsNumber(value)}

                                                                >
                                                                    <div style={{ width: '16px', textAlign: 'center' }}>
                                                                        {
                                                                            pageNumber === value && <span><IoIosCheckmark className='fs-5 text-success'></IoIosCheckmark></span>
                                                                        }
                                                                    </div>
                                                                    {value}
                                                                </li>
 
                                                            </ClickAwayListener>
                                                        ))
                                                    }


                                                </ul>
                                            </div>
                                        }
                                    </div>
                                    <div className='position-relative'>
                                        <Button className='pt-2 pb-2 ps-5 pe-5 text-dark' variant="outlined" onClick={() => setsortByDropDown(!issortByDropDown)}>

                                            Sort By : <span className='text-dark' style={{ fontSize: '10px' }}>{sortby}</span>
                                        </Button>
                                        {
                                            issortByDropDown == true &&
                                            <div className='sortby-dropdown-menu'>
                                                <ul className='list list-inline cursor'>
                                                    {
                                                        ['Default', 'Oldest', 'Newest', 'Price:Low to high', 'Price: High to low', 'Name: A-Z', 'Name:Z-A', 'Rating:Low to High', 'Rating: High to low'].map((value,idx) => (
                                                           <ClickAwayListener key={idx} onClickAway={()=>setsortByDropDown(false)}>
                                                             <li
                                                                className='p-1 d-flex gap-3  my-2  '
                                                                key={value}
                                                                onClick={() => handleSortBy(value)}
                                                            >
                                                                <div style={{ width: '16px', textAlign: 'center' }}>
                                                                    {
                                                                        sortby === value && <span><IoIosCheckmark className='fs-5 check text-success'></IoIosCheckmark></span>
                                                                    }
                                                                </div>
                                                                {value}
                                                            </li>
                                                           </ClickAwayListener>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        }
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