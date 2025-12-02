import React from 'react';
import ProductsComponent from '../components/Products';
import './ProductsPage.css';

const Products = () => {
    return (
        <div className="page-container products-page">
            <ProductsComponent />

            <section className="section catalog-cta-section">
                <div className="container text-center">
                    <h2 className="catalog-title">Download Our Complete Catalog</h2>
                    <p className="catalog-description">
                        Get detailed information about all our products, pricing, MOQ, and export specifications
                    </p>
                    <a href="#catalog" className="btn btn-primary catalog-btn">Request Catalog</a>
                </div>
            </section>
        </div>
    );
};

export default Products;
