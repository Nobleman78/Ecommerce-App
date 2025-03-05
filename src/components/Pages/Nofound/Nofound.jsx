
import './Nofound.css'
import notFound from '../../../assets/page-404.png'
import { Link } from 'react-router-dom';

const Nofound = () => {
    return (
        <section className='notFound'>
            <div className='container-fluid'>
                <div className='box mx-auto'>
                    <img src={notFound} alt="" />
                    <h1 className='notfound-title mx-auto '> Page Not Found</h1>

                </div>
                <div className='back-to-home mx-auto '>
                    <Link to="/"><button className='btn  ms-5 btn-success'>Back To Home Page</button></Link>

                </div>

            </div>
        </section>

    );
};

export default Nofound;