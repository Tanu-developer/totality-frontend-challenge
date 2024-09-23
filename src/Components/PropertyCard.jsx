import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property, addToCart }) => {
    return (
        <div className="property-card">
            <img src={property.image} alt={property.title} />
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <p>${property.price} / night</p>
            <Link to ="/cart">

            <button onClick={() => addToCart(property)}>Book Now</button>
            </Link>
        </div>
    );
};

export default PropertyCard;
