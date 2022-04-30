import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    const {handleDeleteItem} = props;

    let total = 0;
    for(const player of cart) {
        total += player.price;
    }

    const playerIcon = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>

    return (
        <div>
            <h3 className='player-added'>{playerIcon} Players Added: {cart.length} </h3>
            <div className='cart-players'>
                {
                    cart.map(item => <CartItem 
                        handleDeleteItem={handleDeleteItem}
                        key={item.id} 
                        item={item}></CartItem>)
                }
            <h3>Total Cost: <span className='total'>{total}</span></h3>
            </div>
        </div>
    );
};

export default Cart;