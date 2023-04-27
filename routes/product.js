// Import express library to define the product routes
const express = require('express');

// Import express library to use the routes properties
const router = express.Router();

// Import the product controller to include its functionality
const productController = require('../controllers/productController');

// Defining the path equivalent to 'api/products' related to POST method
router.post('/', productController.createProduct);

module.exports = router;