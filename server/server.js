// Import the Express framework and create an instance of the app
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const ownerRouter = require("./routes/ownerRoutes");
const adminRouter = require('./routes/adminRoutes')

// Load environment variables from a .env file in the project root directory
require("dotenv").config();

// Require the dbConfig module to get database configuration information
const dbConfig = require("./config/dbConfig");

// Enable JSON parsing for incoming requests
app.use(express.json());

// Enable CORS for incoming requests
app.use(
  cors({
    credentials: process.env.CORS_CREDENTIALS === "true", // Whether to allow cookies to be sent along with the request
    origin: process.env.CORS_ORIGIN, // The origin(s) from which requests are allowed, specified as a string or an array of strings
  })
);

// Route incoming requests to the appropriate router
app.use("/", userRouter);
app.use("/owner", ownerRouter);
app.use("/admin",adminRouter)

// Set the port number to the value of the PORT environment variable if it exists, or 5000 otherwise
const port = process.env.PORT || 5000;

// Start the app and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`server is running in the port ${port}`);
});
