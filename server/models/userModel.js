const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // The name field is required
    },
    email: {
      type: String,
      required: true, // The email field is required
      unique: true, // The email field must be unique
    },
    password: {
      type: String,
      required: true, // The password field is required
    },

    userBlock:{
        type:Boolean,
        default:false
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields to the schema
  }
);

// Create the User model using the userSchema and export it
module.exports = mongoose.model('users',userSchema)
