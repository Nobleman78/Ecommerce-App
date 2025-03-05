import { useContext, useState } from 'react';
import './Navigation.css'
import PropTypes from 'prop-types'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import contactIcon from '../../assets/icon-headphone.svg'
import { AuthContext } from '../ContextProvider/ContextProvider';
import { ClickAwayListener } from '@mui/material';
const Navigation = ({ data }) => {

    const { homeData,groceriesData ,electronicsData,fashionData,aboutData,shopData} = useContext(AuthContext)
    const [isBrowseOpen, setBrowseOpen] = useState(false);
    const [isHomeButtonOpen, setHomeButtonOpen] = useState(false);
    const [isGroceriesButtonOpen, setGroceriesButtonOpen] = useState(false);
    const [isElecButtonOpen, setElecButtonOpne] = useState(false);
    const [isFashionButtonOpen, setFashionButtonOpen] = useState(false);
    const [isAboutButtonOpen, setAboutButtonOpen] = useState(false);
    const [isShopButtonOpen, setShopButtonOpen] = useState(false);
    const [isBlogButtonOpen, setBlogButtonOpen] = useState(false)
    const [selectIndex, setSelectIndex] = useState(0);



    return (
        <div className="navbar mx-auto ">
            <div className="container-fluid">
                <div className="raw d-flex align-items-center">
                    <div className="col-sm-3 navbar-first-part">
                        <a onClick={() => setBrowseOpen(!isBrowseOpen)} className='btn btn-success  '>Browse All Catagories
                            {
                                isBrowseOpen ? <IoIosArrowUp className='ms-2'></IoIosArrowUp > : <IoIosArrowDown className='ms-2'></IoIosArrowDown>
                            }
                        </a>
                        {
                            isBrowseOpen == true &&
                            <div className='catagories-dropdown-menu'>
                                {
                                    data.map((data, id) => {
                                        return (
                                            <li key={id}>{data}</li>
                                            
                                        )
                                    })
                                }

                            </div>
                        }


                    </div>
                    {/* Navbar First Part End */}
                    {/* Navbar Middle Part Start */}
                    <div className="col-sm-7 middle-part ">
                        <ul className="d-flex list-style">
                            <ClickAwayListener onClickAway={() => setHomeButtonOpen(false)}>
                                <li onClick={() => setHomeButtonOpen(!isHomeButtonOpen)}><NavLink className="home-nav" to="/home">Home</NavLink>
                                    {
                                        isHomeButtonOpen ? <IoIosArrowUp className="arrowbutton"></IoIosArrowUp> : <IoIosArrowDown className="arrowbutton"></IoIosArrowDown>
                                    }
                                    {
                                        isHomeButtonOpen == true &&
                                        <div className="home-dropdown-menu">
                                            {
                                                homeData.map((homedata, id) => {
                                                    return (
                                                        <li key={id}>{homedata}</li>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                </li>
                            </ClickAwayListener>
                            <ClickAwayListener onClickAway={() => setGroceriesButtonOpen(false)}>
                                <li onClick={() => setGroceriesButtonOpen(!isGroceriesButtonOpen)}><NavLink to="/groceries">Groceries</NavLink>
                                    {
                                        isGroceriesButtonOpen ? <IoIosArrowUp className="arrowbutton"></IoIosArrowUp> : <IoIosArrowDown className="arrowbutton"></IoIosArrowDown>
                                    }
                                    {
                                        isGroceriesButtonOpen == true &&
                                        <div className="groceries-dropdown-menu">
                                            {
                                                groceriesData.map((groceriesData, id) => {
                                                    return (
                                                        <li key={id}>{groceriesData}</li>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                </li>
                            </ClickAwayListener>

                            <ClickAwayListener onClickAway={() => setElecButtonOpne(false)}>
                                <li onClick={() => setElecButtonOpne(!isElecButtonOpen)}><NavLink to="/electronics">Electronics</NavLink>
                                    {
                                        isElecButtonOpen ? <IoIosArrowUp className="arrowbutton"></IoIosArrowUp> : <IoIosArrowDown className="arrowbutton"></IoIosArrowDown>
                                    }
                                    {
                                        isElecButtonOpen == true &&
                                        <div className="electronics-dropdown-menu">
                                            {
                                                electronicsData.map((electronicsData, id) => {
                                                    return (
                                                        <li key={id}>{electronicsData}</li>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                </li>
                            </ClickAwayListener>

                            <ClickAwayListener onClickAway={() => setFashionButtonOpen(false)}>
                                <li onClick={() => setFashionButtonOpen(!isFashionButtonOpen)}><NavLink to="/fashion">Fashion</NavLink>
                                    {
                                        isFashionButtonOpen ? <IoIosArrowUp className="arrowbutton"></IoIosArrowUp> : <IoIosArrowDown className="arrowbutton"></IoIosArrowDown>
                                    }
                                    {
                                        isFashionButtonOpen == true &&
                                        <div className="fashion-dropdown-menu">
                                            {
                                                fashionData.map((fashionData, id) => {
                                                    return (
                                                        <li key={id}>{fashionData}</li>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                </li>
                            </ClickAwayListener>
                            <ClickAwayListener onClickAway={() => setAboutButtonOpen(false)}>
                                <li onClick={() => setAboutButtonOpen(!isAboutButtonOpen)}><NavLink to="/about">About</NavLink>
                                    {
                                        isAboutButtonOpen ? <IoIosArrowUp className="arrowbutton"></IoIosArrowUp> : <IoIosArrowDown className="arrowbutton"></IoIosArrowDown>
                                    }
                                    {
                                        isAboutButtonOpen == true &&
                                        <div className="about-dropdown-menu">
                                            {
                                                aboutData.map((aboutData, id) => {
                                                    return (
                                                        <li key={id}>{aboutData}</li>
                                                    )
                                                })
                                            }
                                        </div>
                                    }

                                </li>
                            </ClickAwayListener>
                            <ClickAwayListener onClickAway={()=>setShopButtonOpen(false)}>
                                <li onClick={() => setShopButtonOpen(!isShopButtonOpen)}><NavLink to="/shop">Shop</NavLink>
                                    {
                                        isShopButtonOpen ? <IoIosArrowUp className="arrowbutton"></IoIosArrowUp> : <IoIosArrowDown className="arrowbutton"></IoIosArrowDown>
                                    }
                                    {
                                        isShopButtonOpen == true &&
                                        <div className="shop-dropdown-menu">
                                            {
                                                shopData.map((shopData, id) => {
                                                    return (
                                                        <li key={id}>{shopData}</li>
                                                    )
                                                })
                                            }
                                        </div>
                                    }

                                </li>
                            </ClickAwayListener>
                            <ClickAwayListener onClickAway={()=>setBlogButtonOpen(false)}>
                            <li onClick={() => setBlogButtonOpen(!isBlogButtonOpen)}><NavLink to="/blog">Blog</NavLink>
                                {
                                    isBlogButtonOpen ? <IoIosArrowUp className="arrowbutton"></IoIosArrowUp> : <IoIosArrowDown className="arrowbutton"></IoIosArrowDown>
                                }
                                {
                                    isBlogButtonOpen == true &&
                                    <div className="home-dropdown-menu">
                                        {
                                            homeData.map((homedata, id) => {
                                                return (
                                                    <li key={id}>{homedata}</li>
                                                )
                                            })
                                        }
                                    </div>
                                }

                            </li>
                            </ClickAwayListener>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                    {/* Navbar Middle Part End */}

                    {/* Navbar Last Part Start */}
                    <div className="col-sm-2 d-flex align-items-center">
                        <div className='d-flex align-align-items-center'>
                            <span><img className='contact-icon mt-1' src={contactIcon} alt="Contact-Icon" /></span>
                            <div>
                                <p className=' ms-2 mb-0'>+8801539794731</p>
                                <p className='mb-0 ms-3'>Support 24/7</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    );
};
Navigation.propTypes = {
    data: PropTypes.object
}

export default Navigation;
