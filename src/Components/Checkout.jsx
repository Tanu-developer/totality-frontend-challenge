import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Checkout = ({ cart, toggleCheckout }) => {
    const totalCost = cart.reduce((total, item) => total + item.price, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement payment processing logic here
        alert('Booking confirmed!');
        toggleCheckout();
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <h3>Total: ${totalCost}</h3>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
               
                <button type="submit">Confirm Booking</button>
            </form>

            <Link to="/cart">


            <button onClick={toggleCheckout}>Back to Cart</button>
            </Link>
            
        </div>
    );
};

export default Checkout;
