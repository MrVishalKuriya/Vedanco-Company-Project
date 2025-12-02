const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Seed products database
// @route   POST /api/products/seed
// @access  Public (should be protected in production)
exports.seedProducts = async (req, res, next) => {
    try {
        await Product.deleteMany({});

        const initialProducts = [
            {
                title: 'Organic Honey & Ghee',
                description: 'Pure, raw honey sourced from pristine forests and traditional desi ghee made from organic milk. Certified organic and free from any additives or processing.',
                image: '/products/organic-honey-ghee.png',
                category: 'Food',
                features: [
                    '100% pure and organic certified',
                    'No additives or preservatives',
                    'Traditional production methods',
                    'Lab-tested for quality'
                ]
            },
            {
                title: 'Ayurvedic & Wellness',
                description: 'Ancient Ayurvedic formulations and wellness products made from pure herbs and natural ingredients. Time-tested recipes for modern health needs.',
                image: '/products/ayurvedic-wellness.png',
                category: 'Wellness',
                features: [
                    'Traditional Ayurvedic recipes',
                    'Pure herbal ingredients',
                    'GMP certified manufacturing',
                    'Clinical quality standards'
                ]
            },
            {
                title: 'Handmade & Khadi',
                description: 'Authentic Indian handwoven textiles and traditional Khadi fabric products. Each piece represents centuries of craftsmanship and sustainable manufacturing practices.',
                image: '/products/handmade-khadi.png',
                category: 'Textiles',
                features: [
                    '100% handwoven cotton and silk',
                    'Traditional dyeing techniques',
                    'Sustainable and eco-friendly',
                    'Export-ready quality packaging'
                ]
            },
            {
                title: 'Pickles & Spices',
                description: 'Authentic Indian pickles and premium spices, prepared using traditional recipes and the finest ingredients. Bold flavors that capture the essence of Indian cuisine.',
                image: '/products/pickles-spices.png',
                category: 'Food',
                features: [
                    'Traditional recipes',
                    'Premium quality spices',
                    'No artificial flavors',
                    'Long shelf life for export'
                ]
            }
        ];

        const products = await Product.insertMany(initialProducts);

        res.status(201).json({
            success: true,
            message: 'Products seeded successfully',
            count: products.length,
            data: products
        });
    } catch (error) {
        next(error);
    }
};
