const Product = require("../models/Product");

// Function to create a new product
exports.createProduct = async (req, resp) => {
    try {
        // Variable to set the product values
        let product;

        // Create the Product object with the values received in the request
        product = new Product(req.body);

        // Save the product in the database
        await product.save();

        // Send a message to the user with the Product values stored
        resp.send(product);
    }
    catch(error){
        console.log(error);

        // Sending a response to the user
        resp.status(500).send('An error ocurred during the product creation');
    }
};

exports.getProducts = async (req, resp) => {
    try {
        // Obtain the product from the DB by using the find method
        const product = await Product.find();

        // Return the product in a JSON format
        resp.json(product);
    }
    catch(error) {
        console.log(error);

        // Sending a response to the user
        resp.status(500).send('It is not possible to obtain the products');
    }
};