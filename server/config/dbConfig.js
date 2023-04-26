// Require the Mongoose library
const mongoose = require("mongoose");

// Connect to MongoDB using the provided environment variable and options
mongoose
  .connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
  })
  // If the connection is successful, log a message to the console
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  // If there is an error connecting to the database, log the error to the console
  .catch((err) => {
    console.error("Error connecting to MongoDB database", err);
  });
