// Function to create a new product
exports.createProduct = (req, resp) => {
    console.log('Create Product Section');

    // Printing the 'product' object received
    console.log(req.body);
};