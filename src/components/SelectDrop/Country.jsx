import { useState } from 'react';
import PropTypes from 'prop-types'
import { IoIosArrowDown } from "react-icons/io";
import { ClickAwayListener } from '@mui/material';
import { CiLocationOn } from "react-icons/ci";
import './Country.css'
const Country = ({data}) => {
    //console.log(data);
   
    // Using state to manage the OpenSelector 
    const [first, setFirst] = useState([]);
    //console.log(first);
    const [openSelect, setOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectItem, setSelectItem] = useState('Your Location');
    
    

    const openSelector = () => {
        // This line indicate the the openselector will open when the state is true 
        // and also close when the state is false.
        setOpenSelect(!openSelect);
    }
    const closeSelect = (index, name) => {
        setSelectedIndex(index);
        setOpenSelect(false);
        setSelectItem(name)

    }
    const filterList =(event)=>{
        const keyward = event.target.value;
        console.log(keyward)
        const list = data.filter((item)=>{
            return item.toLowerCase().includes(keyward);
        })
        setFirst(list)
        
         
    }

   

    
   

    return (
        <ClickAwayListener onClickAway={() => setOpenSelect(false)}>
            <div className='country-selectDrop cursor position-relative'>
                <CiLocationOn className='fs-5'></CiLocationOn>
                <span className='openSelect' onClick={openSelector}>{selectItem} <IoIosArrowDown onClick={openSelector} className='search-icon' /></span>
                {
                    openSelect === true &&
                    <div className="country-drop-down-menu">
                        <div className='search-field'>
                            <input onChange={filterList} className='p-2' type="text"  placeholder='Search here...'/>
                        </div>
                        <ul className='search-result'>
                            {
                                first.map((item, index) => {
                                    return (
                                        <li onClick={() => closeSelect(index, item)} key={index} className={`${selectedIndex === index ? 'active' : ''}`}>{item}</li>
                                    )
                                })
                            }
                        </ul>

                    </div>
                }
            </div>
        </ClickAwayListener>

    );
};
Country.propTypes = {
    data: PropTypes.object
}


export default Country;