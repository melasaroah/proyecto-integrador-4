import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar/navBar';
import Menu from './components/menu/menu';
import Products from './components/products/products';
import Cart from './components/cart/cart';
import Login from './components/login/login';
import Register from './components/register/register';

function App() {

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  const cartTotal = cart.reduce((total, product) => total + product.price, 0).toFixed(3);

  return (
    <Router>
      <div className="App">
        {/* Solo mostrar NavBar si el usuario está autenticado */}
        {user && <NavBar setUser={setUser} />}
        
        <div className="main-content">
          <Routes>
            {/* Rutas de autenticación */}
            {!user ? (
              <>
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register setUser={setUser} />} />
                <Route path="*" element={<Navigate to="/login" />} /> {/* Redirige a login si no está autenticado */}
              </>
            ) : (
              <>
                {/* Rutas de la app después de autenticarse */}
                <Route path="/dashboard" element={
                  <>
                    <Menu setUser={setUser} />
                    <Products addToCart={addToCart} />
                    <Cart cart={cart} cartTotal={cartTotal} removeFromCart={removeFromCart} />
                  </>
                } />
                <Route path="*" element={<Navigate to="/dashboard" />} /> {/* Redirige al dashboard si está autenticado */}
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
