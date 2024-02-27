import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Component/Header';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/cart' element={<CartScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
