const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    category: String,
    features: [String]
});

const Product = mongoose.model('Product', productSchema);

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/merstak_db');
        console.log('Connected to MongoDB');

        await Product.deleteMany({});
        console.log('Cleared existing products');

        const initialProducts = [
            {
                title: 'Organic Honey & Ghee',
                description: 'Pure, raw honey sourced from pristine forests and traditional desi ghee made from organic milk. Certified organic and free from any additives or processing.',
                image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=800',
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
                image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800',
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
                image: 'https://images.unsplash.com/photo-1576014131795-d44019922e96?auto=format&fit=crop&q=80&w=800',
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
                image: 'https://images.unsplash.com/photo-1621996666835-18453472692e?auto=format&fit=crop&q=80&w=800',
                category: 'Food',
                features: [
                    'Traditional recipes',
                    'Premium quality spices',
                    'No artificial flavors',
                    'Long shelf life for export'
                ]
            }
        ];

        await Product.insertMany(initialProducts);
        console.log('Products seeded successfully');

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding products:', error);
        process.exit(1);
    }
};

seedProducts();
