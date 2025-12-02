import React, { useState } from 'react';
import axios from 'axios';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        interest: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                interest: '',
                message: ''
            });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
        }
    };

    return (
        <div className="page-container contact-page">
            <section className="section contact-hero">
                <div className="container text-center">
                    <h1 className="page-title">Contact Us</h1>
                    <p className="page-subtitle">
                        Get in touch with us for export inquiries, product samples, or catalog requests
                    </p>
                </div>
            </section>

            <section className="section contact-content">
                <div className="container contact-grid">
                    {/* Left Column: Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon"><FaEnvelope /></div>
                            <div className="info-details">
                                <h3>Email</h3>
                                <p>info@vedanco.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><FaPhone /></div>
                            <div className="info-details">
                                <h3>Phone / WhatsApp</h3>
                                <p>+91 XXXXX XXXXX</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><FaMapMarkerAlt /></div>
                            <div className="info-details">
                                <h3>Address</h3>
                                <p>Gujarat, India</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon"><FaClock /></div>
                            <div className="info-details">
                                <h3>Business Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                                <p>Saturday: 9:00 AM - 2:00 PM IST</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="contact-form-container">
                        <h2 className="form-title">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@company.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your company name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="interest">Product Interest</label>
                                <input
                                    type="text"
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    placeholder="e.g., Organic Honey, Khadi Products, etc."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your requirements, target market, and quantity needed..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && <p className="success-msg">Message sent successfully! We'll get back to you soon.</p>}
                            {status === 'error' && <p className="error-msg">Failed to send message. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
