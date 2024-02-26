import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/cart' element={<CartScreen />} />
      </Routes>
    </Provider>
  );
}

export default App;
