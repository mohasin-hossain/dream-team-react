import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const {handleDeleteItem} = props;

    let total = 0;
    for(const player of cart) {
        total += player.price;
    }

    return (
        <div>
            <h3>Players Added: {cart.length} </h3>
            <div className='cart-players'>
                {
                    cart.map(item => <CartItem 
                        handleDeleteItem={handleDeleteItem}
                        key={item.id} 
                        item={item}></CartItem>)
                }
            </div>
            <h3>Total Cost: <span className='total'>{total}</span></h3>
        </div>
    );
};

export default Cart;