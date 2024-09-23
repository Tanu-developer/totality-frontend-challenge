// import React, { useState } from 'react';
// import Login from './Components/Login';
// import PropertyList from './Components/PropertyList';
// import Cart from './Components/Cart';
// import Checkout from './Components/Checkout';


// function App() {
//     const [cart, setCart] = useState([]);
//     const [isCheckout, setIsCheckout] = useState(false);

//     const addToCart = (property) => {
//         setCart((prev) => [...prev, property]);
//     };

//     const removeFromCart = (propertyId) => {
//         setCart(cart.filter(item => item.id !== propertyId));
//     };

//     const toggleCheckout = () => {
//         setIsCheckout(!isCheckout);
//     };

//     return (
//         <div className="App">
//             <h1>Property Rental Platform</h1>
//             {!isCheckout ? (
//                 <>
//                     <PropertyList addToCart={addToCart} />
//                     <Cart cart={cart} removeFromCart={removeFromCart} toggleCheckout={toggleCheckout} />
//                 </>
//             ) : (
//                 <Checkout cart={cart} toggleCheckout={toggleCheckout} />
//             )}
//         <Login/>
//         </div>
        
        
//     );
// }

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import PropertyList from './Components/PropertyList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';

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
                {/* <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/properties">Properties</Link>
                    <Link to="/cart">Cart</Link>
                </nav> */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/properties" element={<PropertyList addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} toggleCheckout={toggleCheckout} />} />
                    <Route path="/checkout" element={<Checkout cart={cart} toggleCheckout={toggleCheckout} />} />
                    {/* <Route path="/" element={
                        <div>
                            <h2>Welcome to the Property Rental Platform!</h2>
                            <p>Please select a section from the navigation above.</p>
                        </div>
                    } /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

