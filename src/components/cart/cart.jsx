import React from "react"
import './cartitems.css';
import Modal from "../UI/Modal";

const Cart = (props) => {
     const cartItems =<ul className="cart-items">{[{id:'c1', name:'part1', amount:2, price:12}
    ].map((item)=><li>{item.name}</li>)}</ul>; 

    return(
    <Modal onClose={props.onClose}>
        {cartItems}
        
        <div className="total">
        <span> Total Amount</span>
        <span>Ksh 90,000</span>
        </div>
        <div className="actions">
         <button onClick={props.onClose} className="button--alt">Close</button>
         <button  className="button">Order</button>

        </div>
    </Modal>
)}

export default Cart;