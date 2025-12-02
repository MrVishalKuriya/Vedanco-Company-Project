import React from 'react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="section cta">
            <div className="container cta-container">
                <h2 className="cta-title">Ready to Get Started?</h2>
                <p className="cta-description">
                    Request a free sample or download our complete catalog to explore our premium product range
                </p>
                <div className="cta-buttons">
                    <a href="#sample" className="btn btn-cta-primary">Request Free Sample</a>
                    <a href="#catalog" className="btn btn-cta-secondary">Download Catalog</a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
