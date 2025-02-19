import { useState } from 'react';
import PropTypes from 'prop-types'
import { IoIosArrowDown } from "react-icons/io";
import { ClickAwayListener } from '@mui/material';
import './SelectDrop.css'
const SelectDrop = ({data}) => {

    // Using state to manage the OpenSelector 
    const [openSelect, setOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectItem, setSelectItem] = useState('All Catagories');

    const [firstList, setFirstList] = useState(data);
    const [secondList,setSecondList] = useState(data);
    //console.log(secondList)
    

    
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
    //  This is for the filter data from the available list.
    const filterList =(event)=>{
        const keyward = event.target.value.toLowerCase();
        const list = secondList.filter((item)=>{
            return item.toLowerCase().includes(keyward);
        })
        setFirstList(list)
         
    }


    return (
        <ClickAwayListener onClickAway={() => setOpenSelect(false)}>
            <div className='selectDrop cursor position-relative'>
                <span className='openSelect' onClick={openSelector}>{selectItem} <IoIosArrowDown onClick={openSelector} className='search-icon' /></span>
                {
                    openSelect === true &&
                    <div className="drop-down-menu">
                        <div className='search-field'>
                            <input onChange={filterList} className='p-2' type="text" placeholder='Search here...' />
                        </div>
                        <ul className='search-result'>
                            {
                                firstList.map((item,index)=>{
                                    return(
                                        <li onClick={() => closeSelect(index, item)}key={index} className={`${selectedIndex === index ? 'active' : ''}`}>{item}</li>
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
SelectDrop.propTypes = {
    data:PropTypes.object
}


export default SelectDrop;