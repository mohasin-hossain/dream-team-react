import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Shop.css';

const Shop = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])

    const handleAddToCart = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }


    return (
        <div className='shop-container'>
            <div className="players-container">
                {
                    players.map(player => <Player 
                        handleAddToCart={handleAddToCart}
                        key={player.id} 
                        player={player}
                        ></Player>)
                }
            </div>
            <div className="cart-container">
                <div className="cart-items">
                    {cart.length ? <Cart cart={cart}></Cart> : null}
                </div>
            </div>
           
        </div>
    );
};

export default Shop;