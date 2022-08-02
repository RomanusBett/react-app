import React, {useContext} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartContext from "../store/cart-context";
import './headerbutton.css';

const HeaderCartButton = props=>{
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0)
     
    return <button onClick={props.onShowCart} className='button'>
        <span className='icon'>
        <ShoppingCartOutlinedIcon />
        </span>
        <span>Your Cart</span>
        <span className='badge'>{numberOfCartItems}</span>
    </button>
}
export default HeaderCartButton;