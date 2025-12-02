const express = require('express');
const router = express.Router();
const { auth, admin } = require('../middleware/auth');
const Contact = require('../models/Contact');
const Product = require('../models/Product');

router.get('/stats', [auth, admin], async (req, res) => {
    try {
        const productCount = await Product.countDocuments();
        const contactCount = await Contact.countDocuments();
        res.json({ productCount, contactCount });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/contacts', [auth, admin], async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ date: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
