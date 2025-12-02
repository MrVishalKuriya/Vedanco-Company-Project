import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-logo">Vedanco</h3>
                        <p className="footer-tagline">Swadeshi Roots, Global Reach</p>
                        <p className="footer-desc">
                            Premium Indian handmade and organic products for export worldwide.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Product Categories</h4>
                        <ul className="footer-links">
                            <li><Link to="/products">Handmade & Khadi</Link></li>
                            <li><Link to="/products">Organic Honey & Ghee</Link></li>
                            <li><Link to="/products">Ayurvedic & Wellness</Link></li>
                            <li><Link to="/products">Pickles & Spices</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact</h4>
                        <ul className="footer-contact">
                            <li>info@vedanco.com</li>
                            <li>+91 XXXXX XXXXX</li>
                            <li>Gujarat, India</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Vedanco. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
