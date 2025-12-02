import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="Vedanco" className="logo-img" />
                    </Link>
                </div>
                <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link to="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Get Quote</Link>
                </div>
                <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
