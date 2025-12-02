const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Product title is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true
    },
    image: {
        type: String,
        required: [true, 'Product image URL is required']
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        trim: true
    },
    features: [{
        type: String,
        trim: true
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
