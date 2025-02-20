import { useState } from 'react';
import './Navigation.css'
import PropTypes from 'prop-types'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { NavLink } from 'react-router-dom';
const Navigation = ({ data }) => {
    console.log(data)
    const [isBrowseOpen, setBrowseOpen] = useState(false);



    return (
        <div className="navbar ">
            <div className="container-fluid">
                <div className="raw d-flex align-items-center">
                    <div className="col-sm-3 navbar-first-part">
                        <a onClick={() => setBrowseOpen(!isBrowseOpen)} className='btn btn-success  '>Browse All Catagories
                            {
                                isBrowseOpen ? <IoIosArrowUp className='ms-2'></IoIosArrowUp > : <IoIosArrowDown className='ms-2'></IoIosArrowDown>
                            }</a>
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
                    <div className="col-sm-6 w-100   ">
                        <ul className='d-flex list-style '>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/groceries">Groceries</NavLink></li>
                            <li><NavLink to="/electronics">Electronics</NavLink></li>
                            <li><NavLink to="/fashion">Fashion</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/shop">Shop</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>


                    </div>
                    <div className="col-sm-3">

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
