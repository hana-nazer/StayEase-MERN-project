// Import the Express framework and create an instance of the app
const express = require("express");
const app = express();

// Load environment variables from a .env file in the project root directory
require("dotenv").config();

// Require the dbConfig module to get database configuration information
const dbConfig = require('./config/dbConfig');


// Enable JSON parsing for incoming requests
app.use(express.json());

const userRouter = require('./routes/userRouter')
app.use('/api/',userRouter)




// Set the port number to the value of the PORT environment variable if it exists, or 5000 otherwise
const port = process.env.PORT || 5000;

// Start the app and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`server is running in the port ${port}`);
});
