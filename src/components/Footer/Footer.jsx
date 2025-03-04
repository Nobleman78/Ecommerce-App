import logo from '../../assets/logo.png'
import { CiLocationOn } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci"; 
import './Footer.css'
const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex mt-5 gap-5">
                <div className='w-50'>
                    <img className='footer-img' src={logo} alt="" />
                    <p className='mt-4'>Awesome grocery store website template</p>
                    <p><CiLocationOn className='me-2 fs-5 text-success'></CiLocationOn> Address: 1210, Seorapara, Dhaka, Bangladesh</p>
                    <p><CiHeadphones className='me-2  fs-5 text-success'></CiHeadphones>  Call Us: (+880) -1557893476 </p>
                    <p><MdOutlineMailOutline className='me-2 fs-5 text-success'></MdOutlineMailOutline>Email: someone@gmail.com</p>
                    <p><TbClockHour3 className='me-2 fs-5 text-success'></TbClockHour3> Working Hours: 10:00 - 05:00, Mon - Sat</p>

                </div>
                <div className='d-flex gap-4 w-100 '>
                    <div className='footer-company-info w-25'>
                        <h3>Company</h3>
                        <ul className='list list-inline '>
                            <li className='pb-2 pt-2'>About Us</li>
                            <li className='pb-2'>Afflicate</li>
                            <li className='pb-2'>Career</li>
                            <li >Contact Us</li>
                        </ul>

                    </div>
                    <div className='w-25'>
                        <h3>Catagories</h3>
                        <ul className='list list-inline'>
                            <li className='pt-2 pb-2' >Milk and Dairies</li>
                            <li className='pb-2' > Clothing and Beauty</li>
                            <li className='pb-2'>Pet Toy</li>
                            <li className='pb-2'>Baking Material</li>
                            <li className='pb-2'>Fresh Fruit</li>
                            <li className='pb-2'>Wines and Drink</li>
                        </ul>

                    </div>
                    <div className='w-25 ms-5'>
                        <h3>Information</h3>
                        <ul className='list list-inline'>
                            <li className='pb-2 mt-2'>Contact Us</li>
                            <li className='pb-2'>About Us</li>
                            <li className='pb-2'>Cookie Policy</li>
                            <li className='pb-2'>Tearms and Conditions</li>
                            <li className='pb-2'>Return and Exchanges</li>
                            <li className='pb-2'>Shipping and Delivery</li>
                            <li className='pb-2'>Privacy Policy</li>
                        </ul>

                    </div>
                </div>
            </div>
            <hr className='text-success ' />
            {/* Follow us Section */}
            <div className='d-flex justify-content-between'>
                <p>Copyright © 2025 Nest all rights reserved.</p>
                <div>
                    <span className='fw-bold text-success fs-5'>+880176983443</span>
                    <p>24/7 Support Center</p>
                </div>
                <div className=''>
                    <a className='cursor p-2 fs-5'><TiSocialFacebook></TiSocialFacebook></a>
                    <a className='p-2 cursor fs-5'><IoLogoInstagram></IoLogoInstagram></a>
                    <a className='p-2 cursor fs-5'><AiOutlineYoutube></AiOutlineYoutube></a>
                    <a className='p-2 cursor fs-5'><CiTwitter></CiTwitter></a>
                    
                </div>
            </div>

        </div>
    );
};

export default Footer;