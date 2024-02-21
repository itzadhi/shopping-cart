import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import CartState from './context/CartState';

function App() {
  const [cartCount, setCartCount] = useState(0); //Total Cart Count
  return (
    <CartState>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/cart' element={<CartScreen />} />
      </Routes>
    </CartState>
  );
}

export default App;
