import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-image">
                    <img
                        src="https://images.unsplash.com/photo-1606293926075-69a00febf280?q=80&w=2070&auto=format&fit=crop"
                        alt="Indian Artisans"
                        className="about-img"
                    />
                </div>
                <div className="about-content">
                    <span className="section-subtitle">About Vedanco</span>
                    <h2 className="section-title">Your Trusted Partner for Indian Exports</h2>
                    <p className="about-text">
                        Vedanco is your trusted partner for exporting premium Indian handmade and organic products to global markets. Founded by Nachiket Patel, we combine traditional Indian craftsmanship with modern export standards, bringing the essence of Swadeshi products to international businesses and distributors.
                    </p>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Authentic</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Artisans</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Countries</span>
                        </div>
                    </div>
                    <a href="#contact" className="btn btn-secondary">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default About;
