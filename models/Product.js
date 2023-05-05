// Import the mongoose library
const mongoose = require('mongoose');

// Product model definition by using a mongoose schema
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
});

// Export the created model under the name 'Product'
module.exports = mongoose.model('Product', ProductSchema);