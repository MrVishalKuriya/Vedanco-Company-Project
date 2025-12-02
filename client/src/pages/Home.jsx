import React from 'react';
import Hero from '../components/Hero';
import ProductCards from '../components/ProductCards';
import Features from '../components/Features';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <>
            <Hero />
            <ProductCards />
            <Features />
            <CTA />
        </>
    );
};

export default Home;
