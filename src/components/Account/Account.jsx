import { CiUser } from "react-icons/ci";
import trackingIcon from '../../assets/tracking.png'
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { FaSignOutAlt } from "react-icons/fa";
const Account = () => {
    return (
        <div className="">
            <li className=''><CiUser className='me-2 fs-5'></CiUser> My Account</li>
            <li><img className='tracking-icon me-2' src={trackingIcon} alt="" />Order Tracking</li>
            <li><CiHeart className='wishlist-icon me-2 '></CiHeart>My Wishlist</li>
            <li><CiSettings className='setting-icon me-2'></CiSettings>Settings</li>
            <li><FaSignOutAlt className='signout-icon me-2'></FaSignOutAlt>Sign Out</li>
        </div>
    );
};

export default Account;