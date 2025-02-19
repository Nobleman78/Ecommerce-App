import logo from '../../assets/logo.png'
import { IoSearchOutline } from "react-icons/io5";
import './Header.css'
import SelectDrop from '../SelectDrop/SelectDrop';
import { useEffect, useState } from 'react';
import Country from '../SelectDrop/Country';
import compareIcon from '../../assets/icon-compare.svg'
import wishlistIcon from '../../assets/icon-heart.svg'
import cartIcon from '../../assets/icon-cart.svg'
import userIcon from '../../assets/icon-user.svg'





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



    return (
        <header>
            <div className='container-fluid ps-2 '>
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
                            <SelectDrop data={catagories}></SelectDrop>

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
                                    <span>
                                        <img src={userIcon} alt="Wishlist Icon" />
                                        <span className='badge bg-success rounded-circle'>3</span>
                                        Account
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    {/* Locatioin section end here */}
                </div>
            </div>
        </header>
    );
};

export default Header;