import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import PropertyList from './Components/PropertyList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import "./App.css"

function App() {
    const [cart, setCart] = useState([]);
    const [isCheckout, setIsCheckout] = useState(false);

    const addToCart = (property) => {
        setCart((prev) => [...prev, property]);
    };

    const removeFromCart = (propertyId) => {
        setCart(cart.filter(item => item.id !== propertyId));
    };

    const toggleCheckout = () => {
        setIsCheckout(!isCheckout);
    };

    return (
        <Router>
            <div className="App">
                <h1>Property Rental Platform</h1>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/properties" element={<PropertyList addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} toggleCheckout={toggleCheckout} />} />
                    <Route path="/checkout" element={<Checkout cart={cart} toggleCheckout={toggleCheckout} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

