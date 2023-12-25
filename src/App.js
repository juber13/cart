import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import { useState } from 'react';
import { Routes , Route } from 'react-router-dom';

function App() {
  const [cartItems , setCartItems] = useState([]);
  return (
    <div className="App">
      <Header items={cartItems}/>
      <Routes>
         <Route path='/' element={<Products cartFunc={setCartItems} cartItem={cartItems}/>} />
         <Route path='/cart' element={<Cart items={cartItems} cartFunc={setCartItems}/>} />
      </Routes>
    </div>
  );
}

export default App;
