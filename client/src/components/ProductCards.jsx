import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './ProductCards.css';

const ProductCards = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data.data || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section id="products" className="section products-cards-section">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Our Products</span>
                    <h2 className="section-title">Discover our range of authentic Indian products</h2>
                    <p className="section-description">Carefully curated for export markets</p>
                </motion.div>

                {loading ? (
                    <div className="loading-spinner">Loading products...</div>
                ) : (
                    <motion.div
                        className="products-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {products.map(product => (
                            <motion.div key={product._id || product.id} className="product-card" variants={itemVariants}>
                                <div className="card-image-wrapper">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="card-image"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://placehold.co/600x400?text=Image+Not+Found';
                                        }}
                                    />
                                </div>
                                <div className="card-content">
                                    <h3 className="card-title">{product.title}</h3>
                                    <p className="card-description">{product.description}</p>
                                    <a href="/products" className="btn btn-outline-primary card-btn">View Details</a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ProductCards;
