const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    company: String,
    phone: String,
    interest: String,
    message: String,
    date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

app.get('/', (req, res) => {
    res.send('Hello from MERStack Server!');
});

app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    category: String,
    features: [String]
});

const Product = mongoose.model('Product', productSchema);

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.post('/api/products/seed', async (req, res) => {
    try {
        await Product.deleteMany({}); // Clear existing products

        const initialProducts = [
            {
                title: 'Handmade & Khadi',
                description: 'Authentic Indian handwoven textiles and traditional Khadi fabric products. Each piece represents centuries of craftsmanship and sustainable manufacturing practices.',
                image: 'https://images.unsplash.com/photo-1606293926075-69a00febf280?auto=format&fit=crop&q=80&w=800',
                category: 'Textiles',
                features: [
                    '100% handwoven cotton and silk',
                    'Traditional dyeing techniques',
                    'Sustainable and eco-friendly',
                    'Export-ready quality packaging'
                ]
            },
            {
                title: 'Organic Honey & Ghee',
                description: 'Pure, raw honey sourced from pristine forests and traditional desi ghee made from organic milk. Certified organic and free from any additives or processing.',
                image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
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
                image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800',
                category: 'Wellness',
                features: [
                    'Traditional Ayurvedic recipes',
                    'Pure herbal ingredients',
                    'GMP certified manufacturing',
                    'Clinical quality standards'
                ]
            },
            {
                title: 'Pickles & Spices',
                description: 'Authentic Indian pickles and premium spices, prepared using traditional recipes and the finest ingredients. Bold flavors that capture the essence of Indian cuisine.',
                image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
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
        res.status(201).json({ message: 'Products seeded successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to seed products' });
    }
});

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/merstak_db')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
