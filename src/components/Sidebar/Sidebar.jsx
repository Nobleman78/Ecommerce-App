import './Sidebar.css'
import React from 'react';
import catagoryOne from '../../assets/milk_dairy.png'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { CiFilter } from "react-icons/ci";


function valuetext(value) {
    return `${value}°C`;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Sidebar = () => {

    const [value, setValue] = React.useState([20, 37]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="conrainer-fluid position-relative ">
            <div className='row d-grid '>
                <div className='col-12 col-md-12 col-lg-3 w-sm-75 ms-2 sidebar w-100 w-md-75 rounded-3 shadow mt-4'>
                    <h3 className='title mt-2'>Catagory</h3>
                    <hr className='w-75 ' />
                    <div className='w-75 p-2 mb-2 w-sm-75 w-md-75 border d-flex gap-3 '>
                        <img className='catagory-one-img' src={catagoryOne} alt="" />
                        <span>Milk and Dairies</span>
                        <span>20</span>
                    </div>
                    <div className='w-75 p-2 mb-2  w-md-75 w-sm-75 border d-flex gap-3'>
                        <img className='catagory-one-img' src={catagoryOne} alt="" />
                        <span>Milk and Dairies</span>
                        <span>20</span>
                    </div>
                    <div className='w-75 p-2 mb-2  w-md-75 w-sm-75 border d-flex gap-3'>
                        <img className='catagory-one-img' src={catagoryOne} alt="" />
                        <span>Milk and Dairies</span>
                        <span>20</span>
                    </div>
                    <div className='w-75 p-2 mb-2  w-md-75 w-sm-75 border d-flex gap-3'>
                        <img className='catagory-one-img' src={catagoryOne} alt="" />
                        <span>Milk and Dairies</span>
                        <span>20</span>
                    </div>
                    <div className='w-75 p-2 mb-2  w-md-75 w-sm-75 border d-flex gap-3'>
                        <img className='catagory-one-img' src={catagoryOne} alt="" />
                        <span>Milk and Dairies</span>
                        <span>20</span>
                    </div>


                </div>
                {/* Filter By Price Part */}
                <div className='col-12 col-md-12 col-lg-3 w-sm-75 ms-2 sidebar w-100 w-md-75 rounded-3 shadow mt-4'>
                    <h3 className='title mt-3'>Filter By Price</h3>
                    <Slider className='w-75'
                        min={0}
                        step={1}
                        max={1000}
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        color='success'
                    />
                    <div className='w-75 p-2 mb-2 w-sm-75 w-md-75 border d-flex gap-3 '>
                        <span>From: <strong className='text-success'>${value[0]}</strong></span>
                    </div>
                    <div className='w-75  mb-2  w-md-75 w-sm-75 filter '>
                        <h5>Color</h5>
                        <ul className='list list-inline'>
                            <li className=''> <Checkbox color='success' {...label} />Red(16)</li>
                            <li className=''> <Checkbox color='success' {...label} />Green(26)</li>
                            <li className=''> <Checkbox color='success' {...label} />Yellow(10)</li>
                            <li className=''> <Checkbox color='success' {...label} />Pink(8)</li>
                            <li className=''> <Checkbox color='success' {...label} />Orange(20)</li>
                            <li className=''> <Checkbox color='success' {...label} />Purple(15)</li>
                            <li className=''> <Checkbox color='success' {...label} />Black(12)</li>
                            <li className=''> <Checkbox color='success' {...label} />White(21)</li>
                            <li className=''> <Checkbox color='success' {...label} />Brown(10)</li>
                            <li className=''> <Checkbox color='success' {...label} />Navy(20)</li>
                            <li className=''> <Checkbox color='success' {...label} />Maroon(17)</li>
                            <li className=''> <Checkbox color='success' {...label} />Teal(22)</li>
                            <li className=''> <Checkbox color='success'{...label} />Magenta(8)</li>
                            <li className=''> <Checkbox color='success'{...label} />Olive(9)</li>
                        </ul>
                    </div>
                    <hr className='w-75' />
                    <div className='w-75  mb-2  w-md-75 w-sm-75 filter '>
                        <h5>Item Condition</h5>

                        <ul className='list list-inline'>
                            <li className=''> <Checkbox color='success' {...label} />New(16)</li>
                            <li className=''> <Checkbox color='success' {...label} />Used-Good(26)</li>
                            <li className=''> <Checkbox color='success' {...label} />Damaged(10)</li>
                            <li className=''> <Checkbox color='success' {...label} />Refubrished(8)</li>
                            <li className=''> <Checkbox color='success' {...label} />Worn(20)</li>
                            <li className=''> <Checkbox color='success' {...label} />Repaired(15)</li>
                            <li className=''> <Checkbox color='success' {...label} />Pristine(12)</li>
                            <li className=''> <Checkbox color='success' {...label} />Used-Pair(21)</li>
                            <li className=''> <Checkbox color='success' {...label} />Light-Protected(10)</li>
                            <li className=''> <Checkbox color='success' {...label} />Sealed(20)</li>

                        </ul>
                    </div>
                    <button className='btn btn-success w-75 mb-4 mx-auto'><CiFilter></CiFilter> Filter</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;