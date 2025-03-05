import logo from '../../assets/logo.png'
import { IoSearchOutline } from "react-icons/io5";
import './Header.css'
import Catagory from '../SelectDrop/Catagory';
import { useEffect, useState } from 'react';
import Country from '../SelectDrop/Country';
import compareIcon from '../../assets/icon-compare.svg'
import wishlistIcon from '../../assets/icon-heart.svg'
import cartIcon from '../../assets/icon-cart.svg'
import { CiLogin } from "react-icons/ci";
import userIcon from '../../assets/icon-user.svg'
// import { ClickAwayListener } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import { FiUserPlus } from "react-icons/fi";

const Header = () => {
    // Initialize an array

    const catagories = [
        'Milk and dairies',
        'Wines and Drinks',
        'Clothing and beauty',
        'Fresh Seafood',
        'Pets Food and Toy',
        'Fast Food',
        'Baking Material',
        'Vegetables',
        'Fresh Fruit',
        'Bread and Juice'


    ];
    // Defined a state to handle the counry data.
    const [countries, setCountries] = useState([])
    const [isOpenDropDown, setOpenDropDown] = useState(false);
    // Defined an emty array to store the country name.
    const countryList = [];

    // Defined a useEffect Hook to load the Api
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    {
        countries.map((item) => {
            countryList.push(item.name.common)

        })

    }


    // This is handle DropDown of the User

    return (
        <>
            <header>
                <div className='container-fluid ps-2  '>
                    <div className='raw d-flex'>
                        {/* It will take 2 colums for small and big screens. */}
                        <div className='col-sm-2 '>
                            {/* Image Section Start Here */}
                            <img className='img-fixed' src={logo} alt="" />
                            {/* Image Section End Here */}

                        </div>
                        {/* It will take 5 colums for small and big screens */}
                        <div className='col-sm-4 '>
                            {/* Header Search Start Here */}
                            <div className='header-search d-flex align-items-center  '>
                                <Catagory data={catagories}></Catagory>

                                <div className='search d-flex'>
                                    <input type="text" placeholder='Search for items...' />
                                    <IoSearchOutline className='mt-1 cursor text-success' />

                                </div>
                            </div>
                        </div>
                        {/* Header Search End Here */}


                        {/*Location section start here */}

                        <div className='col-sm-6 ms-4 d-flex align-items-center '>
                            <div className='ml-auto d-flex align-items-center'>
                                <div className='country-box'>
                                    <Country data={countryList}></Country>
                                </div>
                                {/* Compare, wishlist.. and other section start from here. */}
                                <ul className='list list-inline mb-0 header-tabs'>
                                    <li className='list-inline-item'>
                                        <span >
                                            <img src={compareIcon} alt="Compare Icon" />
                                            <span className='badge bg-success rounded-circle'>3</span>
                                            Compare
                                        </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span>
                                            <img src={wishlistIcon} alt="Wishlist Icon" />
                                            <span className='badge bg-success rounded-circle'>3</span>
                                            Wishlist
                                        </span>
                                    </li>
                                    <li className='list-inline-item'>
                                        <span>
                                            <img src={cartIcon} alt="Wishlist Icon" />
                                            <span className='badge bg-success rounded-circle'>3</span>
                                            Cart
                                        </span>
                                    </li>
                                    <li className='list-inline-item'>

                                        <span onClick={() => setOpenDropDown(!isOpenDropDown)}>
                                            <img src={userIcon} alt="User Icon" />
                                            <span className='badge bg-success rounded-circle'>3</span>
                                            Login/Register
                                        </span>
                                        {
                                            isOpenDropDown == true &&
                                            <div className='user-dropdown-menu'>
                                                <ul>
                                                    <li><CiLogin className='login-icon me-2 '></CiLogin>Login</li>
                                                    <li><FiUserPlus className='registration-icon me-2'></FiUserPlus>Register</li>
                                                    
                                                </ul>
                                            </div>
                                        }

                                    </li>
                                </ul>
                                {/* Cart,compare,User,wishlist section end here. */}
                            </div>

                        </div>



                        {/* Locatioin section end here */}

                    </div>
                </div>
            </header>
            <Navigation data={catagories}></Navigation>
        </>
    );
};

export default Header;