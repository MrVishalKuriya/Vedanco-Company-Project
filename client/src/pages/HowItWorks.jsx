import React from 'react';
import { FaComments, FaCheckCircle, FaBox, FaShip } from 'react-icons/fa';
import CTA from '../components/CTA';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            id: '01',
            title: 'Inquiry & Consultation',
            description: 'Reach out to us with your product requirements. We\'ll discuss your needs, target markets, and specific preferences to recommend the best products from our catalog.',
            icon: <FaComments />
        },
        {
            id: '02',
            title: 'Sample Approval',
            description: 'We send premium samples for your evaluation. Once you test and approve the quality, we move forward with finalizing the order details.',
            icon: <FaCheckCircle />
        },
        {
            id: '03',
            title: 'Order Processing & Packaging',
            description: 'Your order is processed with care. We ensure secure, export-grade packaging that meets international standards and preserves product freshness.',
            icon: <FaBox />
        },
        {
            id: '04',
            title: 'Shipping & Delivery',
            description: 'We handle all logistics and documentation. Your shipment is dispatched via reliable carriers, ensuring timely delivery to your destination.',
            icon: <FaShip />
        }
    ];

    return (
        <div className="page-container">
            <section className="section how-it-works-hero">
                <div className="container text-center">
                    <h1 className="page-title">How It Works</h1>
                    <p className="page-subtitle">
                        Simple, transparent process from inquiry to delivery - your journey to premium Indian products
                    </p>
                </div>
            </section>

            <section className="section steps-section">
                <div className="container">
                    <div className="steps-container">
                        {steps.map((step, index) => (
                            <div key={step.id} className="step-item">
                                <div className="step-number">{step.id}</div>
                                <div className="step-icon-wrapper">
                                    <span className="step-icon">{step.icon}</span>
                                </div>
                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default HowItWorks;
