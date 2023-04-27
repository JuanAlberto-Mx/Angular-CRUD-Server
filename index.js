// Import the express functionality
const express = require('express');

// Import the dbConnection functionalities
const dbConnection = require('./config/dbconnection');

// Creates the server
const app = express();

// Connect to the database
dbConnection();

// Defining a temporal path for the server
app.get('/', (req, resp) => {
    resp.send('Hello World');
});

// Enables the port 4000 to start the server and displays the corresponding message
app.listen(4000, ()=>{
    console.log("Server is running correctly");
});