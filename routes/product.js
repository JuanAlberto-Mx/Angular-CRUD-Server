// Import express library to define the product routes
const express = require('express');

// Import express library to use the routes properties
const router = express.Router();

// Import the product controller to include its functionality
const productController = require('../controllers/productController');

// Defining the path equivalent to 'api/products' related to POST method
router.post('/', productController.createProduct);

// Defining the path equivalent to 'api/products' related to GET method
router.get('/', productController.getProducts);

// Defining the path equivalent to 'api/products/<id_product>' related to GET method
router.get('/:id', productController.getProduct);

// Defining the path equivalent to 'api/products/<id_product>' related to PUT method
router.put('/:id', productController.updateProduct);

// Defining the path equivalent to 'api/products/<id_product>' related to DELETE method
router.delete('/:id', productController.deleteProduct);

module.exports = router;