import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Player.css';

const Player = (props) => {
    const {name, role, age, img, price} = props.player;
    const shopIcon = <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>

    return (
        <div className='player'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Role: {role}</p>
            <p>Age: {age}</p>
            <h4>Price: <span>{price}</span></h4>
            <button onClick={() => props.handleAddToCart(props.player)}>{shopIcon} Buy Now!</button>
        </div>
    );
};

export default Player;