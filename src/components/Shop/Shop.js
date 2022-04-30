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
        const exist = cart.find(pl => pl.id === player.id);
        if(!exist) {
            const newCart = [...cart, player];
            setCart(newCart);
        }
    }

    const handleDeleteItem = (id) => {
        const deleteItem = cart.filter(item => item.id !== id);
        setCart(deleteItem);   
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
                <div className="cart-items scrollbar-hidden">
                    {cart.length ? <Cart handleDeleteItem={handleDeleteItem} cart={cart}></Cart> : null}
                </div>
            </div>
           
        </div>
    );
};

export default Shop;