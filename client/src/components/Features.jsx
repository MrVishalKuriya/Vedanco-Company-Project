import React from 'react';
import { FaAward, FaEarthAmericas, FaCertificate, FaTruckFast } from 'react-icons/fa6';
import './Features.css';

const Features = () => {
    const features = [
        {
            id: 1,
            title: 'Premium Quality',
            description: 'Carefully sourced and quality-checked products',
            icon: <FaAward />
        },
        {
            id: 2,
            title: 'Global Reach',
            description: 'Exporting to multiple countries worldwide',
            icon: <FaEarthAmericas />
        },
        {
            id: 3,
            title: 'Certified Suppliers',
            description: 'FSSAI, Organic, and ISO certified products',
            icon: <FaCertificate />
        },
        {
            id: 4,
            title: 'Reliable Delivery',
            description: 'Consistent repeat orders and timely shipping',
            icon: <FaTruckFast />
        }
    ];

    return (
        <section id="features" className="section features">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">Why Choose Vedanco?</span>
                    <h2 className="section-title">Your reliable partner for authentic Indian products export</h2>
                </div>
                <div className="features-grid">
                    {features.map(feature => (
                        <div key={feature.id} className="feature-item">
                            <div className="feature-icon-wrapper">
                                <span className="feature-icon">{feature.icon}</span>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
