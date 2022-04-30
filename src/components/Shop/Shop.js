import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Shop.css';

const Shop = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    const [displyPlayers, setDisplayPlayers] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => {
            setPlayers(data)
            setDisplayPlayers(data)
        })
    }, [])

    const handleAddToCart = (player) => {
        const exist = cart.find(pl => pl.id === player.id);
        if(!exist) {
            const newCart = [...cart, player];
            setCart(newCart);
        } else {
            alert('This player is already in Cart!')
        }
    }

    const handleDeleteItem = (id) => {
        const deleteItem = cart.filter(item => item.id !== id);
        setCart(deleteItem);   
    }

    const handleChange = (event) => {
        const searchText = event.target.value;
        const matchedPlayer = players.filter(player => player.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayPlayers(matchedPlayer);
    }


    return (
        <>
            <div className="input-container">
                <input onChange={handleChange} type="text" placeholder='Search player' />
            </div>
            <div className='shop-container'>
                <div className="players-container">
                    {
                        displyPlayers.map(player => <Player 
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
        </>
    );
};

export default Shop;