import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    const {name, img} = props.item;
    return (
        <div className='cart-player'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default CartItem;