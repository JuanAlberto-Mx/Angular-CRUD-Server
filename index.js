// Import the express functionality
const express = require('express');

// Import the dbConnection functionalities
const dbConnection = require('./config/dbconnection');

// Creates the server
const app = express();

// Connect to the database
dbConnection();

// Enable the application to receive JSON format objects
app.use(express.json());

// Use the product route every time the user enter the path '/api/products'
app.use('/api/products', require('./routes/product'));

// Enables the port 4000 to start the server and displays the corresponding message
app.listen(4000, ()=>{
    console.log("Server is running correctly");
});