import React from 'react';
import CTA from '../components/CTA';
import './About.css';

const About = () => {
    return (
        <div className="page-container about-page">
            {/* Hero Section */}
            <section className="section about-hero">
                <div className="container text-center">
                    <span className="section-subtitle">About Vedanco</span>
                    <h1 className="page-title">Bridging Indian Heritage with Global Markets</h1>
                    <p className="page-subtitle">
                        Premium handmade and organic products for the world
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="section story-section">
                <div className="container story-container">
                    <div className="story-content">
                        <h2 className="section-title">Our Story</h2>
                        <p className="story-text">
                            Vedanco was founded with a vision to bring the richness of traditional Indian products to global markets. We believe in the power of Swadeshi - products made in India, by Indian artisans and producers, carrying centuries of heritage and craftsmanship.
                        </p>
                        <p className="story-text">
                            Our journey began with a simple mission: to connect verified Indian suppliers with international businesses seeking authentic, premium-quality products. Today, we serve distributors, retailers, and health stores across multiple countries.
                        </p>
                        <p className="story-text">
                            Every product we export carries a story of traditional craftsmanship, sustainable practices, and the dedication of Indian artisans and organic farmers who pour their expertise into creating exceptional products.
                        </p>
                    </div>
                    <div className="story-image">
                        <img
                            src="/indian-heritage.png"
                            alt="Indian Heritage"
                            className="img-responsive rounded-lg shadow-lg"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://placehold.co/600x400?text=Indian+Heritage';
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="section mission-vision-section">
                <div className="container mission-vision-grid">
                    <div className="mv-card mission-card">
                        <h3>Our Mission</h3>
                        <p>
                            To become the most trusted bridge between Indian manufacturers and global markets, ensuring quality, authenticity, and reliability in every shipment. We aim to empower Indian artisans and organic producers by opening international opportunities.
                        </p>
                    </div>
                    <div className="mv-card vision-card">
                        <h3>Our Vision</h3>
                        <p>
                            To make Indian handmade and organic products a preferred choice in global markets, recognized for their quality, sustainability, and cultural authenticity. We envision a world where Swadeshi products are celebrated internationally.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section
            <section className="section founder-section">
                <div className="container founder-container">
                    <div className="founder-image">
                        <img
                            src="/founder.png"
                            alt="Nachiket Patel - Founder & CEO"
                            className="founder-photo"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="founder-placeholder"><span>NP</span></div>';
                            }}
                        />
                    </div>
                    <div className="founder-content">
                        <h2 className="founder-name">Nachiket Patel</h2>
                        <span className="founder-title">Founder & CEO</span>
                        <p className="founder-bio">
                            With a passion for Indian heritage and global business experience, Nachiket founded Vedanco to bridge the gap between traditional Indian manufacturers and international markets. His vision is to showcase the excellence of Indian craftsmanship and organic products on the world stage, while ensuring fair opportunities for local producers.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Co found Yug Ladani Keshod phone:- 9913969874
            <section className="section founder-section">
                <div className="container founder-container">
                    <div className="founder-image">
                        <img
                            src="/founder.png"
                            alt="Yug Ladani Keshod - Co-founder"
                            className="founder-photo"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '<div class="founder-placeholder"><span>YLK</span></div>';
                            }}
                        />
                    </div>
                    <div className="founder-content">
                        <h2 className="founder-name">Ladani Yug</h2>
                        <b>phone:- 9913969874</b>
                        <span className="founder-title">Co-founder</span>
                        <p className="founder-bio">
                            Yug Ladani Keshod is a co-founder of Vedanco, a company that specializes in organic and handmade products. He has a passion for Indian heritage and global business experience, and he founded Vedanco to bridge the gap between traditional Indian manufacturers and international markets. His vision is to showcase the excellence of Indian craftsmanship and organic products on the world stage, while ensuring fair opportunities for local producers.
                        </p>
                    </div>
                </div>
            </section> */}
            {/* Certifications & Global Reach */}
            <section className="section certs-reach-section">
                <div className="container certs-reach-grid">
                    <div className="certs-column">
                        <h2 className="section-title">Certifications</h2>
                        <ul className="certs-list">
                            <li><span className="check-icon">✓</span> FSSAI Certified</li>
                            <li><span className="check-icon">✓</span> Organic Certified</li>
                            <li><span className="check-icon">✓</span> ISO Certified</li>
                            <li><span className="check-icon">✓</span> Export Approved</li>
                        </ul>
                    </div>
                    <div className="reach-column">
                        <h2 className="section-title">Global Reach</h2>
                        <p className="reach-intro">We export to multiple countries worldwide:</p>
                        <div className="reach-tags">
                            <span className="reach-tag">United States</span>
                            <span className="reach-tag">United Kingdom</span>
                            <span className="reach-tag">Canada</span>
                            <span className="reach-tag">Australia</span>
                            <span className="reach-tag">United Arab Emirates</span>
                            <span className="reach-tag">Singapore</span>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default About;
