import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css'; // CSS import


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Crud with salman developer</h1>
            <ul className="nav-links">
                <li><Link to="/">Data </Link></li>
                <li><Link to="/dataread">Data Read</Link></li>
          
            </ul>
        </nav>
    );
};

export default Navbar;
