import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    const {name, img, id} = props.item;
    const {handleDeleteItem} = props;

    return (
        <div className='cart-player'>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <button onClick={() => handleDeleteItem(id)}>Delete</button>
            </div>
        </div>
    );
};

export default CartItem;