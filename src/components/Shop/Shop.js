import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Shop.css';

const Shop = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])


    return (
        <div className='shop-container'>
            <div className="players-container">
                {
                    players.map(player => <Player key={player.id} player={player}></Player>)
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;