// Import express library to define the product routes
const express = require('express');

// Import express library to use the routes properties
const router = express.Router();

// Defining the path equivalent to 'api/products' related to POST method
router.post('/', () => {
    console.log('Creating a new product');
});

module.exports = router;