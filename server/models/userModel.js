const mongoose = require("mongoose");

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String, 
      default: "user", 
    },
  },
  {
    timestamps: true,
  }
);

// Create the User model using the userSchema and export it
module.exports = mongoose.model("users", userSchema);
