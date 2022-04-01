import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orderreview">OrderReview</Link>
                <Link to="/grandpa">GrandPa</Link>
            </nav>
        </div>
    );
};

export default Header;