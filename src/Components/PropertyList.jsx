import React from 'react';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';
import "./PropertyList.css";

const properties = [
    { id: 1, title: 'Cozy Cottage', description: 'A cozy cottage in the woods.', price: 600, image: 'https://tse1.mm.bing.net/th?id=OIP.yQEWEbhweRQ1MOuMu8zbUgHaE8&pid=Api&P=0&h=220' },
    { id: 2, title: 'Beach House', description: 'A beautiful beach house.', price: 500, image: 'https://tse4.mm.bing.net/th?id=OIP.oncu0EnVpKAAXLR7wstN8gHaFs&pid=Api&P=0&h=220' },
    { id: 3, title: 'Multi-family house', description: 'A beautiful Multi-family house.', price: 900, image: 'https://tse2.mm.bing.net/th?id=OIP.uBQj7mF2izmSvllPavj26wHaFu&pid=Api&P=0&h=220' },
    { id: 4, title: ' Prefab house', description: 'A beautiful  Prefab house.', price: 500, image: 'https://tse4.mm.bing.net/th?id=OIP.MH_XplnT_PvKBTV7UmJsmAHaFj&pid=Api&P=0&h=220' },
    { id: 5, title: ' Yurt', description: 'A beautiful Yurt.', price: 600, image: 'https://tse4.mm.bing.net/th?id=OIP.Hn_m-5ezR0U7Alf1l7ktXgHaFj&pid=Api&P=0&h=220' },
    { id: 6, title: ' Single-family house', description: 'A beautiful  Single-family house.', price: 900, image: 'https://tse3.mm.bing.net/th?id=OIP.WA_Ya9db5kjbj8d9Y_OzUQAAAA&pid=Api&P=0&h=220' },
    { id: 7, title: ' Motor home', description: 'A beautiful Motor home.', price: 800, image: 'https://tse1.mm.bing.net/th?id=OIP.YCp1_TYOq1QgbPJgkL66FgHaEK&pid=Api&P=0&h=220' },
    { id: 8, title: ' Floating home', description: 'A beautiful Floating home.', price: 700, image: 'https://tse1.mm.bing.net/th?id=OIP.jTc9TsOfI4OAif05Md5GNQHaE7&pid=Api&P=0&h=220' },
    
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
