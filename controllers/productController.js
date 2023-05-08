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

exports.updateProduct = async (req, resp) => {
    try {
        // Set the structure of the product according to the schema created previously
        const {name, category, location, price} = req.body;

        // Obtaining the product by using the id parameter
        let product = await Product.findById(req.params.id);

        if(!product) {
            resp.status(404).json({msg:'The product requested does not exist'})
        }

        // Set the product object with the values obtained from the request body
        product.name = name;
        product.category = category;
        product.location = location;
        product.price = price;

        // Updating the product with the new values by using the findOneAndUpdate method
        product = await Product.findOneAndUpdate({_id: req.params.id}, product, {new: true});

        // Sending a product object in JSON format as a response
        resp.json(product);
    }
    catch(error) {
        console.log(error);

        // Sending a response to the user
        resp.status(500).send('It is not possible to update the product');
    }
}

exports.getProduct = async (req, resp) => {
    try {
        // Obtaining the product by using the id parameter
        let product = await Product.findById(req.params.id);

        if(!product) {
            resp.status(404).json({msg:'The product requested does not exist'})
        }

        // Return the product in a JSON format
        resp.json(product);
    }
    catch(error) {
        console.log(error);

        // Sending a response to the user
        resp.status(500).send('It is not possible to obtain the products');
    }
};

exports.deleteProduct = async (req, resp) => {
    try {
        // Obtaining the product by using the id parameter
        let product = await Product.findById(req.params.id);

        if(!product) {
            resp.status(404).json({msg:'The product requested does not exist'})
        }

        // Delete the product related to the id received
        await Product.findOneAndRemove({_id: req.params.id});

        // Return the message in a JSON format
        resp.json({msg:'Product deleted successfully'});
    }
    catch(error) {
        console.log(error);

        // Sending a response to the user
        resp.status(500).send('It is not possible to delete the product');
    }
}