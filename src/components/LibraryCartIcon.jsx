import React from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './headerbutton.css';

const HeaderCartButton = props=>{
    return <button className='button'>
        <span className='icon'>
        <ShoppingCartOutlinedIcon />
        </span>
        <span>Your Cart</span>
        <span className='badge'>3</span>
    </button>
}
export default HeaderCartButton;