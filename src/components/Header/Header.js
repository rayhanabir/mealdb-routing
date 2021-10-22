import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/category">Category</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;