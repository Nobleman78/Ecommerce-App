import './Features.css'
import iconeOne from '../../assets/icon-1.png'
import iconeTwo from '../../assets/icon-2.png'
import iconeThree from '../../assets/icon-3.png'
import iconeFour from '../../assets/icon-4.png'
import iconeFive from '../../assets/icon-5.png'

const Features = () => {
    return (
        <div className="container-fluid">
             
            <div className='d-flex gap-4 mt-5'>
                <div className='iconOne-info text-center p-2'>
                    <img className='iconOne-img' src={iconeOne} alt="" />
                    <p>Best Price and Offers</p>
                    <p>Order $50 or more</p>

                </div>
                <div className='iconTwo-info text-center p-2'>
                    <img className='iconTwo-img' src={iconeTwo} alt="" />
                    <p>Free Delivery</p>
                    <p>24/7 amazing services</p>

                </div>
                <div className='iconThree-info text-center p-2'>
                    <img className='iconThree-img' src={iconeThree}alt="" />
                    <p>Great daily deal</p>
                    <p>When you sign up</p>

                </div>
                <div className='iconFour-info text-center p-2'>
                    <img className='iconFour-img' src={iconeFour} alt="" />
                    <p>Wide assortment</p>
                    <p>Mega Discounts</p>

                </div>
                <div className='iconFive-info text-center p-2' >
                    <img  className='iconFive-img' src={iconeFive} alt="" />
                    <p>Easy Returns</p>
                    <p>Within 30 days</p>

                </div>
            </div>
        </div>
    );
};

export default Features;