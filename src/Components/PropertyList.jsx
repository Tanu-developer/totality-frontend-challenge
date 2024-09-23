import React from 'react';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';
import "./PropertyList.css";

const properties = [
    { id: 1, title: 'Cozy Cottage', description: 'A cozy cottage in the woods.', price: 100, image: 'https://tse1.mm.bing.net/th?id=OIP.yQEWEbhweRQ1MOuMu8zbUgHaE8&pid=Api&P=0&h=220' },
    { id: 2, title: 'Beach House', description: 'A beautiful beach house.', price: 200, image: 'https://tse4.mm.bing.net/th?id=OIP.oncu0EnVpKAAXLR7wstN8gHaFs&pid=Api&P=0&h=220' },
    { id: 3, title: 'Beach House', description: 'A beautiful beach house.', price: 300, image: 'https://tse4.mm.bing.net/th?id=OIP.oncu0EnVpKAAXLR7wstN8gHaFs&pid=Api&P=0&h=220' },
    { id: 4, title: 'Beach House', description: 'A beautiful beach house.', price: 400, image: 'https://tse4.mm.bing.net/th?id=OIP.oncu0EnVpKAAXLR7wstN8gHaFs&pid=Api&P=0&h=220' },
    
];

const PropertyList = ({ addToCart }) => {
    return (

        <Link to="/properties">


        <div className="property-list">
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} addToCart={addToCart} />
            ))}
        </div>
            </Link>
    );
};

export default PropertyList;
