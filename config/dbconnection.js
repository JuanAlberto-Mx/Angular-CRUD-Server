// Import mongoose library to get its functionality.
const mongoose = require('mongoose');

// Accessing the variables file to get the database connection data.
require('dotenv').config(
    {
        path: 'variables.env'
    }
);

// Creates the connection to the dbProducts database
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database successfully connected');
    }
    catch(error) {
        console.log(error);
        process.exit(1); // Stop the application
    }
}

// Exports the function dbConnection to make it accessible to other files
module.exports = dbConnection;