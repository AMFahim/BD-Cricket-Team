import './App.css';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Cart from './components/cart/Cart';
import images from '../../my-app/src/images/download (1).png'

function App() {
const[players, setPlayers] = useState([]);
const [cart, setCart] = useState([]);
useEffect(() => {
  fetch('https://api.mocki.io/v1/7fb29867')
  .then(res => res.json())
  .then(data => setPlayers(data))
}, []);

const handleAddPlayer = (player) => {
  const newCart = [...cart, player];
  setCart(newCart);
}
  return (
    <div className="App">
      <header>
        <img src={images} alt=""/>
      </header>
      <h1>BANGLADESH CRICKET BOARD</h1>
      <h1>There are {players.length} players in this team</h1>
      <h4>Player Added: {cart.length} </h4>
      <Cart cart ={cart}></Cart>
      <ul>
        {
          players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer} key={player.id}></Player>)
        }
      </ul>
    </div>
  );
}

export default App;
