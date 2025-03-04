
import newsLetter from '../../assets/newsletter-image (1).png'
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-between mt-5 border newsletter-main-container '>
                <div className='p-5 w-50'>
                    <h2 className='fs-1'>Stay home & get your daily
                    needs from our shop</h2>
                    <p className='mt-4 fs-5'>Start Your Daily Shopping with Nest Mart</p>
                    <div className='d-flex content mt-5 w-75'>
                        <input className='p-3 newsletter-input-text' type="email" placeholder='Enter Your Email' />
                        <div>
                            <button className='p-3  newsletter-btn btn-success  shadow-none border-0' >Subscribe</button>
                        </div>
                    </div>

                </div>
                <div>
                    <img className='news-letter-img mt-5 pe-4' src={newsLetter} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Newsletter;