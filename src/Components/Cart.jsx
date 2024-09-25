import React from 'react';
import { Link } from 'react-router-dom';
 import "./Cart.css"
const Cart = ({ cart, removeFromCart, toggleCheckout }) => {
    const totalCost = cart.reduce((total, item) => total + item.price, 0);

    return (
        
        <div className="cart">
            <h2>Your Cart</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <h3>{item.title}</h3>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <h3>Total: ${totalCost}</h3>
            <Link to="/checkout">

            <button onClick={toggleCheckout}>Proceed to Checkout</button>
            </Link>
        </div>
    );
};

export default Cart;
