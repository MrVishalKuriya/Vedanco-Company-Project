import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaCircleCheck } from 'react-icons/fa6';
import './Products.css';

const Products = () => {
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

    return (
        <section id="products" className="section products">
            <div className="container">
                <motion.div
                    className="section-header text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Our Products</span>
                    <h2 className="section-title">Premium Indian handmade and organic products, carefully curated for international markets</h2>
                </motion.div>

                {loading ? (
                    <div className="loading-spinner">Loading products...</div>
                ) : (
                    <div className="products-list">
                        {products.map((product, index) => (
                            <motion.div
                                key={product._id || product.id}
                                className={`product-row ${index % 2 !== 0 ? 'reverse' : ''}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="product-content">
                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-description">{product.description}</p>

                                    {product.features && (
                                        <ul className="product-features">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx}>
                                                    <span className="feature-icon"><FaCircleCheck /></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <a href="#contact" className="btn btn-primary product-btn">Inquire About This Category</a>
                                </div>

                                <div className="product-image-wrapper">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="product-image"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://placehold.co/600x400?text=Image+Not+Found';
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Products;
